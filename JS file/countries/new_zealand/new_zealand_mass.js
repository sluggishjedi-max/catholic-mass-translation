// New Zealand Catholic Bishops Conference beta Mass data.
(function registerNewZealandMass(global) {
  'use strict';

  global.countryMassData = global.countryMassData || {};
  const englishMissal = global.countryMassData['GB-ENG'] || global.countryMassData.IE || global.countryMassData.US;
  if (!englishMissal || !englishMissal.ordinary || !englishMissal.romanMissalProperData) {
    throw new Error('New Zealand Mass data requires a complete English Roman Missal module to be loaded first.');
  }
  function cloneFrozen(value) {
    if (Array.isArray(value)) return Object.freeze(value.map(cloneFrozen));
    if (value && typeof value === 'object') {
      return Object.freeze(Object.fromEntries(Object.entries(value).map(([key, entry]) => [key, cloneFrozen(entry)])));
    }
    return value;
  }
  function splitEnglishText(value) {
    const phrases = String(value || '').split(/<br\s*\/?\s*>/i).flatMap(part => part.split(/(?<=[.;!?])\s+(?=[A-Z])/));
    const output = [];
    phrases.map(part => part.trim()).filter(Boolean).forEach(phraseValue => {
      let phrase = phraseValue;
      while (phrase.length > 520) {
        let cut = phrase.lastIndexOf(' ', 420);
        if (cut < 120) cut = 420;
        output.push(phrase.slice(0, cut).trim());
        phrase = phrase.slice(cut).trim();
      }
      if (phrase) output.push(phrase);
    });
    let rubricOpen = false;
    return output.map(phrase => {
      const fragment = (rubricOpen ? '<span class="rubric">' : '') + phrase;
      for (const match of fragment.matchAll(/<span\b[^>]*class=["'][^"']*\brubric\b[^"']*["'][^>]*>|<\/span>/giu)) rubricOpen = !/^<\//u.test(match[0]);
      return fragment + (rubricOpen ? '</span>' : '');
    });
  }
  function splitEnglishRows(rows) {
    return (Array.isArray(rows) ? rows : []).flatMap(row => {
      const text = typeof row.text_en === 'string' ? splitEnglishText(row.text_en) : null;
      const rubric = typeof row.rubric_en === 'string' ? row.rubric_en.split(/<br\s*\/?\s*>/i) : null;
      if ((!text || text.length === 1) && (!rubric || rubric.length === 1)) return [Object.assign({}, row)];
      const base = Object.assign({}, row);
      delete base.text_en;
      delete base.rubric_en;
      const output = [];
      (rubric || []).map(value => value.trim()).filter(Boolean).forEach(value => output.push(Object.assign({}, base, {
        rubric_en: value
      })));
      (text || []).map(value => value.trim()).filter(Boolean).forEach((value, index) => output.push(Object.assign({}, base, {
        sp_en: index ? '' : row.sp_en || '',
        text_en: value
      })));
      return output;
    });
  }
  function structureEnglishOrdinary(source) {
    return source.map(entry => {
      const item = Object.assign({}, global.ordoMassStorage?.hydrateMassEntry(entry) || entry);
      ['lines', 'common_dialogue', 'sanctus', 'amen'].forEach(key => {
        if (Array.isArray(item[key])) item[key] = splitEnglishRows(item[key]);
      });
      if (item.variants) item.variants = Object.fromEntries(Object.entries(item.variants).map(([key, variant]) => [key, variant && Array.isArray(variant.lines) ? Object.assign({}, variant, {
        lines: splitEnglishRows(variant.lines)
      }) : variant]));
      if (item.forms) item.forms = Object.fromEntries(Object.entries(item.forms).map(([key, rows]) => [key, splitEnglishRows(rows)]));
      if (item.songs) item.songs = Object.fromEntries(Object.entries(item.songs).map(([key, song]) => [key, song && Array.isArray(song.content) ? Object.assign({}, song, {
        content: splitEnglishRows(song.content)
      }) : song]));
      return global.ordoMassStorage?.canonicalMassEntry(item) || item;
    });
  }
  // MASS_DATA_EDITOR_OVERRIDES_START
  const ordinaryEditorOverrides = [
    {
      "replace": {
        "entryId": "3.3 eucharist",
        "relativePath": [
          "forms",
          "1"
        ],
        "rows": [
          {
            "sp_en": "P.",
            "text_en": "To you, therefore, most merciful Father",
            "__ordinaryStage": "te_igitur",
            "__massEditorPairKeys": {
              "text_en": "canon:te_igitur:0:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "we make humble prayer and petition through Jesus Christ, your Son, our Lord:",
            "__ordinaryStage": "te_igitur",
            "__massEditorPairKeys": {
              "text_en": "canon:te_igitur:1:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "that you accept and bless ✠ these gifts, these offerings,",
            "__ordinaryStage": "te_igitur",
            "__massEditorPairKeys": {
              "text_en": "canon:te_igitur:2:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "these holy and unblemished sacrifices,",
            "__ordinaryStage": "te_igitur",
            "__massEditorPairKeys": {
              "text_en": "canon:te_igitur:3:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "which we offer you firstly for your holy catholic Church.",
            "__ordinaryStage": "te_igitur",
            "__massEditorPairKeys": {
              "text_en": "canon:te_igitur:4:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "Be pleased to grant her peace,",
            "__ordinaryStage": "te_igitur",
            "__massEditorPairKeys": {
              "text_en": "canon:te_igitur:5:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "to guard, unite and govern her throughout the whole world,",
            "__ordinaryStage": "te_igitur",
            "__massEditorPairKeys": {
              "text_en": "canon:te_igitur:6:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "together with your servant [Pope Name] our Pope",
            "__ordinaryStage": "te_igitur",
            "__massEditorPairKeys": {
              "text_en": "canon:te_igitur:7:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "and [Bishop Name] our Bishop, (and Auxiliary Bishops,)",
            "__ordinaryStage": "te_igitur",
            "__massEditorPairKeys": {
              "text_en": "canon:te_igitur:8:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "and all those who, holding to the truth,",
            "__ordinaryStage": "te_igitur",
            "__massEditorPairKeys": {
              "text_en": "canon:te_igitur:9:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "hand on the catholic and apostolic faith.",
            "__ordinaryStage": "te_igitur",
            "__massEditorPairKeys": {
              "text_en": "canon:te_igitur:10:text"
            }
          },
          {
            "sp_en": "P.",
            "text_en": "Remember, Lord, your servants [Person Name]. and [the Other Person Name].",
            "__ordinaryStage": "living",
            "__massEditorPairKeys": {
              "text_en": "canon:living:0:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "and all gathered here,",
            "__ordinaryStage": "living",
            "__massEditorPairKeys": {
              "text_en": "canon:living:1:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "whose faith and devotion are known to you.",
            "__ordinaryStage": "living",
            "__massEditorPairKeys": {
              "text_en": "canon:living:2:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "For them, we offer you this sacrifice of praise",
            "__ordinaryStage": "living",
            "__massEditorPairKeys": {
              "text_en": "canon:living:3:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "or they offer it for themselves and all who are dear to them,",
            "__ordinaryStage": "living",
            "__massEditorPairKeys": {
              "text_en": "canon:living:4:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "for the redemption of their souls,",
            "__ordinaryStage": "living",
            "__massEditorPairKeys": {
              "text_en": "canon:living:5:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "in hope of health and well-being and paying their homage to you,",
            "__ordinaryStage": "living",
            "__massEditorPairKeys": {
              "text_en": "canon:living:6:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "the eternal God, living and true.",
            "__ordinaryStage": "living",
            "__massEditorPairKeys": {
              "text_en": "canon:living:7:text"
            }
          },
          {
            "type": "optionBlock",
            "optionKey": "roman_canon_season",
            "defaultOption": "ordinary",
            "showControl": true,
            "label": {
              "en": "Ordinary Time"
            },
            "options": {
              "ordinary": {
                "label": {
                  "en": "Ordinary Time"
                },
                "lines": [
                  {
                    "sp_en": "P.",
                    "text_en": "In communion with those whose memory we venerate,",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:0:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "especially the glorious ever-Virgin Mary",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:1:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "Mother of our God and Lord, Jesus Christ,",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:2:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "and blessed Joseph, her Spouse,",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:3:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "your blessed Apostles and Martyrs,",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:4:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "Peter and Paul, Andrew,",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:5:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "(James, John, Thomas, James, Philip,",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:6:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "Bartholomew, Matthew,",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:7:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "Simon and Jude:",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:8:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "Linus, Cletus, Clement, Sixtus,",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:9:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "Cornelius, Cyprian, Lawrence, Chrysogonus,",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:10:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "John and Paul, Cosmas and Damian)",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:11:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "and all your Saints:",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:12:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "we ask that through their merits and prayers,",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:13:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "in all things we may be defended",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:14:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "by your protecting help.",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:15:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "(Through Christ our Lord.",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:16:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "Amen.)",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:17:text"
                    }
                  }
                ]
              },
              "christmas": {
                "label": {
                  "en": "Christmas"
                },
                "lines": [
                  {
                    "sp_en": "P.",
                    "text_en": "Celebrating the most sacred night (day)",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:0:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "when blessed Mary the immaculate Virgin",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:1:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "brought forth the Savior for this world,",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:2:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "and in communion with those whose memory we venerate,",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:3:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "especially the glorious ever-Virgin Mary",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:4:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "Mother of our God and Lord, Jesus Christ,",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:5:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "and blessed Joseph, her Spouse,",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:6:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "your blessed Apostles and Martyrs,",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:7:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "Peter and Paul, Andrew,",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:8:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "(James, John, Thomas, James, Philip,",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:9:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "Bartholomew, Matthew,",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:10:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "Simon and Jude:",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:11:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "Linus, Cletus, Clement, Sixtus,",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:12:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "Cornelius, Cyprian, Lawrence, Chrysogonus,",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:13:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "John and Paul, Cosmas and Damian)",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:14:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "and all your Saints:",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:15:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "we ask that through their merits and prayers,",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:16:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "in all things we may be defended",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:17:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "by your protecting help.",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:18:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "(Through Christ our Lord.",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:19:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "Amen.)",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:20:text"
                    }
                  }
                ]
              },
              "epiphany": {
                "label": {
                  "en": "Epiphany"
                },
                "lines": [
                  {
                    "sp_en": "P.",
                    "text_en": "Celebrating the most sacred day",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:0:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "on which your Only Begotten Son,",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:1:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "eternal with you in your glory,",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:2:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "appeared in a human body, truly sharing our flesh,",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:3:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "and in communion with those whose memory we venerate,",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:4:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "especially the glorious ever-Virgin Mary",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:5:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "Mother of our God and Lord, Jesus Christ,",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:6:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "and blessed Joseph, her Spouse,",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:7:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "your blessed Apostles and Martyrs,",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:8:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "Peter and Paul, Andrew,",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:9:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "(James, John, Thomas, James, Philip,",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:10:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "Bartholomew, Matthew,",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:11:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "Simon and Jude:",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:12:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "Linus, Cletus, Clement, Sixtus,",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:13:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "Cornelius, Cyprian, Lawrence, Chrysogonus,",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:14:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "John and Paul, Cosmas and Damian)",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:15:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "and all your Saints:",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:16:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "we ask that through their merits and prayers,",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:17:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "in all things we may be defended",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:18:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "by your protecting help.",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:19:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "(Through Christ our Lord.",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:20:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "Amen.)",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:21:text"
                    }
                  }
                ]
              },
              "easter": {
                "label": {
                  "en": "Easter"
                },
                "lines": [
                  {
                    "sp_en": "P.",
                    "text_en": "Celebrating the most sacred night (day)",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:0:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "of the Resurrection of our Lord Jesus Christ in the flesh,",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:1:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "and in communion with those whose memory we venerate,",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:2:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "especially the glorious ever-Virgin Mary",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:3:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "Mother of our God and Lord, Jesus Christ,",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:4:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "and blessed Joseph, her Spouse,",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:5:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "your blessed Apostles and Martyrs,",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:6:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "Peter and Paul, Andrew,",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:7:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "(James, John, Thomas, James, Philip,",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:8:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "Bartholomew, Matthew,",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:9:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "Simon and Jude:",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:10:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "Linus, Cletus, Clement, Sixtus,",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:11:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "Cornelius, Cyprian, Lawrence, Chrysogonus,",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:12:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "John and Paul, Cosmas and Damian)",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:13:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "and all your Saints:",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:14:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "we ask that through their merits and prayers,",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:15:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "in all things we may be defended",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:16:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "by your protecting help.",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:17:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "(Through Christ our Lord.",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:18:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "Amen.)",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:19:text"
                    }
                  }
                ]
              },
              "ascension": {
                "label": {
                  "en": "Ascension"
                },
                "lines": [
                  {
                    "sp_en": "P.",
                    "text_en": "Celebrating the most sacred day",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:0:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "on which your Only Begotten Son, our Lord,",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:1:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "placed at the right hand of your glory",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:2:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "our weak human nature,",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:3:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "which he had united to himself,",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:4:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "and in communion with those whose memory we venerate,",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:5:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "especially the glorious ever-Virgin Mary",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:6:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "Mother of our God and Lord, Jesus Christ,",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:7:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "and blessed Joseph, her Spouse,",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:8:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "your blessed Apostles and Martyrs,",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:9:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "Peter and Paul, Andrew,",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:10:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "(James, John, Thomas, James, Philip,",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:11:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "Bartholomew, Matthew,",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:12:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "Simon and Jude:",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:13:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "Linus, Cletus, Clement, Sixtus,",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:14:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "Cornelius, Cyprian, Lawrence, Chrysogonus,",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:15:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "John and Paul, Cosmas and Damian)",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:16:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "and all your Saints:",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:17:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "we ask that through their merits and prayers,",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:18:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "in all things we may be defended",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:19:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "by your protecting help.",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:20:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "(Through Christ our Lord.",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:21:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "Amen.)",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:22:text"
                    }
                  }
                ]
              },
              "pentecost": {
                "label": {
                  "en": "Pentecost"
                },
                "lines": [
                  {
                    "sp_en": "P.",
                    "text_en": "Celebrating the most sacred day of Pentecost,",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:0:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "on which the Holy Spirit",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:1:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "appeared to the Apostles in tongues of fire,",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:2:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "and in communion with those whose memory we venerate,",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:3:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "especially the glorious ever-Virgin Mary",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:4:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "Mother of our God and Lord, Jesus Christ,",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:5:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "and blessed Joseph, her Spouse,",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:6:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "your blessed Apostles and Martyrs,",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:7:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "Peter and Paul, Andrew,",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:8:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "(James, John, Thomas, James, Philip,",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:9:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "Bartholomew, Matthew,",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:10:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "Simon and Jude:",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:11:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "Linus, Cletus, Clement, Sixtus,",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:12:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "Cornelius, Cyprian, Lawrence, Chrysogonus,",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:13:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "John and Paul, Cosmas and Damian)",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:14:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "and all your Saints:",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:15:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "we ask that through their merits and prayers,",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:16:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "in all things we may be defended",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:17:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "by your protecting help.",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:18:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "(Through Christ our Lord.",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:19:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "Amen.)",
                    "__ordinaryStage": "communicantes",
                    "__massEditorPairKeys": {
                      "text_en": "canon:communicantes:20:text"
                    }
                  }
                ]
              }
            },
            "pairKey": "canon:communicantes:choice"
          },
          {
            "type": "optionBlock",
            "optionKey": "roman_canon_season",
            "defaultOption": "ordinary",
            "showControl": false,
            "label": {
              "en": "Ordinary Time"
            },
            "options": {
              "ordinary": {
                "label": {
                  "en": "Ordinary Time"
                },
                "lines": [
                  {
                    "sp_en": "P.",
                    "text_en": "Therefore, Lord, we pray:",
                    "__ordinaryStage": "hanc_igitur",
                    "__massEditorPairKeys": {
                      "text_en": "canon:hanc_igitur:0:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "graciously accept this oblation of our service,",
                    "__ordinaryStage": "hanc_igitur",
                    "__massEditorPairKeys": {
                      "text_en": "canon:hanc_igitur:1:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "that of your whole family;",
                    "__ordinaryStage": "hanc_igitur",
                    "__massEditorPairKeys": {
                      "text_en": "canon:hanc_igitur:2:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "order our days in your peace,",
                    "__ordinaryStage": "hanc_igitur",
                    "__massEditorPairKeys": {
                      "text_en": "canon:hanc_igitur:3:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "and command that we be delivered from eternal damnation",
                    "__ordinaryStage": "hanc_igitur",
                    "__massEditorPairKeys": {
                      "text_en": "canon:hanc_igitur:4:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "and counted among the flock of those you have chosen.",
                    "__ordinaryStage": "hanc_igitur",
                    "__massEditorPairKeys": {
                      "text_en": "canon:hanc_igitur:5:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "(Through Christ our Lord.",
                    "__ordinaryStage": "hanc_igitur",
                    "__massEditorPairKeys": {
                      "text_en": "canon:hanc_igitur:6:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "Amen.)",
                    "__ordinaryStage": "hanc_igitur",
                    "__massEditorPairKeys": {
                      "text_en": "canon:hanc_igitur:7:text"
                    }
                  }
                ]
              },
              "christmas": {
                "label": {
                  "en": "Christmas"
                },
                "lines": [
                  {
                    "sp_en": "P.",
                    "text_en": "Therefore, Lord, we pray:",
                    "__ordinaryStage": "hanc_igitur",
                    "__massEditorPairKeys": {
                      "text_en": "canon:hanc_igitur:0:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "graciously accept this oblation of our service,",
                    "__ordinaryStage": "hanc_igitur",
                    "__massEditorPairKeys": {
                      "text_en": "canon:hanc_igitur:1:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "that of your whole family;",
                    "__ordinaryStage": "hanc_igitur",
                    "__massEditorPairKeys": {
                      "text_en": "canon:hanc_igitur:2:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "order our days in your peace,",
                    "__ordinaryStage": "hanc_igitur",
                    "__massEditorPairKeys": {
                      "text_en": "canon:hanc_igitur:3:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "and command that we be delivered from eternal damnation",
                    "__ordinaryStage": "hanc_igitur",
                    "__massEditorPairKeys": {
                      "text_en": "canon:hanc_igitur:4:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "and counted among the flock of those you have chosen.",
                    "__ordinaryStage": "hanc_igitur",
                    "__massEditorPairKeys": {
                      "text_en": "canon:hanc_igitur:5:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "(Through Christ our Lord.",
                    "__ordinaryStage": "hanc_igitur",
                    "__massEditorPairKeys": {
                      "text_en": "canon:hanc_igitur:6:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "Amen.)",
                    "__ordinaryStage": "hanc_igitur",
                    "__massEditorPairKeys": {
                      "text_en": "canon:hanc_igitur:7:text"
                    }
                  }
                ]
              },
              "epiphany": {
                "label": {
                  "en": "Epiphany"
                },
                "lines": [
                  {
                    "sp_en": "P.",
                    "text_en": "Therefore, Lord, we pray:",
                    "__ordinaryStage": "hanc_igitur",
                    "__massEditorPairKeys": {
                      "text_en": "canon:hanc_igitur:0:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "graciously accept this oblation of our service,",
                    "__ordinaryStage": "hanc_igitur",
                    "__massEditorPairKeys": {
                      "text_en": "canon:hanc_igitur:1:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "that of your whole family;",
                    "__ordinaryStage": "hanc_igitur",
                    "__massEditorPairKeys": {
                      "text_en": "canon:hanc_igitur:2:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "order our days in your peace,",
                    "__ordinaryStage": "hanc_igitur",
                    "__massEditorPairKeys": {
                      "text_en": "canon:hanc_igitur:3:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "and command that we be delivered from eternal damnation",
                    "__ordinaryStage": "hanc_igitur",
                    "__massEditorPairKeys": {
                      "text_en": "canon:hanc_igitur:4:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "and counted among the flock of those you have chosen.",
                    "__ordinaryStage": "hanc_igitur",
                    "__massEditorPairKeys": {
                      "text_en": "canon:hanc_igitur:5:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "(Through Christ our Lord.",
                    "__ordinaryStage": "hanc_igitur",
                    "__massEditorPairKeys": {
                      "text_en": "canon:hanc_igitur:6:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "Amen.)",
                    "__ordinaryStage": "hanc_igitur",
                    "__massEditorPairKeys": {
                      "text_en": "canon:hanc_igitur:7:text"
                    }
                  }
                ]
              },
              "easter": {
                "label": {
                  "en": "Easter"
                },
                "lines": [
                  {
                    "sp_en": "P.",
                    "text_en": "Therefore, Lord, we pray:",
                    "__ordinaryStage": "hanc_igitur",
                    "__massEditorPairKeys": {
                      "text_en": "canon:hanc_igitur:0:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "graciously accept this oblation of our service,",
                    "__ordinaryStage": "hanc_igitur",
                    "__massEditorPairKeys": {
                      "text_en": "canon:hanc_igitur:1:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "that of your whole family,",
                    "__ordinaryStage": "hanc_igitur",
                    "__massEditorPairKeys": {
                      "text_en": "canon:hanc_igitur:2:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "which we make to you",
                    "__ordinaryStage": "hanc_igitur",
                    "__massEditorPairKeys": {
                      "text_en": "canon:hanc_igitur:3:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "also for those to whom you have been pleased to give",
                    "__ordinaryStage": "hanc_igitur",
                    "__massEditorPairKeys": {
                      "text_en": "canon:hanc_igitur:4:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "the new birth of water and the Holy Spirit,",
                    "__ordinaryStage": "hanc_igitur",
                    "__massEditorPairKeys": {
                      "text_en": "canon:hanc_igitur:5:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "granting them forgiveness of all their sins:",
                    "__ordinaryStage": "hanc_igitur",
                    "__massEditorPairKeys": {
                      "text_en": "canon:hanc_igitur:6:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "order our days in your peace,",
                    "__ordinaryStage": "hanc_igitur",
                    "__massEditorPairKeys": {
                      "text_en": "canon:hanc_igitur:7:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "and command that we be delivered from eternal damnation",
                    "__ordinaryStage": "hanc_igitur",
                    "__massEditorPairKeys": {
                      "text_en": "canon:hanc_igitur:8:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "and counted among the flock of those you have chosen.",
                    "__ordinaryStage": "hanc_igitur",
                    "__massEditorPairKeys": {
                      "text_en": "canon:hanc_igitur:9:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "(Through Christ our Lord.",
                    "__ordinaryStage": "hanc_igitur",
                    "__massEditorPairKeys": {
                      "text_en": "canon:hanc_igitur:10:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "Amen.)",
                    "__ordinaryStage": "hanc_igitur",
                    "__massEditorPairKeys": {
                      "text_en": "canon:hanc_igitur:11:text"
                    }
                  }
                ]
              },
              "ascension": {
                "label": {
                  "en": "Ascension"
                },
                "lines": [
                  {
                    "sp_en": "P.",
                    "text_en": "Therefore, Lord, we pray:",
                    "__ordinaryStage": "hanc_igitur",
                    "__massEditorPairKeys": {
                      "text_en": "canon:hanc_igitur:0:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "graciously accept this oblation of our service,",
                    "__ordinaryStage": "hanc_igitur",
                    "__massEditorPairKeys": {
                      "text_en": "canon:hanc_igitur:1:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "that of your whole family;",
                    "__ordinaryStage": "hanc_igitur",
                    "__massEditorPairKeys": {
                      "text_en": "canon:hanc_igitur:2:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "order our days in your peace,",
                    "__ordinaryStage": "hanc_igitur",
                    "__massEditorPairKeys": {
                      "text_en": "canon:hanc_igitur:3:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "and command that we be delivered from eternal damnation",
                    "__ordinaryStage": "hanc_igitur",
                    "__massEditorPairKeys": {
                      "text_en": "canon:hanc_igitur:4:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "and counted among the flock of those you have chosen.",
                    "__ordinaryStage": "hanc_igitur",
                    "__massEditorPairKeys": {
                      "text_en": "canon:hanc_igitur:5:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "(Through Christ our Lord.",
                    "__ordinaryStage": "hanc_igitur",
                    "__massEditorPairKeys": {
                      "text_en": "canon:hanc_igitur:6:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "Amen.)",
                    "__ordinaryStage": "hanc_igitur",
                    "__massEditorPairKeys": {
                      "text_en": "canon:hanc_igitur:7:text"
                    }
                  }
                ]
              },
              "pentecost": {
                "label": {
                  "en": "Pentecost"
                },
                "lines": [
                  {
                    "sp_en": "P.",
                    "text_en": "Therefore, Lord, we pray:",
                    "__ordinaryStage": "hanc_igitur",
                    "__massEditorPairKeys": {
                      "text_en": "canon:hanc_igitur:0:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "graciously accept this oblation of our service,",
                    "__ordinaryStage": "hanc_igitur",
                    "__massEditorPairKeys": {
                      "text_en": "canon:hanc_igitur:1:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "that of your whole family;",
                    "__ordinaryStage": "hanc_igitur",
                    "__massEditorPairKeys": {
                      "text_en": "canon:hanc_igitur:2:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "order our days in your peace,",
                    "__ordinaryStage": "hanc_igitur",
                    "__massEditorPairKeys": {
                      "text_en": "canon:hanc_igitur:3:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "and command that we be delivered from eternal damnation",
                    "__ordinaryStage": "hanc_igitur",
                    "__massEditorPairKeys": {
                      "text_en": "canon:hanc_igitur:4:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "and counted among the flock of those you have chosen.",
                    "__ordinaryStage": "hanc_igitur",
                    "__massEditorPairKeys": {
                      "text_en": "canon:hanc_igitur:5:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "(Through Christ our Lord.",
                    "__ordinaryStage": "hanc_igitur",
                    "__massEditorPairKeys": {
                      "text_en": "canon:hanc_igitur:6:text"
                    }
                  },
                  {
                    "sp_en": "",
                    "text_en": "Amen.)",
                    "__ordinaryStage": "hanc_igitur",
                    "__massEditorPairKeys": {
                      "text_en": "canon:hanc_igitur:7:text"
                    }
                  }
                ]
              }
            },
            "pairKey": "canon:hanc_igitur:choice"
          },
          {
            "sp_en": "P.",
            "text_en": "Be pleased, O God, we pray,",
            "__ordinaryStage": "quam_oblationem",
            "__massEditorPairKeys": {
              "text_en": "canon:quam_oblationem:0:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "to bless, acknowledge, and approve this offering in every respect;",
            "__ordinaryStage": "quam_oblationem",
            "__massEditorPairKeys": {
              "text_en": "canon:quam_oblationem:1:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "make it spiritual and acceptable,",
            "__ordinaryStage": "quam_oblationem",
            "__massEditorPairKeys": {
              "text_en": "canon:quam_oblationem:2:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "so that it may become for us",
            "__ordinaryStage": "quam_oblationem",
            "__massEditorPairKeys": {
              "text_en": "canon:quam_oblationem:3:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "the Body and Blood of your most beloved Son, our Lord Jesus Christ.",
            "__ordinaryStage": "quam_oblationem",
            "__massEditorPairKeys": {
              "text_en": "canon:quam_oblationem:4:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "On the day before he was to suffer,",
            "__ordinaryStage": "bread",
            "__massEditorPairKeys": {
              "text_en": "canon:bread:0:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "he took bread in his holy and venerable hands,",
            "__ordinaryStage": "bread",
            "__massEditorPairKeys": {
              "text_en": "canon:bread:1:text"
            }
          },
          {
            "__ordinaryStage": "bread",
            "__massEditorPairKeys": {
              "rubric_en": "canon:bread:2:rubric"
            },
            "rubric_en": "He raises his eyes."
          },
          {
            "sp_en": "",
            "text_en": "and with eyes raised to heaven",
            "__ordinaryStage": "bread",
            "__massEditorPairKeys": {
              "text_en": "canon:bread:3:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "to you, O God, his almighty Father,",
            "__ordinaryStage": "bread",
            "__massEditorPairKeys": {
              "text_en": "canon:bread:4:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "giving you thanks he said the blessing, broke the bread",
            "__ordinaryStage": "bread",
            "__massEditorPairKeys": {
              "text_en": "canon:bread:5:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "and gave it to his disciples, saying:",
            "__ordinaryStage": "bread",
            "__massEditorPairKeys": {
              "text_en": "canon:bread:6:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "<B>TAKE THIS, ALL OF YOU, AND EAT OF IT,</b>",
            "__ordinaryStage": "bread",
            "__massEditorPairKeys": {
              "text_en": "canon:bread:7:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "<b>FOR THIS IS MY BODY,</b>",
            "__ordinaryStage": "bread",
            "__massEditorPairKeys": {
              "text_en": "canon:bread:8:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "<b>WHICH WILL BE GIVEN UP FOR YOU.</b>",
            "__ordinaryStage": "bread",
            "__massEditorPairKeys": {
              "text_en": "canon:bread:9:text"
            }
          },
          {
            "rubric_en": "After gazing at the consecrated Host shown by the priest,",
            "__ordinaryStage": "bread",
            "__massEditorPairKeys": {
              "rubric_en": "canon:bread:10:rubric"
            }
          },
          {
            "rubric_en": "all genuflect (or bow deeply) when the priest places it on the paten.",
            "__ordinaryStage": "bread",
            "__massEditorPairKeys": {
              "rubric_en": "canon:bread:11:rubric"
            }
          },
          {
            "sp_en": "P.",
            "text_en": "In a similar way, when supper was ended,",
            "__ordinaryStage": "cup",
            "__massEditorPairKeys": {
              "text_en": "canon:cup:0:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "he took this precious chalice",
            "__ordinaryStage": "cup",
            "__massEditorPairKeys": {
              "text_en": "canon:cup:1:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "in his holy and venerable hands,",
            "__ordinaryStage": "cup",
            "__massEditorPairKeys": {
              "text_en": "canon:cup:2:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "and once more giving you thanks, he said the blessing",
            "__ordinaryStage": "cup",
            "__massEditorPairKeys": {
              "text_en": "canon:cup:3:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "and gave the chalice to his disciples, saying:",
            "__ordinaryStage": "cup",
            "__massEditorPairKeys": {
              "text_en": "canon:cup:4:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "<b>TAKE THIS, ALL OF YOU, AND DRINK FROM IT,</b>",
            "__ordinaryStage": "cup",
            "__massEditorPairKeys": {
              "text_en": "canon:cup:5:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "FOR THIS IS THE CHALICE OF MY BLOOD,",
            "__ordinaryStage": "cup",
            "__massEditorPairKeys": {
              "text_en": "canon:cup:6:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "THE BLOOD OF THE NEW AND ETERNAL COVENANT,",
            "__ordinaryStage": "cup",
            "__massEditorPairKeys": {
              "text_en": "canon:cup:7:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "<B>WHICH WILL BE POURED OUT FOR YOU AND FOR MANY</B>",
            "__ordinaryStage": "cup",
            "__massEditorPairKeys": {
              "text_en": "canon:cup:8:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "<b>FOR THE FORGIVENESS OF SINS.</b>",
            "__ordinaryStage": "cup",
            "__massEditorPairKeys": {
              "text_en": "canon:cup:9:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "<b>DO THIS IN MEMORY OF ME.</b>",
            "__ordinaryStage": "cup",
            "__massEditorPairKeys": {
              "text_en": "canon:cup:10:text"
            }
          },
          {
            "rubric_en": "After gazing at the chalice shown by the priest, all genuflect (or bow deeply) when he places it on the corporal.",
            "__ordinaryStage": "cup",
            "__massEditorPairKeys": {
              "rubric_en": "canon:cup:11:rubric"
            }
          },
          {
            "sp_en": "P.",
            "text_en": "The mystery of faith.",
            "__ordinaryStage": "mystery_invitation",
            "__massEditorPairKeys": {
              "text_en": "canon:mystery_invitation:0:text"
            }
          },
          {
            "sp_en": "ALL",
            "text_en": "We proclaim your Death, O Lord,",
            "__ordinaryStage": "mystery_a",
            "__massEditorPairKeys": {
              "text_en": "canon:mystery_a:0:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "and profess your Resurrection",
            "__ordinaryStage": "mystery_a",
            "__massEditorPairKeys": {
              "text_en": "canon:mystery_a:1:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "until you come again.",
            "__ordinaryStage": "mystery_a",
            "__massEditorPairKeys": {
              "text_en": "canon:mystery_a:2:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "When we eat this Bread and drink this Cup,",
            "rubric_en": "Or: ",
            "rubricLayout_en": {
              "blockEnd": 0,
              "pieces": [
                {
                  "at": 0,
                  "from": 0,
                  "to": 4,
                  "left": "",
                  "right": "When we eat this Bread and drink"
                }
              ]
            },
            "__ordinaryStage": "mystery_b",
            "__massEditorPairKeys": {
              "rubric_en": "canon:mystery_b:0:rubric",
              "text_en": "canon:mystery_b:0:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "we proclaim your Death, O Lord,",
            "__ordinaryStage": "mystery_b",
            "__massEditorPairKeys": {
              "text_en": "canon:mystery_b:1:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "until you come again.",
            "__ordinaryStage": "mystery_b",
            "__massEditorPairKeys": {
              "text_en": "canon:mystery_b:2:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "Save us, Savior of the world,",
            "rubric_en": "Or: ",
            "rubricLayout_en": {
              "blockEnd": 0,
              "pieces": [
                {
                  "at": 0,
                  "from": 0,
                  "to": 4,
                  "left": "",
                  "right": "Save us, Savior of the world,"
                }
              ]
            },
            "__ordinaryStage": "mystery_c",
            "__massEditorPairKeys": {
              "rubric_en": "canon:mystery_c:0:rubric",
              "text_en": "canon:mystery_c:0:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "for by your Cross and Resurrection",
            "__ordinaryStage": "mystery_c",
            "__massEditorPairKeys": {
              "text_en": "canon:mystery_c:1:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "you have set us free.",
            "__ordinaryStage": "mystery_c",
            "__massEditorPairKeys": {
              "text_en": "canon:mystery_c:2:text"
            }
          },
          {
            "sp_en": "P.",
            "text_en": "Therefore, O Lord,",
            "__ordinaryStage": "anamnesis",
            "__massEditorPairKeys": {
              "text_en": "canon:anamnesis:0:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "as we celebrate the memorial of the blessed Passion,",
            "__ordinaryStage": "anamnesis",
            "__massEditorPairKeys": {
              "text_en": "canon:anamnesis:1:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "the Resurrection from the dead,",
            "__ordinaryStage": "anamnesis",
            "__massEditorPairKeys": {
              "text_en": "canon:anamnesis:2:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "and the glorious Ascension into heaven of Christ, your Son, our Lord,",
            "__ordinaryStage": "anamnesis",
            "__massEditorPairKeys": {
              "text_en": "canon:anamnesis:3:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "we, your servants and your holy people,",
            "__ordinaryStage": "anamnesis",
            "__massEditorPairKeys": {
              "text_en": "canon:anamnesis:4:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "offer to your glorious majesty",
            "__ordinaryStage": "anamnesis",
            "__massEditorPairKeys": {
              "text_en": "canon:anamnesis:5:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "from the gifts that you have given us,",
            "__ordinaryStage": "anamnesis",
            "__massEditorPairKeys": {
              "text_en": "canon:anamnesis:6:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "this pure victim, this holy victim, this spotless victim,",
            "__ordinaryStage": "anamnesis",
            "__massEditorPairKeys": {
              "text_en": "canon:anamnesis:7:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "the holy Bread of eternal life",
            "__ordinaryStage": "anamnesis",
            "__massEditorPairKeys": {
              "text_en": "canon:anamnesis:8:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "and the Chalice of everlasting salvation.",
            "__ordinaryStage": "anamnesis",
            "__massEditorPairKeys": {
              "text_en": "canon:anamnesis:9:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "Be pleased to look upon these offerings",
            "__ordinaryStage": "supra_quae",
            "__massEditorPairKeys": {
              "text_en": "canon:supra_quae:0:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "with a serene and kindly countenance,",
            "__ordinaryStage": "supra_quae",
            "__massEditorPairKeys": {
              "text_en": "canon:supra_quae:1:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "and to accept them,",
            "__ordinaryStage": "supra_quae",
            "__massEditorPairKeys": {
              "text_en": "canon:supra_quae:2:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "as once you were pleased to accept",
            "__ordinaryStage": "supra_quae",
            "__massEditorPairKeys": {
              "text_en": "canon:supra_quae:3:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "the gifts of your servant Abel the just,",
            "__ordinaryStage": "supra_quae",
            "__massEditorPairKeys": {
              "text_en": "canon:supra_quae:4:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "the sacrifice of Abraham, our father in faith,",
            "__ordinaryStage": "supra_quae",
            "__massEditorPairKeys": {
              "text_en": "canon:supra_quae:5:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "and the offering of your high priest Melchizedek,",
            "__ordinaryStage": "supra_quae",
            "__massEditorPairKeys": {
              "text_en": "canon:supra_quae:6:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "a holy sacrifice, a spotless victim.",
            "__ordinaryStage": "supra_quae",
            "__massEditorPairKeys": {
              "text_en": "canon:supra_quae:7:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "In humble prayer we ask you, almighty God:",
            "__ordinaryStage": "supplices",
            "__massEditorPairKeys": {
              "text_en": "canon:supplices:0:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "command that these gifts be borne",
            "__ordinaryStage": "supplices",
            "__massEditorPairKeys": {
              "text_en": "canon:supplices:1:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "by the hands of your holy Angel to your altar on high",
            "__ordinaryStage": "supplices",
            "__massEditorPairKeys": {
              "text_en": "canon:supplices:2:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "in the sight of your divine majesty,",
            "__ordinaryStage": "supplices",
            "__massEditorPairKeys": {
              "text_en": "canon:supplices:3:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "so that all of us who through this participation at the altar receive",
            "__ordinaryStage": "supplices",
            "__massEditorPairKeys": {
              "text_en": "canon:supplices:4:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "the most holy Body and Blood of your Son,",
            "__ordinaryStage": "supplices",
            "__massEditorPairKeys": {
              "text_en": "canon:supplices:5:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "may be filled with every grace and heavenly blessing.",
            "__ordinaryStage": "supplices",
            "__massEditorPairKeys": {
              "text_en": "canon:supplices:6:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "(Through Christ our Lord.",
            "__ordinaryStage": "supplices",
            "__massEditorPairKeys": {
              "text_en": "canon:supplices:7:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "Amen.)",
            "__ordinaryStage": "supplices",
            "__massEditorPairKeys": {
              "text_en": "canon:supplices:8:text"
            }
          },
          {
            "sp_en": "P.",
            "text_en": "Remember also, Lord, your servants [Person N.] and [the Other Person N.],",
            "__ordinaryStage": "departed",
            "__massEditorPairKeys": {
              "text_en": "canon:departed:0:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "who have gone before us with the sign of faith",
            "__ordinaryStage": "departed",
            "__massEditorPairKeys": {
              "text_en": "canon:departed:1:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "and rest in the sleep of peace.",
            "__ordinaryStage": "departed",
            "__massEditorPairKeys": {
              "text_en": "canon:departed:2:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "Grant them, O Lord, we pray,",
            "__ordinaryStage": "departed",
            "__massEditorPairKeys": {
              "text_en": "canon:departed:3:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "and all who sleep in Christ,",
            "__ordinaryStage": "departed",
            "__massEditorPairKeys": {
              "text_en": "canon:departed:4:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "a place of refreshment, light and peace.",
            "__ordinaryStage": "departed",
            "__massEditorPairKeys": {
              "text_en": "canon:departed:5:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "(Through Christ our Lord.",
            "__ordinaryStage": "departed",
            "__massEditorPairKeys": {
              "text_en": "canon:departed:6:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "Amen.)",
            "__ordinaryStage": "departed",
            "__massEditorPairKeys": {
              "text_en": "canon:departed:7:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "To us, also, your servants, who, though sinners,",
            "__ordinaryStage": "nobis_quoque",
            "__massEditorPairKeys": {
              "text_en": "canon:nobis_quoque:0:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "hope in your abundant mercies,",
            "__ordinaryStage": "nobis_quoque",
            "__massEditorPairKeys": {
              "text_en": "canon:nobis_quoque:1:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "graciously grant some share",
            "__ordinaryStage": "nobis_quoque",
            "__massEditorPairKeys": {
              "text_en": "canon:nobis_quoque:2:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "and fellowship with your holy Apostles and Martyrs:",
            "__ordinaryStage": "nobis_quoque",
            "__massEditorPairKeys": {
              "text_en": "canon:nobis_quoque:3:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "with John the Baptist, Stephen,",
            "__ordinaryStage": "nobis_quoque",
            "__massEditorPairKeys": {
              "text_en": "canon:nobis_quoque:4:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "Matthias, Barnabas,",
            "__ordinaryStage": "nobis_quoque",
            "__massEditorPairKeys": {
              "text_en": "canon:nobis_quoque:5:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "(Ignatius, Alexander,",
            "__ordinaryStage": "nobis_quoque",
            "__massEditorPairKeys": {
              "text_en": "canon:nobis_quoque:6:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "Marcellinus, Peter,",
            "__ordinaryStage": "nobis_quoque",
            "__massEditorPairKeys": {
              "text_en": "canon:nobis_quoque:7:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "Felicity, Perpetua,",
            "__ordinaryStage": "nobis_quoque",
            "__massEditorPairKeys": {
              "text_en": "canon:nobis_quoque:8:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "Agatha, Lucy,",
            "__ordinaryStage": "nobis_quoque",
            "__massEditorPairKeys": {
              "text_en": "canon:nobis_quoque:9:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "Agnes, Cecilia, Anastasia)",
            "__ordinaryStage": "nobis_quoque",
            "__massEditorPairKeys": {
              "text_en": "canon:nobis_quoque:10:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "and all your Saints:",
            "__ordinaryStage": "nobis_quoque",
            "__massEditorPairKeys": {
              "text_en": "canon:nobis_quoque:11:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "admit us, we beseech you into their company",
            "__ordinaryStage": "nobis_quoque",
            "__massEditorPairKeys": {
              "text_en": "canon:nobis_quoque:12:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "not weighing our merits, but granting us your pardon,",
            "__ordinaryStage": "nobis_quoque",
            "__massEditorPairKeys": {
              "text_en": "canon:nobis_quoque:13:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "through Christ our Lord.",
            "__ordinaryStage": "nobis_quoque",
            "__massEditorPairKeys": {
              "text_en": "canon:nobis_quoque:14:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "Through whom",
            "__ordinaryStage": "per_quem",
            "__massEditorPairKeys": {
              "text_en": "canon:per_quem:0:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "you continue to make all these good things, O Lord;",
            "__ordinaryStage": "per_quem",
            "__massEditorPairKeys": {
              "text_en": "canon:per_quem:1:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "you sanctify them, fill them with life,",
            "__ordinaryStage": "per_quem",
            "__massEditorPairKeys": {
              "text_en": "canon:per_quem:2:text"
            }
          },
          {
            "sp_en": "",
            "text_en": "bless them, and bestow them upon us.",
            "__ordinaryStage": "per_quem",
            "__massEditorPairKeys": {
              "text_en": "canon:per_quem:3:text"
            }
          }
        ]
      }
    },
    {
      "replace": {
        "entryId": "3.3 eucharist",
        "relativePath": [
          "forms",
          "2"
        ],
        "rows": [
          {
            "sp_en": "P.",
            "text_en": "You are indeed Holy, O Lord,"
          },
          {
            "sp_en": "",
            "text_en": "the fount of all holiness."
          },
          {
            "sp_en": "",
            "text_en": "Make holy, therefore, these gifts, we pray,"
          },
          {
            "sp_en": "",
            "text_en": "by sending down your Spirit upon them like the dewfall,"
          },
          {
            "sp_en": "",
            "text_en": "so that they may become for us, the Body and ✠ Blood of our Lord, Jesus Christ."
          },
          {
            "sp_en": "",
            "text_en": "At the time he was betrayed"
          },
          {
            "sp_en": "",
            "text_en": "and entered willingly into his Passion,"
          },
          {
            "sp_en": "",
            "text_en": "he took bread and, giving thanks,"
          },
          {
            "sp_en": "",
            "text_en": "broke it, and gave it to his disciples, saying:"
          },
          {
            "sp_en": "",
            "text_en": "<B>TAKE THIS, ALL OF YOU, AND EAT OF IT,</b>"
          },
          {
            "sp_en": "",
            "text_en": "<b>FOR THIS IS MY BODY,</b>"
          },
          {
            "sp_en": "",
            "text_en": "<b>WHICH WILL BE GIVEN UP FOR YOU.</b>"
          },
          {
            "rubric_en": "After gazing at the consecrated Host shown by the priest,"
          },
          {
            "rubric_en": "all genuflect (or bow deeply) when the priest places it on the paten."
          },
          {
            "sp_en": "P.",
            "text_en": "In a similar way, when supper was ended,"
          },
          {
            "sp_en": "",
            "text_en": "he took the chalice"
          },
          {
            "sp_en": "",
            "text_en": "and, once more giving thanks,"
          },
          {
            "sp_en": "",
            "text_en": "he gave it to his disciples, saying:"
          },
          {
            "sp_en": "",
            "text_en": "<b>TAKE THIS, ALL OF YOU, AND DRINK FROM IT,</b>"
          },
          {
            "sp_en": "",
            "text_en": "FOR THIS IS THE CHALICE OF MY BLOOD,"
          },
          {
            "sp_en": "",
            "text_en": "THE BLOOD OF THE NEW AND ETERNAL COVENANT,"
          },
          {
            "sp_en": "",
            "text_en": "<B>WHICH WILL BE POURED OUT FOR YOU AND FOR MANY</B>"
          },
          {
            "sp_en": "",
            "text_en": "<b>FOR THE FORGIVENESS OF SINS.</b>"
          },
          {
            "sp_en": "",
            "text_en": "<b>DO THIS IN MEMORY OF ME.</b>"
          },
          {
            "rubric_en": "After gazing at the chalice shown by the priest, all genuflect (or bow deeply) when he places it on the corporal."
          },
          {
            "sp_en": "P.",
            "text_en": "The mystery of faith."
          },
          {
            "sp_en": "ALL",
            "text_en": "We proclaim your Death, O Lord,"
          },
          {
            "sp_en": "",
            "text_en": "and profess your Resurrection"
          },
          {
            "sp_en": "",
            "text_en": "until you come again."
          },
          {
            "sp_en": "",
            "text_en": "When we eat this Bread and drink this Cup,",
            "rubric_en": "Or: ",
            "rubricLayout_en": {
              "blockEnd": 0,
              "pieces": [
                {
                  "at": 0,
                  "from": 0,
                  "to": 4,
                  "left": "",
                  "right": "When we eat this Bread and drink"
                }
              ]
            }
          },
          {
            "sp_en": "",
            "text_en": "we proclaim your Death, O Lord,"
          },
          {
            "sp_en": "",
            "text_en": "until you come again."
          },
          {
            "sp_en": "",
            "text_en": "Save us, Savior of the world,",
            "rubric_en": "Or: ",
            "rubricLayout_en": {
              "blockEnd": 0,
              "pieces": [
                {
                  "at": 0,
                  "from": 0,
                  "to": 4,
                  "left": "",
                  "right": "Save us, Savior of the world,"
                }
              ]
            }
          },
          {
            "sp_en": "",
            "text_en": "for by your Cross and Resurrection"
          },
          {
            "sp_en": "",
            "text_en": "you have set us free."
          },
          {
            "sp_en": "P.",
            "text_en": "Therefore, as we celebrate"
          },
          {
            "sp_en": "",
            "text_en": "the memorial of his Death and Resurrection,"
          },
          {
            "sp_en": "",
            "text_en": "we offer you, Lord,"
          },
          {
            "sp_en": "",
            "text_en": "the Bread of life and the Chalice of salvation,"
          },
          {
            "sp_en": "",
            "text_en": "giving thanks that you have held us worthy"
          },
          {
            "sp_en": "",
            "text_en": "to be in your presence and minister to you."
          },
          {
            "sp_en": "",
            "text_en": "Humbly we pray"
          },
          {
            "sp_en": "",
            "text_en": "that, partaking of the Body and Blood of Christ,"
          },
          {
            "sp_en": "",
            "text_en": "we may be gathered into one by the Holy Spirit."
          },
          {
            "sp_en": "",
            "text_en": "Remember, Lord, your Church,"
          },
          {
            "sp_en": "",
            "text_en": "spread throughout the world,"
          },
          {
            "sp_en": "",
            "text_en": "and bring her to the fullness of charity,"
          },
          {
            "sp_en": "",
            "text_en": "together with [Pope N.] our Pope and [Bishop N.] our Bishop, (and Auxiliary Bishops,)"
          },
          {
            "sp_en": "",
            "text_en": "and all the clergy."
          },
          {
            "rubric_en": "In Masses for the Dead, the following may be added:"
          },
          {
            "sp_en": "P.",
            "text_en": "Remember your servant [Person N.]"
          },
          {
            "sp_en": "",
            "text_en": "whom you have called (today)"
          },
          {
            "sp_en": "",
            "text_en": "from this world to yourself."
          },
          {
            "sp_en": "",
            "text_en": "Grant that he (she) who was united with your Son in a death like his,"
          },
          {
            "sp_en": "",
            "text_en": "may also be one with him in his Resurrection."
          },
          {
            "rubric_en": "After the proper intercessions,"
          },
          {
            "sp_en": "P.",
            "text_en": "Remember also our brothers and sisters"
          },
          {
            "sp_en": "",
            "text_en": "who have fallen asleep in the hope of the resurrection,"
          },
          {
            "sp_en": "",
            "text_en": "and all who have died in your mercy:"
          },
          {
            "sp_en": "",
            "text_en": "welcome them into the light of your face."
          },
          {
            "sp_en": "",
            "text_en": "Have mercy on us all, we pray,"
          },
          {
            "sp_en": "",
            "text_en": "that with the blessed Virgin Mary, Mother of God,"
          },
          {
            "sp_en": "",
            "text_en": "with the blessed Apostles,"
          },
          {
            "sp_en": "",
            "text_en": "and all the Saints who have pleased you throughout the ages,"
          },
          {
            "sp_en": "",
            "text_en": "we may merit to be co-heirs to eternal life,"
          },
          {
            "sp_en": "",
            "text_en": "and may praise and glorify you"
          },
          {
            "sp_en": "",
            "text_en": "through your Son, Jesus Christ."
          }
        ]
      }
    },
    {
      "replace": {
        "entryId": "3.3 eucharist",
        "relativePath": [
          "forms",
          "3"
        ],
        "rows": [
          {
            "sp_en": "P.",
            "text_en": "You are indeed Holy, O Lord,"
          },
          {
            "sp_en": "",
            "text_en": "and all you have created rightly gives you praise,"
          },
          {
            "sp_en": "",
            "text_en": "for through your Son our Lord Jesus Christ,"
          },
          {
            "sp_en": "",
            "text_en": "by the power and working of the Holy Spirit, you give life to all things and make them holy,"
          },
          {
            "sp_en": "",
            "text_en": "and you never cease to gather a people to yourself,"
          },
          {
            "sp_en": "",
            "text_en": "so that from the rising of the sun to its setting a pure sacrifice may be offered to your name."
          },
          {
            "sp_en": "",
            "text_en": "Therefore, O Lord, we humbly implore you:"
          },
          {
            "sp_en": "",
            "text_en": "by the same Spirit graciously make holy these gifts we have brought to you for consecration,"
          },
          {
            "sp_en": "",
            "text_en": "that they may become the Body and ✠ Blood of your Son our Lord Jesus Christ,"
          },
          {
            "sp_en": "",
            "text_en": "at whose command we celebrate these mysteries."
          },
          {
            "sp_en": "",
            "text_en": "For on the night he was betrayed"
          },
          {
            "sp_en": "",
            "text_en": "he himself took bread, and, giving you thanks,"
          },
          {
            "sp_en": "",
            "text_en": "he said the blessing, broke the bread and gave it to his disciples, saying:"
          },
          {
            "sp_en": "",
            "text_en": "<B>TAKE THIS, ALL OF YOU, AND EAT OF IT,</b>"
          },
          {
            "sp_en": "",
            "text_en": "<b>FOR THIS IS MY BODY,</b>"
          },
          {
            "sp_en": "",
            "text_en": "<b>WHICH WILL BE GIVEN UP FOR YOU.</b>"
          },
          {
            "rubric_en": "After gazing at the consecrated Host shown by the priest,"
          },
          {
            "rubric_en": "all genuflect (or bow deeply) when the priest places it on the paten."
          },
          {
            "sp_en": "P.",
            "text_en": "In a similar way, when supper was ended,"
          },
          {
            "sp_en": "",
            "text_en": "he took the chalice, and, giving you thanks, he said the blessing,"
          },
          {
            "sp_en": "",
            "text_en": "and gave the chalice to his disciples, saying:"
          },
          {
            "sp_en": "",
            "text_en": "<b>TAKE THIS, ALL OF YOU, AND DRINK FROM IT,</b>"
          },
          {
            "sp_en": "",
            "text_en": "FOR THIS IS THE CHALICE OF MY BLOOD,"
          },
          {
            "sp_en": "",
            "text_en": "THE BLOOD OF THE NEW AND ETERNAL COVENANT,"
          },
          {
            "sp_en": "",
            "text_en": "<B>WHICH WILL BE POURED OUT FOR YOU AND FOR MANY</B>"
          },
          {
            "sp_en": "",
            "text_en": "<b>FOR THE FORGIVENESS OF SINS.</b>"
          },
          {
            "sp_en": "",
            "text_en": "<b>DO THIS IN MEMORY OF ME.</b>"
          },
          {
            "rubric_en": "After gazing at the chalice shown by the priest, all genuflect (or bow deeply) when he places it on the corporal."
          },
          {
            "sp_en": "P.",
            "text_en": "The mystery of faith."
          },
          {
            "sp_en": "ALL",
            "text_en": "We proclaim your Death, O Lord,"
          },
          {
            "sp_en": "",
            "text_en": "and profess your Resurrection"
          },
          {
            "sp_en": "",
            "text_en": "until you come again."
          },
          {
            "sp_en": "",
            "text_en": "When we eat this Bread and drink this Cup,",
            "rubric_en": "Or: ",
            "rubricLayout_en": {
              "blockEnd": 0,
              "pieces": [
                {
                  "at": 0,
                  "from": 0,
                  "to": 4,
                  "left": "",
                  "right": "When we eat this Bread and drink"
                }
              ]
            }
          },
          {
            "sp_en": "",
            "text_en": "we proclaim your Death, O Lord,"
          },
          {
            "sp_en": "",
            "text_en": "until you come again."
          },
          {
            "sp_en": "",
            "text_en": "Save us, Savior of the world,",
            "rubric_en": "Or: ",
            "rubricLayout_en": {
              "blockEnd": 0,
              "pieces": [
                {
                  "at": 0,
                  "from": 0,
                  "to": 4,
                  "left": "",
                  "right": "Save us, Savior of the world,"
                }
              ]
            }
          },
          {
            "sp_en": "",
            "text_en": "for by your Cross and Resurrection"
          },
          {
            "sp_en": "",
            "text_en": "you have set us free."
          },
          {
            "text_en": "Therefore, O Lord, as we celebrate the memorial of the saving Passion of your Son, his wondrous Resurrection and Ascension into heaven, and as we look forward to his second coming, we offer you in thanksgiving this holy and living sacrifice.",
            "sp_en": "P."
          },
          {
            "text_en": "Look, we pray, upon the oblation of your Church and, recognizing the sacrificial Victim by whose death you willed to reconcile us to yourself, grant that we, who are nourished by the Body and Blood of your Son and filled with his Holy Spirit, may become one body, one spirit in Christ."
          },
          {
            "text_en": "May he make of us an eternal offering to you, so that we may obtain an inheritance with your elect, especially with the most blessed Virgin Mary, Mother of God, with blessed Joseph, her Spouse, with your blessed Apostles and glorious Martyrs (with Saint [Saint Name]) and with all the Saints, on whose constant intercession in your presence we rely for unfailing help."
          },
          {
            "text_en": "May this Sacrifice of our reconciliation, we pray, O Lord, advance the peace and salvation of all the world."
          },
          {
            "text_en": "Be pleased to confirm in faith and charity your pilgrim Church on earth, with your servant [Pope Name] our Pope and [Bishop Name] our Bishop, the Order of Bishops, all the clergy, and the entire people you have gained for your own."
          },
          {
            "text_en": "Listen graciously to the prayers of this family, whom you have summoned before you: in your compassion, O merciful Father, gather to yourself all your children scattered throughout the world."
          },
          {
            "type": "optionBlock",
            "optionKey": "eucharist3_intercession",
            "defaultOption": "ordinary",
            "label": {
              "en": "Eucharistic Prayer III intercession"
            },
            "options": {
              "ordinary": {
                "label": {
                  "en": "Ordinary Mass"
                },
                "lines": [
                  {
                    "sp_en": "",
                    "text_en": "To our departed brothers and sisters and to all who were pleasing to you at their passing from this life, give kind admittance to your kingdom. There we hope to enjoy for ever the fullness of your glory"
                  },
                  {
                    "sp_en": "",
                    "text_en": " "
                  },
                  {
                    "sp_en": "",
                    "text_en": " "
                  },
                  {
                    "sp_en": "",
                    "text_en": " "
                  },
                  {
                    "sp_en": "",
                    "text_en": " "
                  },
                  {
                    "sp_en": "",
                    "text_en": "through Christ our Lord,"
                  },
                  {
                    "sp_en": "",
                    "text_en": "through whom you bestow on the world all that is good."
                  }
                ]
              },
              "funeral": {
                "splitByLanguage": true,
                "label": {
                  "en": "Mass for the Dead"
                },
                "lines": [
                  {
                    "rubric_en": "When this Eucharistic Prayer is used in Masses for the Dead, the following may be said:"
                  },
                  {
                    "sp_en": "",
                    "text_en": "Remember your servant [Person Name] whom you have called (today) from this world to yourself. Grant that he (she) who was united with your Son in a death like his, may also be one with him in his Resurrection, when from the earth he will raise up in the flesh those who have died, and transform our lowly body after the pattern of his own glorious body. To our departed brothers and sisters, too, and to all who were pleasing to you at their passing from this life, give kind admittance to your kingdom. There we hope to enjoy for ever the fullness of your glory, when you will wipe away every tear from our eyes. For seeing you, our God, as you are, we shall be like you for all the ages and praise you without end,"
                  },
                  {
                    "sp_en": "",
                    "text_en": " "
                  },
                  {
                    "sp_en": "",
                    "text_en": " "
                  },
                  {
                    "sp_en": "",
                    "text_en": " "
                  },
                  {
                    "sp_en": "",
                    "text_en": " "
                  },
                  {
                    "sp_en": "",
                    "text_en": " "
                  },
                  {
                    "sp_en": "",
                    "text_en": " "
                  },
                  {
                    "sp_en": "",
                    "text_en": " "
                  },
                  {
                    "sp_en": "",
                    "text_en": " "
                  },
                  {
                    "sp_en": "",
                    "text_en": " "
                  },
                  {
                    "sp_en": "",
                    "text_en": " "
                  },
                  {
                    "sp_en": "",
                    "text_en": "through Christ our Lord,"
                  },
                  {
                    "sp_en": "",
                    "text_en": "through whom you bestow on the world all that is good."
                  }
                ]
              }
            }
          }
        ]
      }
    },
    {
      "replace": {
        "entryId": "3.3 eucharist",
        "relativePath": [
          "forms",
          "4"
        ],
        "rows": [
          {
            "sp_en": "P.",
            "text_en": "It is truly right to give you thanks, truly just to give you glory, Father most holy,"
          },
          {
            "sp_en": "",
            "text_en": "for you are the one God living and true, existing before all ages and abiding for all eternity, dwelling in unapproachable light;"
          },
          {
            "sp_en": "",
            "text_en": "yet you, who alone are good, the source of life, have made all that is, so that you might fill your creatures with blessings and bring joy to many of them by the glory of your light."
          },
          {
            "sp_en": "",
            "text_en": "And so, in your presence are countless hosts of Angels, who serve you day and night and, gazing upon the glory of your face, glorify you without ceasing."
          },
          {
            "sp_en": "",
            "text_en": "With them we, too, confess your name in exultation, giving voice to every creature under heaven as we acclaim:"
          },
          {
            "sp_en": "ALL",
            "text_en": "Holy, Holy,"
          },
          {
            "sp_en": "",
            "text_en": "Holy Lord God of hosts."
          },
          {
            "sp_en": "",
            "text_en": "Heaven and earth are full of your glory."
          },
          {
            "sp_en": "",
            "text_en": "Hosanna in the highest."
          },
          {
            "sp_en": "",
            "text_en": "Blessed is he who comes in the name of the Lord."
          },
          {
            "sp_en": "",
            "text_en": "Hosanna in the highest."
          },
          {
            "sp_en": "P.",
            "text_en": "We give you praise, Father most holy, for you are great, and you have fashioned all your works in wisdom and in love."
          },
          {
            "sp_en": "",
            "text_en": "You formed man in your own image and entrusted the whole world to his care, so that in serving you alone, the Creator, he might have dominion over all creatures."
          },
          {
            "sp_en": "",
            "text_en": "And when through disobedience he had lost your friendship, you did not abandon him to the domain of death."
          },
          {
            "sp_en": "",
            "text_en": "For you came in mercy to the aid of all, so that those who seek might find you."
          },
          {
            "sp_en": "",
            "text_en": "Time and again you offered them covenants and through the prophets taught them to look forward to salvation."
          },
          {
            "sp_en": "",
            "text_en": "And you so loved the world, Father most holy, that in the fullness of time you sent your Only Begotten Son to be our Savior."
          },
          {
            "sp_en": "",
            "text_en": "Made incarnate by the Holy Spirit and born of the Virgin Mary, he shared our human nature in all things but sin."
          },
          {
            "sp_en": "",
            "text_en": "To the poor he proclaimed the good news of salvation, to prisoners, freedom, and to the sorrowful of heart, joy."
          },
          {
            "sp_en": "",
            "text_en": "To accomplish your plan, he gave himself up to death, and, rising from the dead, he destroyed death and restored life."
          },
          {
            "sp_en": "",
            "text_en": "And that we might live no longer for ourselves but for him who died and rose again for us, he sent the Holy Spirit from you, Father, as the first fruits for those who believe,"
          },
          {
            "sp_en": "",
            "text_en": "so that, bringing to perfection his work in the world, he might sanctify creation to the full."
          },
          {
            "sp_en": "",
            "text_en": "Therefore, O Lord, we pray: may this same Holy Spirit graciously sanctify these offerings, that they may become the Body and Blood of our Lord Jesus Christ"
          },
          {
            "sp_en": "",
            "text_en": "for the celebration of this great mystery, which he himself left us as an eternal covenant."
          },
          {
            "sp_en": "",
            "text_en": "For when the hour had come for him to be glorified by you, Father most holy, having loved his own who were in the world, he loved them to the end: and while they were at supper,"
          },
          {
            "sp_en": "",
            "text_en": "he took bread, blessed and broke it, and gave it to his disciples, saying,"
          },
          {
            "sp_en": "",
            "text_en": "<B>TAKE THIS, ALL OF YOU, AND EAT OF IT,</b>"
          },
          {
            "sp_en": "",
            "text_en": "<b>FOR THIS IS MY BODY,</b>"
          },
          {
            "sp_en": "",
            "text_en": "<b>WHICH WILL BE GIVEN UP FOR YOU.</b>"
          },
          {
            "rubric_en": "After gazing at the consecrated Host shown by the priest,"
          },
          {
            "rubric_en": "all genuflect (or bow deeply) when the priest places it on the paten."
          },
          {
            "sp_en": "P.",
            "text_en": "In a similar way, taking the chalice filled with the fruit of the vine, he gave thanks, and gave the chalice to his disciples, saying:"
          },
          {
            "sp_en": "",
            "text_en": "<b>TAKE THIS, ALL OF YOU, AND DRINK FROM IT,</b>"
          },
          {
            "sp_en": "",
            "text_en": "FOR THIS IS THE CHALICE OF MY BLOOD,"
          },
          {
            "sp_en": "",
            "text_en": "THE BLOOD OF THE NEW AND ETERNAL COVENANT,"
          },
          {
            "sp_en": "",
            "text_en": "<B>WHICH WILL BE POURED OUT FOR YOU AND FOR MANY</B>"
          },
          {
            "sp_en": "",
            "text_en": "<b>FOR THE FORGIVENESS OF SINS.</b>"
          },
          {
            "sp_en": "",
            "text_en": "<b>DO THIS IN MEMORY OF ME.</b>"
          },
          {
            "rubric_en": "After gazing at the chalice shown by the priest, all genuflect (or bow deeply) when he places it on the corporal."
          },
          {
            "sp_en": "P.",
            "text_en": "The mystery of faith."
          },
          {
            "sp_en": "ALL",
            "text_en": "We proclaim your Death, O Lord,"
          },
          {
            "sp_en": "",
            "text_en": "and profess your Resurrection"
          },
          {
            "sp_en": "",
            "text_en": "until you come again."
          },
          {
            "sp_en": "",
            "text_en": "When we eat this Bread and drink this Cup,",
            "rubric_en": "Or: ",
            "rubricLayout_en": {
              "blockEnd": 0,
              "pieces": [
                {
                  "at": 0,
                  "from": 0,
                  "to": 4,
                  "left": "",
                  "right": "When we eat this Bread and drink"
                }
              ]
            }
          },
          {
            "sp_en": "",
            "text_en": "we proclaim your Death, O Lord,"
          },
          {
            "sp_en": "",
            "text_en": "until you come again."
          },
          {
            "sp_en": "",
            "text_en": "Save us, Savior of the world,",
            "rubric_en": "Or: ",
            "rubricLayout_en": {
              "blockEnd": 0,
              "pieces": [
                {
                  "at": 0,
                  "from": 0,
                  "to": 4,
                  "left": "",
                  "right": "Save us, Savior of the world,"
                }
              ]
            }
          },
          {
            "sp_en": "",
            "text_en": "for by your Cross and Resurrection"
          },
          {
            "sp_en": "",
            "text_en": "you have set us free."
          },
          {
            "sp_en": "P.",
            "text_en": "Therefore, O Lord, as we now celebrate the memorial of our redemption, we remember Christ's death and his descent to the realm of the dead, we proclaim his Resurrection and his Ascension to your right hand;"
          },
          {
            "sp_en": "",
            "text_en": "and as we await his coming in glory, we offer you his Body and Blood, the sacrifice acceptable to you which brings salvation to the whole world."
          },
          {
            "sp_en": "",
            "text_en": "Look, O Lord, upon the Sacrifice which you yourself have provided for your Church, and grant in your loving kindness to all who partake of this one Bread and one Chalice that, gathered into one body by the Holy Spirit, they may truly become a living sacrifice in Christ to the praise of your glory."
          },
          {
            "sp_en": "",
            "text_en": "Therefore, Lord, remember now all for whom we offer this sacrifice: especially your servant, N. our Pope, N. our Bishop, and the whole Order of Bishops, all the clergy, those who take part in this offering, those gathered here before you, your entire people, and all who seek you with a sincere heart."
          },
          {
            "sp_en": "",
            "text_en": "Remember also those who have died in the peace of your Christ and all the dead, whose faith you alone have known."
          },
          {
            "sp_en": "",
            "text_en": "To all of us, your children, grant, O merciful Father, that we may enter into a heavenly inheritance with the blessed Virgin Mary, Mother of God, and with your Apostles and Saints in your kingdom."
          },
          {
            "sp_en": "",
            "text_en": "There, with the whole of creation, freed from the corruption of sin and death, may we glorify you through Christ our Lord, through whom you bestow on the world all that is good."
          }
        ]
      }
    },
    {
      "replace": {
        "entryId": "3.3 eucharist",
        "relativePath": [
          "formEndings"
        ],
        "rows": {}
      }
    },
    {
      "replace": {
        "entryId": "3.3 eucharist",
        "relativePath": [
          "formFrames"
        ],
        "rows": {
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
      }
    },
    {
      "replace": {
        "entryId": "3.3 eucharist",
        "relativePath": [
          "ordinarySourceLayoutVersion"
        ],
        "rows": 1
      }
    },
    {
      "replace": {
        "entryId": "4.2 blessing",
        "relativePath": [
          "variants",
          "solemn_advent"
        ],
        "rows": {
          "label": {
            "en": "Solemn Blessing - Advent"
          },
          "lines": [
            {
              "sp_en": "B.",
              "text_en": "The Lord be with you."
            },
            {
              "sp_en": "ALL",
              "text_en": "And with your spirit."
            },
            {
              "rubric_en": "Bow your heads and pray for God's blessing."
            },
            {
              "text_en": "May the almighty and merciful God, by whose grace you have placed your faith in the First Coming of his Only Begotten Son and yearn for his coming again sanctify you by the radiance of Christ’s Advent and enrich you with his blessing.",
              "sp_en": "P.",
              "__massEditorPairKeys": {
                "text_en": "blessing:advent:petition:0:text"
              }
            },
            {
              "text_en": "Amen.",
              "sp_en": "ALL",
              "__massEditorPairKeys": {
                "text_en": "blessing:advent:petition:1:text"
              }
            },
            {
              "text_en": "As you run the race of this present life, may he make you firm in faith, joyful in hope and active in charity.",
              "sp_en": "P.",
              "__massEditorPairKeys": {
                "text_en": "blessing:advent:petition:2:text"
              }
            },
            {
              "text_en": "Amen.",
              "sp_en": "ALL",
              "__massEditorPairKeys": {
                "text_en": "blessing:advent:petition:3:text"
              }
            },
            {
              "text_en": "So that, rejoicing now with devotion at the Redeemer’s coming in the flesh, you may be endowed with the rich reward of eternal life when he comes again in majesty.",
              "sp_en": "P.",
              "__massEditorPairKeys": {
                "text_en": "blessing:advent:petition:4:text"
              }
            },
            {
              "text_en": "Amen.",
              "sp_en": "ALL",
              "__massEditorPairKeys": {
                "text_en": "blessing:advent:petition:5:text"
              }
            },
            {
              "text_en": "And may the blessing of almighty God, the Father, and the Son, ✠ and the Holy Spirit, come down on you and remain with you for ever.",
              "sp_en": "P.",
              "__massEditorPairKeys": {
                "text_en": "blessing:advent:ending:2:text"
              }
            },
            {
              "text_en": "Amen.",
              "sp_en": "ALL",
              "__massEditorPairKeys": {
                "text_en": "blessing:advent:ending:1:text"
              }
            }
          ]
        }
      }
    },
    {
      "replace": {
        "entryId": "4.2 blessing",
        "relativePath": [
          "variants",
          "solemn_christmas"
        ],
        "rows": {
          "label": {
            "en": "Solemn Blessing - The Nativity of the Lord"
          },
          "lines": [
            {
              "sp_en": "B.",
              "text_en": "The Lord be with you."
            },
            {
              "sp_en": "ALL",
              "text_en": "And with your spirit."
            },
            {
              "rubric_en": "Bow your heads and pray for God's blessing."
            },
            {
              "text_en": "May the God of infinite goodness, who by the Incarnation of his Son has driven darkness from the world and by that glorious Birth has illumined this most holy night (day), drive far from you the darkness of vice and illumine your hearts with the light of virtue.",
              "sp_en": "P.",
              "__massEditorPairKeys": {
                "text_en": "blessing:christmas:petition:0:text"
              }
            },
            {
              "text_en": "Amen.",
              "sp_en": "ALL",
              "__massEditorPairKeys": {
                "text_en": "blessing:christmas:petition:1:text"
              }
            },
            {
              "text_en": "May God, who willed that the great joy of his Son’s saving Birth be announced to shepherds by the Angel, fill your minds with the gladness he gives and make you heralds of his Gospel.",
              "sp_en": "P.",
              "__massEditorPairKeys": {
                "text_en": "blessing:christmas:petition:2:text"
              }
            },
            {
              "text_en": "Amen.",
              "sp_en": "ALL",
              "__massEditorPairKeys": {
                "text_en": "blessing:christmas:petition:3:text"
              }
            },
            {
              "text_en": "And may God, who by the Incarnation brought together the earthly and heavenly realm, fill you with the gift of his peace and favor and make you sharers with the Church in heaven.",
              "sp_en": "P.",
              "__massEditorPairKeys": {
                "text_en": "blessing:christmas:petition:4:text"
              }
            },
            {
              "text_en": "Amen.",
              "sp_en": "ALL",
              "__massEditorPairKeys": {
                "text_en": "blessing:christmas:petition:5:text"
              }
            },
            {
              "text_en": "And may the blessing of almighty God, the Father, and the Son, ✠ and the Holy Spirit, come down on you and remain with you for ever.",
              "sp_en": "P.",
              "__massEditorPairKeys": {
                "text_en": "blessing:christmas:ending:2:text"
              }
            },
            {
              "text_en": "Amen.",
              "sp_en": "ALL",
              "__massEditorPairKeys": {
                "text_en": "blessing:christmas:ending:1:text"
              }
            }
          ]
        }
      }
    },
    {
      "replace": {
        "entryId": "4.2 blessing",
        "relativePath": [
          "variants",
          "solemn_new_year"
        ],
        "rows": {
          "label": {
            "en": "Solemn Blessing - The Beginning of the Year"
          },
          "lines": [
            {
              "sp_en": "B.",
              "text_en": "The Lord be with you."
            },
            {
              "sp_en": "ALL",
              "text_en": "And with your spirit."
            },
            {
              "rubric_en": "Bow your heads and pray for God's blessing."
            },
            {
              "text_en": "May God, the source and origin of all blessing, grant you grace, pour out his blessing in abundance, and keep you safe from harm throughout the year.",
              "sp_en": "P.",
              "__massEditorPairKeys": {
                "text_en": "blessing:new_year:petition:0:text"
              }
            },
            {
              "text_en": "Amen.",
              "sp_en": "ALL",
              "__massEditorPairKeys": {
                "text_en": "blessing:new_year:petition:1:text"
              }
            },
            {
              "text_en": "May he give you integrity in the faith, endurance in hope, and perseverance in charity with holy patience to the end.",
              "sp_en": "P.",
              "__massEditorPairKeys": {
                "text_en": "blessing:new_year:petition:2:text"
              }
            },
            {
              "text_en": "Amen.",
              "sp_en": "ALL",
              "__massEditorPairKeys": {
                "text_en": "blessing:new_year:petition:3:text"
              }
            },
            {
              "text_en": "May he order your days and your deeds in his peace, grant your prayers in this and in every place, and lead you happily to eternal life.",
              "sp_en": "P.",
              "__massEditorPairKeys": {
                "text_en": "blessing:new_year:petition:4:text"
              }
            },
            {
              "text_en": "Amen.",
              "sp_en": "ALL",
              "__massEditorPairKeys": {
                "text_en": "blessing:new_year:petition:5:text"
              }
            },
            {
              "text_en": "And may the blessing of almighty God, the Father, and the Son, ✠ and the Holy Spirit, come down on you and remain with you for ever.",
              "sp_en": "P.",
              "__massEditorPairKeys": {
                "text_en": "blessing:new_year:ending:2:text"
              }
            },
            {
              "text_en": "Amen.",
              "sp_en": "ALL",
              "__massEditorPairKeys": {
                "text_en": "blessing:new_year:ending:1:text"
              }
            }
          ]
        }
      }
    },
    {
      "replace": {
        "entryId": "4.2 blessing",
        "relativePath": [
          "variants",
          "solemn_epiphany"
        ],
        "rows": {
          "label": {
            "en": "Solemn Blessing - The Epiphany of the Lord"
          },
          "lines": [
            {
              "sp_en": "B.",
              "text_en": "The Lord be with you."
            },
            {
              "sp_en": "ALL",
              "text_en": "And with your spirit."
            },
            {
              "rubric_en": "Bow your heads and pray for God's blessing."
            },
            {
              "text_en": "May God, who has called you out of darkness into his wonderful light, pour out in kindness his blessing upon you and make your hearts firm in faith, hope and charity.",
              "sp_en": "P.",
              "__massEditorPairKeys": {
                "text_en": "blessing:epiphany:petition:0:text"
              }
            },
            {
              "text_en": "Amen.",
              "sp_en": "ALL",
              "__massEditorPairKeys": {
                "text_en": "blessing:epiphany:petition:1:text"
              }
            },
            {
              "text_en": "And since in all confidence you follow Christ, who today appeared in the world as a light shining in darkness, may God make you, too, a light for your brothers and sisters.",
              "sp_en": "P.",
              "__massEditorPairKeys": {
                "text_en": "blessing:epiphany:petition:2:text"
              }
            },
            {
              "text_en": "Amen.",
              "sp_en": "ALL",
              "__massEditorPairKeys": {
                "text_en": "blessing:epiphany:petition:3:text"
              }
            },
            {
              "text_en": "And so when your pilgrimage is ended, may you come to him whom the Magi sought as they followed the star and whom they found with great joy, the Light from Light, who is Christ the Lord.",
              "sp_en": "P.",
              "__massEditorPairKeys": {
                "text_en": "blessing:epiphany:petition:4:text"
              }
            },
            {
              "text_en": "Amen.",
              "sp_en": "ALL",
              "__massEditorPairKeys": {
                "text_en": "blessing:epiphany:petition:5:text"
              }
            },
            {
              "text_en": "And may the blessing of almighty God, the Father, and the Son, ✠ and the Holy Spirit, come down on you and remain with you for ever.",
              "sp_en": "P.",
              "__massEditorPairKeys": {
                "text_en": "blessing:epiphany:ending:2:text"
              }
            },
            {
              "text_en": "Amen.",
              "sp_en": "ALL",
              "__massEditorPairKeys": {
                "text_en": "blessing:epiphany:ending:1:text"
              }
            }
          ]
        }
      }
    },
    {
      "replace": {
        "entryId": "4.2 blessing",
        "relativePath": [
          "variants",
          "solemn_passion"
        ],
        "rows": {
          "label": {
            "en": "Solemn Blessing - The Passion of the Lord"
          },
          "lines": [
            {
              "sp_en": "B.",
              "text_en": "The Lord be with you."
            },
            {
              "sp_en": "ALL",
              "text_en": "And with your spirit."
            },
            {
              "rubric_en": "Bow your heads and pray for God's blessing."
            },
            {
              "text_en": "May God, the Father of mercies, who has given you an example of love in the Passion of his Only Begotten Son, grant that, by serving God and your neighbor, you may lay hold of the wondrous gift of his blessing.",
              "sp_en": "P.",
              "__massEditorPairKeys": {
                "text_en": "blessing:passion:petition:0:text"
              }
            },
            {
              "text_en": "Amen.",
              "sp_en": "ALL",
              "__massEditorPairKeys": {
                "text_en": "blessing:passion:petition:1:text"
              }
            },
            {
              "text_en": "So that you may receive the reward of everlasting life from him, through whose earthly Death you believe that you escape eternal death.",
              "sp_en": "P.",
              "__massEditorPairKeys": {
                "text_en": "blessing:passion:petition:2:text"
              }
            },
            {
              "text_en": "Amen.",
              "sp_en": "ALL",
              "__massEditorPairKeys": {
                "text_en": "blessing:passion:petition:3:text"
              }
            },
            {
              "text_en": "And by following the example of his self-abasement, may you possess a share in his Resurrection.",
              "sp_en": "P.",
              "__massEditorPairKeys": {
                "text_en": "blessing:passion:petition:4:text"
              }
            },
            {
              "text_en": "Amen.",
              "sp_en": "ALL",
              "__massEditorPairKeys": {
                "text_en": "blessing:passion:petition:5:text"
              }
            },
            {
              "text_en": "And may the blessing of almighty God, the Father, and the Son, ✠ and the Holy Spirit, come down on you and remain with you for ever.",
              "sp_en": "P.",
              "__massEditorPairKeys": {
                "text_en": "blessing:passion:ending:2:text"
              }
            },
            {
              "text_en": "Amen.",
              "sp_en": "ALL",
              "__massEditorPairKeys": {
                "text_en": "blessing:passion:ending:1:text"
              }
            }
          ]
        }
      }
    },
    {
      "replace": {
        "entryId": "4.2 blessing",
        "relativePath": [
          "variants",
          "solemn_easter"
        ],
        "rows": {
          "label": {
            "en": "Solemn Blessing - Easter Time"
          },
          "lines": [
            {
              "sp_en": "B.",
              "text_en": "The Lord be with you."
            },
            {
              "sp_en": "ALL",
              "text_en": "And with your spirit."
            },
            {
              "rubric_en": "Bow your heads and pray for God's blessing."
            },
            {
              "text_en": "May God, who by the Resurrection of his Only Begotten Son was pleased to confer on you the gift of redemption and of adoption, give you gladness by his blessing.",
              "sp_en": "P.",
              "__massEditorPairKeys": {
                "text_en": "blessing:easter:petition:0:text"
              }
            },
            {
              "text_en": "Amen.",
              "sp_en": "ALL",
              "__massEditorPairKeys": {
                "text_en": "blessing:easter:petition:1:text"
              }
            },
            {
              "text_en": "May he, by whose redeeming work you have received the gift of everlasting freedom, make you heirs to an eternal inheritance.",
              "sp_en": "P.",
              "__massEditorPairKeys": {
                "text_en": "blessing:easter:petition:2:text"
              }
            },
            {
              "text_en": "Amen.",
              "sp_en": "ALL",
              "__massEditorPairKeys": {
                "text_en": "blessing:easter:petition:3:text"
              }
            },
            {
              "text_en": "And may you, who have already risen with Christ in Baptism through faith, by living in a right manner on this earth, be united with him in the homeland of heaven.",
              "sp_en": "P.",
              "__massEditorPairKeys": {
                "text_en": "blessing:easter:petition:4:text"
              }
            },
            {
              "text_en": "Amen.",
              "sp_en": "ALL",
              "__massEditorPairKeys": {
                "text_en": "blessing:easter:petition:5:text"
              }
            },
            {
              "text_en": "And may the blessing of almighty God, the Father, and the Son, ✠ and the Holy Spirit, come down on you and remain with you for ever.",
              "sp_en": "P.",
              "__massEditorPairKeys": {
                "text_en": "blessing:easter:ending:2:text"
              }
            },
            {
              "text_en": "Amen.",
              "sp_en": "ALL",
              "__massEditorPairKeys": {
                "text_en": "blessing:easter:ending:1:text"
              }
            }
          ]
        }
      }
    },
    {
      "replace": {
        "entryId": "4.2 blessing",
        "relativePath": [
          "variants",
          "solemn_ascension"
        ],
        "rows": {
          "label": {
            "en": "Solemn Blessing - The Ascension of the Lord"
          },
          "lines": [
            {
              "sp_en": "B.",
              "text_en": "The Lord be with you."
            },
            {
              "sp_en": "ALL",
              "text_en": "And with your spirit."
            },
            {
              "rubric_en": "Bow your heads and pray for God's blessing."
            },
            {
              "text_en": "May almighty God bless you, for on this very day his Only Begotten Son pierced the heights of heaven and unlocked for you the way to ascend to where he is.",
              "sp_en": "P.",
              "__massEditorPairKeys": {
                "text_en": "blessing:ascension:petition:0:text"
              }
            },
            {
              "text_en": "Amen.",
              "sp_en": "ALL",
              "__massEditorPairKeys": {
                "text_en": "blessing:ascension:petition:1:text"
              }
            },
            {
              "text_en": "May he grant that, as Christ after his Resurrection was seen plainly by his disciples, so when he comes as Judge he may show himself merciful to you for all eternity.",
              "sp_en": "P.",
              "__massEditorPairKeys": {
                "text_en": "blessing:ascension:petition:2:text"
              }
            },
            {
              "text_en": "Amen.",
              "sp_en": "ALL",
              "__massEditorPairKeys": {
                "text_en": "blessing:ascension:petition:3:text"
              }
            },
            {
              "text_en": "And may you, who believe he is seated with the Father in his majesty, know with joy the fulfillment of his promise to stay with you until the end of time.",
              "sp_en": "P.",
              "__massEditorPairKeys": {
                "text_en": "blessing:ascension:petition:4:text"
              }
            },
            {
              "text_en": "Amen.",
              "sp_en": "ALL",
              "__massEditorPairKeys": {
                "text_en": "blessing:ascension:petition:5:text"
              }
            },
            {
              "text_en": "And may the blessing of almighty God, the Father, and the Son, ✠ and the Holy Spirit, come down on you and remain with you for ever.",
              "sp_en": "P.",
              "__massEditorPairKeys": {
                "text_en": "blessing:ascension:ending:2:text"
              }
            },
            {
              "text_en": "Amen.",
              "sp_en": "ALL",
              "__massEditorPairKeys": {
                "text_en": "blessing:ascension:ending:1:text"
              }
            }
          ]
        }
      }
    },
    {
      "replace": {
        "entryId": "4.2 blessing",
        "relativePath": [
          "variants",
          "solemn_pentecost"
        ],
        "rows": {
          "label": {
            "en": "Solemn Blessing - The Holy Spirit"
          },
          "lines": [
            {
              "sp_en": "B.",
              "text_en": "The Lord be with you."
            },
            {
              "sp_en": "ALL",
              "text_en": "And with your spirit."
            },
            {
              "rubric_en": "Bow your heads and pray for God's blessing."
            },
            {
              "text_en": "May God, the Father of lights, who was pleased to enlighten the disciples’ minds by the outpouring of the Spirit, the Paraclete, grant you gladness by his blessing and make you always abound with the gifts of the same Spirit.",
              "sp_en": "P.",
              "__massEditorPairKeys": {
                "text_en": "blessing:pentecost:petition:0:text"
              }
            },
            {
              "text_en": "Amen.",
              "sp_en": "ALL",
              "__massEditorPairKeys": {
                "text_en": "blessing:pentecost:petition:1:text"
              }
            },
            {
              "text_en": "May the wondrous flame that appeared above the disciples, powerfully cleanse your hearts from every evil and pervade them with its purifying light.",
              "sp_en": "P.",
              "__massEditorPairKeys": {
                "text_en": "blessing:pentecost:petition:2:text"
              }
            },
            {
              "text_en": "Amen.",
              "sp_en": "ALL",
              "__massEditorPairKeys": {
                "text_en": "blessing:pentecost:petition:3:text"
              }
            },
            {
              "text_en": "And may God, who has been pleased to unite many tongues in the profession of one faith, give you perseverance in that same faith and, by believing, may you journey from hope to clear vision.",
              "sp_en": "P.",
              "__massEditorPairKeys": {
                "text_en": "blessing:pentecost:petition:4:text"
              }
            },
            {
              "text_en": "Amen.",
              "sp_en": "ALL",
              "__massEditorPairKeys": {
                "text_en": "blessing:pentecost:petition:5:text"
              }
            },
            {
              "text_en": "And may the blessing of almighty God, the Father, and the Son, ✠ and the Holy Spirit, come down on you and remain with you for ever.",
              "sp_en": "P.",
              "__massEditorPairKeys": {
                "text_en": "blessing:pentecost:ending:2:text"
              }
            },
            {
              "text_en": "Amen.",
              "sp_en": "ALL",
              "__massEditorPairKeys": {
                "text_en": "blessing:pentecost:ending:1:text"
              }
            }
          ]
        }
      }
    },
    {
      "replace": {
        "entryId": "4.2 blessing",
        "relativePath": [
          "variants",
          "solemn_ordinary_1"
        ],
        "rows": {
          "label": {
            "en": "Solemn Blessing - Ordinary Time I"
          },
          "lines": [
            {
              "sp_en": "B.",
              "text_en": "The Lord be with you."
            },
            {
              "sp_en": "ALL",
              "text_en": "And with your spirit."
            },
            {
              "rubric_en": "Bow your heads and pray for God's blessing."
            },
            {
              "text_en": "May the Lord bless you and keep you.",
              "sp_en": "P.",
              "__massEditorPairKeys": {
                "text_en": "blessing:ordinary_1:petition:0:text"
              }
            },
            {
              "text_en": "Amen.",
              "sp_en": "ALL",
              "__massEditorPairKeys": {
                "text_en": "blessing:ordinary_1:petition:1:text"
              }
            },
            {
              "text_en": "May he let his face shine upon you and show you his mercy.",
              "sp_en": "P.",
              "__massEditorPairKeys": {
                "text_en": "blessing:ordinary_1:petition:2:text"
              }
            },
            {
              "text_en": "Amen.",
              "sp_en": "ALL",
              "__massEditorPairKeys": {
                "text_en": "blessing:ordinary_1:petition:3:text"
              }
            },
            {
              "text_en": "May he turn his countenance towards you and give you his peace.",
              "sp_en": "P.",
              "__massEditorPairKeys": {
                "text_en": "blessing:ordinary_1:petition:4:text"
              }
            },
            {
              "text_en": "Amen.",
              "sp_en": "ALL",
              "__massEditorPairKeys": {
                "text_en": "blessing:ordinary_1:petition:5:text"
              }
            },
            {
              "text_en": "And may the blessing of almighty God, the Father, and the Son, ✠ and the Holy Spirit, come down on you and remain with you for ever.",
              "sp_en": "P.",
              "__massEditorPairKeys": {
                "text_en": "blessing:ordinary_1:ending:2:text"
              }
            },
            {
              "text_en": "Amen.",
              "sp_en": "ALL",
              "__massEditorPairKeys": {
                "text_en": "blessing:ordinary_1:ending:1:text"
              }
            }
          ]
        }
      }
    },
    {
      "replace": {
        "entryId": "4.2 blessing",
        "relativePath": [
          "variants",
          "solemn_ordinary_2"
        ],
        "rows": {
          "label": {
            "en": "Solemn Blessing - Ordinary Time II"
          },
          "lines": [
            {
              "sp_en": "B.",
              "text_en": "The Lord be with you."
            },
            {
              "sp_en": "ALL",
              "text_en": "And with your spirit."
            },
            {
              "rubric_en": "Bow your heads and pray for God's blessing."
            },
            {
              "text_en": "May the peace of God, which surpasses all understanding, keep your hearts and minds in the knowledge and love of God, and of his Son, our Lord Jesus Christ.",
              "sp_en": "P.",
              "__massEditorPairKeys": {
                "text_en": "blessing:ordinary_2:petition:0:text"
              }
            },
            {
              "text_en": "Amen.",
              "sp_en": "ALL",
              "__massEditorPairKeys": {
                "text_en": "blessing:ordinary_2:petition:1:text"
              }
            },
            {
              "text_en": "And may the blessing of almighty God, the Father, and the Son, ✠ and the Holy Spirit, come down on you and remain with you for ever.",
              "sp_en": "P.",
              "__massEditorPairKeys": {
                "text_en": "blessing:ordinary_2:ending:2:text"
              }
            },
            {
              "text_en": "Amen.",
              "sp_en": "ALL",
              "__massEditorPairKeys": {
                "text_en": "blessing:ordinary_2:ending:1:text"
              }
            }
          ]
        }
      }
    },
    {
      "replace": {
        "entryId": "4.2 blessing",
        "relativePath": [
          "variants",
          "solemn_ordinary_3"
        ],
        "rows": {
          "label": {
            "en": "Solemn Blessing - Ordinary Time III"
          },
          "lines": [
            {
              "sp_en": "B.",
              "text_en": "The Lord be with you."
            },
            {
              "sp_en": "ALL",
              "text_en": "And with your spirit."
            },
            {
              "rubric_en": "Bow your heads and pray for God's blessing."
            },
            {
              "text_en": "May almighty God bless you in his kindness and pour out saving wisdom upon you.",
              "sp_en": "P.",
              "__massEditorPairKeys": {
                "text_en": "blessing:ordinary_3:petition:0:text"
              }
            },
            {
              "text_en": "Amen.",
              "sp_en": "ALL",
              "__massEditorPairKeys": {
                "text_en": "blessing:ordinary_3:petition:1:text"
              }
            },
            {
              "text_en": "May he nourish you always with the teachings of the faith and make you persevere in holy deeds.",
              "sp_en": "P.",
              "__massEditorPairKeys": {
                "text_en": "blessing:ordinary_3:petition:2:text"
              }
            },
            {
              "text_en": "Amen.",
              "sp_en": "ALL",
              "__massEditorPairKeys": {
                "text_en": "blessing:ordinary_3:petition:3:text"
              }
            },
            {
              "text_en": "May he turn your steps towards himself and show you the path of charity and peace.",
              "sp_en": "P.",
              "__massEditorPairKeys": {
                "text_en": "blessing:ordinary_3:petition:4:text"
              }
            },
            {
              "text_en": "Amen.",
              "sp_en": "ALL",
              "__massEditorPairKeys": {
                "text_en": "blessing:ordinary_3:petition:5:text"
              }
            },
            {
              "text_en": "And may the blessing of almighty God, the Father, and the Son, ✠ and the Holy Spirit, come down on you and remain with you for ever.",
              "sp_en": "P.",
              "__massEditorPairKeys": {
                "text_en": "blessing:ordinary_3:ending:2:text"
              }
            },
            {
              "text_en": "Amen.",
              "sp_en": "ALL",
              "__massEditorPairKeys": {
                "text_en": "blessing:ordinary_3:ending:1:text"
              }
            }
          ]
        }
      }
    },
    {
      "replace": {
        "entryId": "4.2 blessing",
        "relativePath": [
          "variants",
          "solemn_ordinary_4"
        ],
        "rows": {
          "label": {
            "en": "Solemn Blessing - Ordinary Time IV"
          },
          "lines": [
            {
              "sp_en": "B.",
              "text_en": "The Lord be with you."
            },
            {
              "sp_en": "ALL",
              "text_en": "And with your spirit."
            },
            {
              "rubric_en": "Bow your heads and pray for God's blessing."
            },
            {
              "text_en": "May the God of all consolation order your days in his peace and grant you the gifts of his blessing.",
              "sp_en": "P.",
              "__massEditorPairKeys": {
                "text_en": "blessing:ordinary_4:petition:0:text"
              }
            },
            {
              "text_en": "Amen.",
              "sp_en": "ALL",
              "__massEditorPairKeys": {
                "text_en": "blessing:ordinary_4:petition:1:text"
              }
            },
            {
              "text_en": "May he free you always from every distress and confirm your hearts in his love.",
              "sp_en": "P.",
              "__massEditorPairKeys": {
                "text_en": "blessing:ordinary_4:petition:2:text"
              }
            },
            {
              "text_en": "Amen.",
              "sp_en": "ALL",
              "__massEditorPairKeys": {
                "text_en": "blessing:ordinary_4:petition:3:text"
              }
            },
            {
              "text_en": "So that on this life’s journey you may be effective in good works, rich in the gifts of hope, faith and charity, and may come happily to eternal life.",
              "sp_en": "P.",
              "__massEditorPairKeys": {
                "text_en": "blessing:ordinary_4:petition:4:text"
              }
            },
            {
              "text_en": "Amen.",
              "sp_en": "ALL",
              "__massEditorPairKeys": {
                "text_en": "blessing:ordinary_4:petition:5:text"
              }
            },
            {
              "text_en": "And may the blessing of almighty God, the Father, and the Son, ✠ and the Holy Spirit, come down on you and remain with you for ever.",
              "sp_en": "P.",
              "__massEditorPairKeys": {
                "text_en": "blessing:ordinary_4:ending:2:text"
              }
            },
            {
              "text_en": "Amen.",
              "sp_en": "ALL",
              "__massEditorPairKeys": {
                "text_en": "blessing:ordinary_4:ending:1:text"
              }
            }
          ]
        }
      }
    },
    {
      "replace": {
        "entryId": "4.2 blessing",
        "relativePath": [
          "variants",
          "solemn_ordinary_5"
        ],
        "rows": {
          "label": {
            "en": "Solemn Blessing - Ordinary Time V"
          },
          "lines": [
            {
              "sp_en": "B.",
              "text_en": "The Lord be with you."
            },
            {
              "sp_en": "ALL",
              "text_en": "And with your spirit."
            },
            {
              "rubric_en": "Bow your heads and pray for God's blessing."
            },
            {
              "text_en": "May almighty God always keep every adversity far from you and in his kindness pour out upon you the gifts of his blessing.",
              "sp_en": "P.",
              "__massEditorPairKeys": {
                "text_en": "blessing:ordinary_5:petition:0:text"
              }
            },
            {
              "text_en": "Amen.",
              "sp_en": "ALL",
              "__massEditorPairKeys": {
                "text_en": "blessing:ordinary_5:petition:1:text"
              }
            },
            {
              "text_en": "May God keep your hearts attentive to his words, that they may be filled with everlasting gladness.",
              "sp_en": "P.",
              "__massEditorPairKeys": {
                "text_en": "blessing:ordinary_5:petition:2:text"
              }
            },
            {
              "text_en": "Amen.",
              "sp_en": "ALL",
              "__massEditorPairKeys": {
                "text_en": "blessing:ordinary_5:petition:3:text"
              }
            },
            {
              "text_en": "And so, may you always understand what is good and right, and be found ever hastening along in the path of God’s commands, made coheirs with the citizens of heaven.",
              "sp_en": "P.",
              "__massEditorPairKeys": {
                "text_en": "blessing:ordinary_5:petition:4:text"
              }
            },
            {
              "text_en": "Amen.",
              "sp_en": "ALL",
              "__massEditorPairKeys": {
                "text_en": "blessing:ordinary_5:petition:5:text"
              }
            },
            {
              "text_en": "And may the blessing of almighty God, the Father, and the Son, ✠ and the Holy Spirit, come down on you and remain with you for ever.",
              "sp_en": "P.",
              "__massEditorPairKeys": {
                "text_en": "blessing:ordinary_5:ending:2:text"
              }
            },
            {
              "text_en": "Amen.",
              "sp_en": "ALL",
              "__massEditorPairKeys": {
                "text_en": "blessing:ordinary_5:ending:1:text"
              }
            }
          ]
        }
      }
    },
    {
      "replace": {
        "entryId": "4.2 blessing",
        "relativePath": [
          "variants",
          "solemn_ordinary_6"
        ],
        "rows": {
          "label": {
            "en": "Solemn Blessing - Ordinary Time VI"
          },
          "lines": [
            {
              "sp_en": "B.",
              "text_en": "The Lord be with you."
            },
            {
              "sp_en": "ALL",
              "text_en": "And with your spirit."
            },
            {
              "rubric_en": "Bow your heads and pray for God's blessing."
            },
            {
              "text_en": "May God bless you with every heavenly blessing, make you always holy and pure in his sight, pour out in abundance upon you the riches of his glory, and teach you with the words of truth; may he instruct you in the Gospel of salvation, and ever endow you with fraternal charity. Through Christ our Lord.",
              "sp_en": "P.",
              "__massEditorPairKeys": {
                "text_en": "blessing:ordinary_6:petition:0:text"
              }
            },
            {
              "text_en": "Amen.",
              "sp_en": "ALL",
              "__massEditorPairKeys": {
                "text_en": "blessing:ordinary_6:petition:1:text"
              }
            },
            {
              "text_en": "And may the blessing of almighty God, the Father, and the Son, ✠ and the Holy Spirit, come down on you and remain with you for ever.",
              "sp_en": "P.",
              "__massEditorPairKeys": {
                "text_en": "blessing:ordinary_6:ending:2:text"
              }
            },
            {
              "text_en": "Amen.",
              "sp_en": "ALL",
              "__massEditorPairKeys": {
                "text_en": "blessing:ordinary_6:ending:1:text"
              }
            }
          ]
        }
      }
    },
    {
      "replace": {
        "entryId": "4.2 blessing",
        "relativePath": [
          "variants",
          "solemn_blessed_virgin_mary"
        ],
        "rows": {
          "label": {
            "en": "Solemn Blessing - The Blessed Virgin Mary"
          },
          "lines": [
            {
              "sp_en": "B.",
              "text_en": "The Lord be with you."
            },
            {
              "sp_en": "ALL",
              "text_en": "And with your spirit."
            },
            {
              "rubric_en": "Bow your heads and pray for God's blessing."
            },
            {
              "text_en": "May God, who through the childbearing of the Blessed Virgin Mary willed in his great kindness to redeem the human race, be pleased to enrich you with his blessing.",
              "sp_en": "P.",
              "__massEditorPairKeys": {
                "text_en": "blessing:blessed_virgin_mary:petition:0:text"
              }
            },
            {
              "text_en": "Amen.",
              "sp_en": "ALL",
              "__massEditorPairKeys": {
                "text_en": "blessing:blessed_virgin_mary:petition:1:text"
              }
            },
            {
              "text_en": "May you know always and everywhere the protection of her, through whom you have been found worthy to receive the author of life.",
              "sp_en": "P.",
              "__massEditorPairKeys": {
                "text_en": "blessing:blessed_virgin_mary:petition:2:text"
              }
            },
            {
              "text_en": "Amen.",
              "sp_en": "ALL",
              "__massEditorPairKeys": {
                "text_en": "blessing:blessed_virgin_mary:petition:3:text"
              }
            },
            {
              "text_en": "May you, who have devoutly gathered on this day, carry away with you the gifts of spiritual joys and heavenly rewards.",
              "sp_en": "P.",
              "__massEditorPairKeys": {
                "text_en": "blessing:blessed_virgin_mary:petition:4:text"
              }
            },
            {
              "text_en": "Amen.",
              "sp_en": "ALL",
              "__massEditorPairKeys": {
                "text_en": "blessing:blessed_virgin_mary:petition:5:text"
              }
            },
            {
              "text_en": "And may the blessing of almighty God, the Father, and the Son, ✠ and the Holy Spirit, come down on you and remain with you for ever.",
              "sp_en": "P.",
              "__massEditorPairKeys": {
                "text_en": "blessing:blessed_virgin_mary:ending:2:text"
              }
            },
            {
              "text_en": "Amen.",
              "sp_en": "ALL",
              "__massEditorPairKeys": {
                "text_en": "blessing:blessed_virgin_mary:ending:1:text"
              }
            }
          ]
        }
      }
    },
    {
      "replace": {
        "entryId": "4.2 blessing",
        "relativePath": [
          "variants",
          "solemn_peter_and_paul"
        ],
        "rows": {
          "label": {
            "en": "Solemn Blessing - Saints Peter and Paul, Apostles"
          },
          "lines": [
            {
              "sp_en": "B.",
              "text_en": "The Lord be with you."
            },
            {
              "sp_en": "ALL",
              "text_en": "And with your spirit."
            },
            {
              "rubric_en": "Bow your heads and pray for God's blessing."
            },
            {
              "text_en": "May almighty God bless you, for he has made you steadfast in Saint Peter’s saving confession and through it has set you on the solid rock of the Church’s faith.",
              "sp_en": "P.",
              "__massEditorPairKeys": {
                "text_en": "blessing:peter_and_paul:petition:0:text"
              }
            },
            {
              "text_en": "Amen.",
              "sp_en": "ALL",
              "__massEditorPairKeys": {
                "text_en": "blessing:peter_and_paul:petition:1:text"
              }
            },
            {
              "text_en": "And having instructed you by the tireless preaching of Saint Paul, may God teach you constantly by his example to win brothers and sisters for Christ.",
              "sp_en": "P.",
              "__massEditorPairKeys": {
                "text_en": "blessing:peter_and_paul:petition:2:text"
              }
            },
            {
              "text_en": "Amen.",
              "sp_en": "ALL",
              "__massEditorPairKeys": {
                "text_en": "blessing:peter_and_paul:petition:3:text"
              }
            },
            {
              "text_en": "So that by the keys of St Peter and the words of St Paul, and by the support of their intercession, God may bring us happily to that homeland that Peter attained on a cross and Paul by the blade of a sword.",
              "sp_en": "P.",
              "__massEditorPairKeys": {
                "text_en": "blessing:peter_and_paul:petition:4:text"
              }
            },
            {
              "text_en": "Amen.",
              "sp_en": "ALL",
              "__massEditorPairKeys": {
                "text_en": "blessing:peter_and_paul:petition:5:text"
              }
            },
            {
              "text_en": "And may the blessing of almighty God, the Father, and the Son, ✠ and the Holy Spirit, come down on you and remain with you for ever.",
              "sp_en": "P.",
              "__massEditorPairKeys": {
                "text_en": "blessing:peter_and_paul:ending:2:text"
              }
            },
            {
              "text_en": "Amen.",
              "sp_en": "ALL",
              "__massEditorPairKeys": {
                "text_en": "blessing:peter_and_paul:ending:1:text"
              }
            }
          ]
        }
      }
    },
    {
      "replace": {
        "entryId": "4.2 blessing",
        "relativePath": [
          "variants",
          "solemn_apostles"
        ],
        "rows": {
          "label": {
            "en": "Solemn Blessing - The Apostles"
          },
          "lines": [
            {
              "sp_en": "B.",
              "text_en": "The Lord be with you."
            },
            {
              "sp_en": "ALL",
              "text_en": "And with your spirit."
            },
            {
              "rubric_en": "Bow your heads and pray for God's blessing."
            },
            {
              "text_en": "May God, who has granted you to stand firm on apostolic foundations, graciously bless you through the glorious merits of the holy Apostles N. and N. (the holy Apostle N.).",
              "sp_en": "P.",
              "__massEditorPairKeys": {
                "text_en": "blessing:apostles:petition:0:text"
              }
            },
            {
              "text_en": "Amen.",
              "sp_en": "ALL",
              "__massEditorPairKeys": {
                "text_en": "blessing:apostles:petition:1:text"
              }
            },
            {
              "text_en": "And may he who endowed you with the teaching and example of the Apostles, make you, under their protection, witnesses to the truth before all.",
              "sp_en": "P.",
              "__massEditorPairKeys": {
                "text_en": "blessing:apostles:petition:2:text"
              }
            },
            {
              "text_en": "Amen.",
              "sp_en": "ALL",
              "__massEditorPairKeys": {
                "text_en": "blessing:apostles:petition:3:text"
              }
            },
            {
              "text_en": "So that through the intercession of the Apostles, you may inherit the eternal homeland, for by their teaching you possess firmness of faith.",
              "sp_en": "P.",
              "__massEditorPairKeys": {
                "text_en": "blessing:apostles:petition:4:text"
              }
            },
            {
              "text_en": "Amen.",
              "sp_en": "ALL",
              "__massEditorPairKeys": {
                "text_en": "blessing:apostles:petition:5:text"
              }
            },
            {
              "text_en": "And may the blessing of almighty God, the Father, and the Son, ✠ and the Holy Spirit, come down on you and remain with you for ever.",
              "sp_en": "P.",
              "__massEditorPairKeys": {
                "text_en": "blessing:apostles:ending:2:text"
              }
            },
            {
              "text_en": "Amen.",
              "sp_en": "ALL",
              "__massEditorPairKeys": {
                "text_en": "blessing:apostles:ending:1:text"
              }
            }
          ]
        }
      }
    },
    {
      "replace": {
        "entryId": "4.2 blessing",
        "relativePath": [
          "variants",
          "solemn_all_saints"
        ],
        "rows": {
          "label": {
            "en": "Solemn Blessing - All Saints"
          },
          "lines": [
            {
              "sp_en": "B.",
              "text_en": "The Lord be with you."
            },
            {
              "sp_en": "ALL",
              "text_en": "And with your spirit."
            },
            {
              "rubric_en": "Bow your heads and pray for God's blessing."
            },
            {
              "text_en": "May God, the glory and joy of the Saints, who has caused you to be strengthened by means of their outstanding prayers, bless you with unending blessings.",
              "sp_en": "P.",
              "__massEditorPairKeys": {
                "text_en": "blessing:all_saints:petition:0:text"
              }
            },
            {
              "text_en": "Amen.",
              "sp_en": "ALL",
              "__massEditorPairKeys": {
                "text_en": "blessing:all_saints:petition:1:text"
              }
            },
            {
              "text_en": "Freed through their intercession from present ills and formed by the example of their holy way of life, may you be ever devoted to serving God and your neighbor.",
              "sp_en": "P.",
              "__massEditorPairKeys": {
                "text_en": "blessing:all_saints:petition:2:text"
              }
            },
            {
              "text_en": "Amen.",
              "sp_en": "ALL",
              "__massEditorPairKeys": {
                "text_en": "blessing:all_saints:petition:3:text"
              }
            },
            {
              "text_en": "So that, together with all, you may possess the joys of the homeland, where Holy Church rejoices that her children are admitted in perpetual peace to the company of the citizens of heaven.",
              "sp_en": "P.",
              "__massEditorPairKeys": {
                "text_en": "blessing:all_saints:petition:4:text"
              }
            },
            {
              "text_en": "Amen.",
              "sp_en": "ALL",
              "__massEditorPairKeys": {
                "text_en": "blessing:all_saints:petition:5:text"
              }
            },
            {
              "text_en": "And may the blessing of almighty God, the Father, and the Son, ✠ and the Holy Spirit, come down on you and remain with you for ever.",
              "sp_en": "P.",
              "__massEditorPairKeys": {
                "text_en": "blessing:all_saints:ending:2:text"
              }
            },
            {
              "text_en": "Amen.",
              "sp_en": "ALL",
              "__massEditorPairKeys": {
                "text_en": "blessing:all_saints:ending:1:text"
              }
            }
          ]
        }
      }
    },
    {
      "replace": {
        "entryId": "4.2 blessing",
        "relativePath": [
          "variants",
          "solemn_church_dedication"
        ],
        "rows": {
          "label": {
            "en": "Solemn Blessing - For the Dedication of a Church"
          },
          "lines": [
            {
              "sp_en": "B.",
              "text_en": "The Lord be with you."
            },
            {
              "sp_en": "ALL",
              "text_en": "And with your spirit."
            },
            {
              "rubric_en": "Bow your heads and pray for God's blessing."
            },
            {
              "text_en": "May God, the Lord of heaven and earth, who has gathered you today for the dedication of this church, make you abound in heavenly blessings.",
              "sp_en": "P.",
              "__massEditorPairKeys": {
                "text_en": "blessing:church_dedication:petition:0:text"
              }
            },
            {
              "text_en": "Amen.",
              "sp_en": "ALL",
              "__massEditorPairKeys": {
                "text_en": "blessing:church_dedication:petition:1:text"
              }
            },
            {
              "text_en": "And may he who has willed that all his scattered children should be gathered together in his Son, grant that you may become his temple and the dwelling place of the Holy Spirit.",
              "sp_en": "P.",
              "__massEditorPairKeys": {
                "text_en": "blessing:church_dedication:petition:2:text"
              }
            },
            {
              "text_en": "Amen.",
              "sp_en": "ALL",
              "__massEditorPairKeys": {
                "text_en": "blessing:church_dedication:petition:3:text"
              }
            },
            {
              "text_en": "And so, when you are thoroughly cleansed, may God dwell within you and grant you to possess with all the Saints the inheritance of eternal happiness.",
              "sp_en": "P.",
              "__massEditorPairKeys": {
                "text_en": "blessing:church_dedication:petition:4:text"
              }
            },
            {
              "text_en": "Amen.",
              "sp_en": "ALL",
              "__massEditorPairKeys": {
                "text_en": "blessing:church_dedication:petition:5:text"
              }
            },
            {
              "text_en": "And may the blessing of almighty God, the Father, ✠ and the Son, ✠ and the Holy ✠ Spirit, come down on you and remain with you for ever.",
              "sp_en": "P.",
              "__massEditorPairKeys": {
                "text_en": "blessing:church_dedication:ending:2:text"
              }
            },
            {
              "text_en": "Amen.",
              "sp_en": "ALL",
              "__massEditorPairKeys": {
                "text_en": "blessing:church_dedication:ending:1:text"
              }
            }
          ]
        }
      }
    },
    {
      "replace": {
        "entryId": "4.2 blessing",
        "relativePath": [
          "variants",
          "solemn_for_the_dead"
        ],
        "rows": {
          "label": {
            "en": "Solemn Blessing - In Celebrations for the Dead"
          },
          "lines": [
            {
              "sp_en": "B.",
              "text_en": "The Lord be with you."
            },
            {
              "sp_en": "ALL",
              "text_en": "And with your spirit."
            },
            {
              "rubric_en": "Bow your heads and pray for God's blessing."
            },
            {
              "text_en": "May the God of all consolation bless you, for in his unfathomable goodness he created the human race, and in the Resurrection of his Only Begotten Son he has given believers the hope of rising again.",
              "sp_en": "P.",
              "__massEditorPairKeys": {
                "text_en": "blessing:for_the_dead:petition:0:text"
              }
            },
            {
              "text_en": "Amen.",
              "sp_en": "ALL",
              "__massEditorPairKeys": {
                "text_en": "blessing:for_the_dead:petition:1:text"
              }
            },
            {
              "text_en": "To us who are alive, may God grant pardon for our sins, and to all the dead, a place of light and peace.",
              "sp_en": "P.",
              "__massEditorPairKeys": {
                "text_en": "blessing:for_the_dead:petition:2:text"
              }
            },
            {
              "text_en": "Amen.",
              "sp_en": "ALL",
              "__massEditorPairKeys": {
                "text_en": "blessing:for_the_dead:petition:3:text"
              }
            },
            {
              "text_en": "So may we all live happily for ever with Christ, whom we believe truly rose from the dead.",
              "sp_en": "P.",
              "__massEditorPairKeys": {
                "text_en": "blessing:for_the_dead:petition:4:text"
              }
            },
            {
              "text_en": "Amen.",
              "sp_en": "ALL",
              "__massEditorPairKeys": {
                "text_en": "blessing:for_the_dead:petition:5:text"
              }
            },
            {
              "text_en": "And may the blessing of almighty God, the Father, and the Son, ✠ and the Holy Spirit, come down on you and remain with you for ever.",
              "sp_en": "P.",
              "__massEditorPairKeys": {
                "text_en": "blessing:for_the_dead:ending:2:text"
              }
            },
            {
              "text_en": "Amen.",
              "sp_en": "ALL",
              "__massEditorPairKeys": {
                "text_en": "blessing:for_the_dead:ending:1:text"
              }
            }
          ]
        }
      }
    },
    {
      "replace": {
        "entryId": "3.3 eucharist",
        "relativePath": [
          "isEucharist"
        ],
        "rows": true
      }
    }
  ];
  // MASS_DATA_EDITOR_OVERRIDES_END
  function applyOrdinaryEditorOverrides(target) {
    ordinaryEditorOverrides.forEach(override => {
      if (override.replace) {
        const entry = target.find(item => item && item.id === override.replace.entryId);
        if (!entry) throw new Error('Mass editor replacement entry is missing');
        let parent = entry;
        const parts = override.replace.relativePath;
        for (let index = 0; index < parts.length - 1; index++) {
          const part = parts[index];
          if (parent[part] === undefined) parent[part] = typeof parts[index + 1] === 'number' ? [] : {};
          parent = parent[part];
        }
        parent[parts[parts.length - 1]] = JSON.parse(JSON.stringify(override.replace.rows));
        return;
      }
      if (override.create) {
        const entry = target.find(item => item && item.id === override.create.entryId);
        if (!entry) throw new Error(`New Zealand Mass editor entry is missing: ${override.create.entryId}`);
        let rows = entry;
        for (const part of override.create.relativePath) {
          if (rows[part] === undefined) rows[part] = part === 'lines' || part === 'content' ? [] : {};
          rows = rows[part];
        }
        if (!Array.isArray(rows)) throw new Error(`New Zealand Mass editor block is invalid: ${override.create.entryId}`);
        let row = rows.find(item => item && item.__massEditorPairKeys && item.__massEditorPairKeys[override.create.field] === override.create.rowKey);
        if (!row && rows[override.create.preferredIndex] && !Object.prototype.hasOwnProperty.call(rows[override.create.preferredIndex], override.create.field)) row = rows[override.create.preferredIndex];
        if (!row) { row = {}; rows.push(row); }
        row.__massEditorPairKeys = Object.assign({}, row.__massEditorPairKeys, { [override.create.field]: override.create.rowKey });
        row[override.create.field] = String(override.value ?? '');
        if (override.create.speakerField) row[override.create.speakerField] = String(override.speaker ?? '');
        return;
      }
      if (override.rename) {
        let row = target;
        for (const part of override.rename.rowPath) row = row && row[part];
        if (!row || typeof row !== 'object') throw new Error(`New Zealand Mass editor rename path is stale: ${JSON.stringify(override.rename.rowPath)}`);
        const fromField = override.rename.fromField;
        const toField = override.rename.toField;
        if (!Object.prototype.hasOwnProperty.call(row, fromField) && !Object.prototype.hasOwnProperty.call(row, toField)) throw new Error(`New Zealand Mass editor rename field is stale: ${fromField}`);
        if (fromField !== toField) delete row[fromField];
        row[toField] = String(override.value ?? '');
        const keys = Object.assign({}, row.__massEditorPairKeys);
        delete keys[fromField];
        keys[toField] = override.rename.rowKey;
        row.__massEditorPairKeys = keys;
        return;
      }
      const editPath = Array.isArray(override.path) ? override.path : [];
      let parent = target;
      for (const part of editPath.slice(0, -1)) parent = parent && parent[part];
      const field = editPath[editPath.length - 1];
      if (!parent || !Object.prototype.hasOwnProperty.call(parent, field)) {
        throw new Error(`New Zealand Mass editor override path is stale: ${JSON.stringify(editPath)}`);
      }
      parent[field] = String(override.value ?? '');
    });
    return target;
  }
  const ordinary = cloneFrozen(applyOrdinaryEditorOverrides(structureEnglishOrdinary(englishMissal.ordinary)));
  const romanMissalProperData = cloneFrozen(englishMissal.romanMissalProperData);
  const SOURCE = Object.freeze({
    ordinary: 'https://www.icelweb.org/RomanMissal.htm',
    nzcbcMissal: 'https://catholic.org.nz/news/media-releases/new-missal-to-be-implemented-by-25-march',
    nationalCalendar: 'https://www.catholic.org.nz/resources/national-calendar-2026',
    properCalendar: 'https://www.nlo.org.nz/about/nlo-publications-policies-and-guidelines',
    calendar: 'https://universalis.com/nz/calendar.htm',
    waitangi: 'https://www.aucklandcatholic.org.nz/wp-content/uploads/2024/02/Waitangi-Day-Readings.pdf',
    maryMacKillop: 'https://www.liturgybrisbane.net.au/media/1174/mary-of-the-cross-texts-for-mass-and-liturgy-of-hours.pdf'
  });
  function proper(title, kr, rank, color = 'white', texts = {}, extra = {}) {
    return Object.freeze(Object.assign({
      title,
      names: Object.freeze({
        EN: title,
        KR: kr
      }),
      rank,
      color,
      data: Object.freeze(texts)
    }, extra));
  }
  const maryMacKillop = proper('Saint Mary of the Cross (MacKillop), Virgin', '십자가의 성녀 마리아 매킬롭 동정', 'feast', 'white', {
    entrance: `Come, you blessed of my Father, says the Lord:
I was sick, and you visited me.
Amen, I say to you: whatever you did
for one of the least of my brethren,
you did it for me.`,
    collect: `O God, source of all goodness,
who have shown us in Saint Mary
a woman of faith living by the power of the Cross,
teach us, we pray, by her example
to live the gospel in changing times
and to respect and defend
the human dignity of all in our land.
Through our Lord Jesus Christ, your Son,
who lives and reigns with you in the unity of the Holy Spirit,
one God, for ever and ever.`,
    prayer_offerings: `As you gather us, O God, at your holy altar
on this feast of Saint Mary of the Cross,
grant, we pray, through her intercession,
that what we offer with praise and petition
may strengthen us all in charity and faith.
Through Christ our Lord.`,
    communion: `This is how all will know that you are my disciples,
if you have love for one another, says the Lord.`,
    prayer_after: `May the Sacrament we receive, Lord God,
on this feast of Saint Mary
strengthen us to walk the way of the Cross
and bring us to the glory of the Resurrection.
Through Christ our Lord.`
  }, {
    sourceUrl: SOURCE.maryMacKillop,
    prefaceKey: 'holy_men_women_1'
  });
  const waitangiDay = proper('Waitangi Day — Day of Prayer', '와이탕이 데이 기도의 날', 'optional', 'white', {
    collect: `Almighty and ever-living God,
to whom every human power is subject,
and under whose governance the design for all the ages unfolds,
as you once led Māori and many other peoples
to find their home in this land,
so grant now that divisions be removed,
that equity and justice be established,
and that we may all become one day citizens of heaven.
Through our Lord Jesus Christ, your Son,
who lives and reigns with you in the unity of the Holy Spirit,
God, for ever and ever.`,
    prayer_offerings: `Receive, O Lord, these gifts of bread and wine
which we bring from this bounteous land;
grant, we pray, through the power of your grace
and the celebration of these sacred mysteries,
unity and peace to your Church and to our people.
Through Christ our Lord.`,
    preface: `It is truly right and just, our duty and our salvation,
always and everywhere to give you thanks,
Lord, holy Father, almighty and eternal God,
through Christ our Lord.
For you sent him to be the light of all nations
to bring us to the knowledge of your truth,
so that our lives might be made holy
and we might be reconciled in him to one another and to you.
Through him you poured out your Holy Spirit among all nations,
so that in a wondrous manner love and justice
might fill and rule the whole world.
And so, with the company of Angels and Saints,
we sing the hymn of your praise, as without end we acclaim:`,
    prayer_after: `May the Eucharist which we have received
strengthen and renew us, we pray, O Lord,
that through this mystery of unity
we may possess the peace we hand on
and preserve the peace we have received.
Through Christ our Lord.`
  }, {
    sourceUrl: SOURCE.waitangi,
    alternativeReadings: Object.freeze({
      reading1: 'Isaiah 32:15-18',
      psalm: 'Psalm 85:1-2, 8-12',
      reading2: '2 Corinthians 3:1-6',
      gospel: 'John 14:23-27'
    })
  });
  const calendar = Object.freeze({
    '02-06': Object.freeze([waitangiDay]),
    '03-17': Object.freeze([proper('Saint Patrick, Bishop and Missionary', '성 파트리치오 주교 선교사', 'feast', 'white', {}, {
      sourceUrl: SOURCE.properCalendar
    })]),
    '04-25': Object.freeze([proper('ANZAC Day — National Day of Remembrance', '앤잭 데이 국가 추모일', 'optional', 'white', {}, {
      sourceUrl: SOURCE.nationalCalendar
    })]),
    '04-28': Object.freeze([proper('Saint Peter Chanel, Priest and Martyr, Patron of Oceania', '오세아니아의 수호자 성 베드로 샤넬 사제 순교자', 'feast', 'red', {}, {
      sourceUrl: SOURCE.nationalCalendar
    })]),
    '08-08': Object.freeze([maryMacKillop])
  });
  function sameDay(left, right) {
    return left && right && left.getFullYear() === right.getFullYear() && left.getMonth() === right.getMonth() && left.getDate() === right.getDate();
  }
  function dynamicCalendar(date) {
    if (date.getFullYear() !== 2026) return [];
    const nominal = new Date(2026, 7, 15, 12);
    const transferred = new Date(2026, 7, 16, 12);
    if (sameDay(date, transferred)) {
      return [proper('The Assumption of the Blessed Virgin Mary', '복되신 동정 마리아 승천 대축일', 'solemnity', 'white', {}, {
        sourceUrl: SOURCE.nationalCalendar,
        transferredFrom: '08-15'
      })];
    }
    return sameDay(date, nominal) ? [{
      suppressUniversalFixed: true
    }] : [];
  }
  global.countryMassData.NZ = Object.freeze({
    schemaVersion: 2,
    jurisdiction: 'NZ',
    jurisdictions: Object.freeze(['NZ']),
    jurisdictionName: 'New Zealand',
    conferenceCalendar: 'New Zealand Catholic Bishops Conference',
    ordinaryLanguage: 'EN',
    ordinary,
    ordinaryStructure: 'paragraph-rubric-choices-v1',
    romanMissalProperData,
    ordinaryEdition: 'Roman Missal, Third Edition — bilingual English/Māori New Zealand edition',
    ordinarySource: Object.freeze({
      authority: 'ICEL / New Zealand Catholic Bishops Conference',
      url: SOURCE.nzcbcMissal
    }),
    beta: true,
    source: SOURCE,
    dailyReadings: Object.freeze({
      provider: 'Universalis',
      calendar: 'New Zealand',
      translation: 'Jerusalem Bible / Grail Psalms',
      parser: 'strict-english-daily-mass',
      officialCalendarUrl: SOURCE.nationalCalendar,
      url: dateKey => `https://universalis.com/nz/${dateKey}/mass.htm`
    }),
    properSources: Object.freeze({
      generalRomanMissal: englishMissal.romanMissalProperData.source,
      nationalCalendar: SOURCE.nationalCalendar,
      properCalendarPublication: SOURCE.properCalendar,
      externalDailyCalendar: SOURCE.calendar,
      waitangiDay: SOURCE.waitangi,
      maryMacKillop: SOURCE.maryMacKillop
    }),
    calendar,
    dynamicCalendar
  });
})(globalThis);
