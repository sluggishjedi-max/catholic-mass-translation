// Australian Catholic Bishops Conference beta Mass data.
(function registerAustraliaMass(global) {
  'use strict';

  global.countryMassData = global.countryMassData || {};
  const englishMissal = global.countryMassData['GB-ENG'] || global.countryMassData.IE || global.countryMassData.US;
  if (!englishMissal || !englishMissal.ordinary || !englishMissal.romanMissalProperData) {
    throw new Error('Australia Mass data requires a complete English Roman Missal module to be loaded first.');
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
      "path": [
        1
      ],
      "value": {
        "id": "1.1 entrance",
        "type": "part",
        "header": {
          "en": "Entrance Antiphon"
        },
        "cit": {
          "cit_en": ""
        },
        "lines": [
          {
            "rubric_en": "If the Entrance Chant is not sung, the Entrance Antiphon may be recited.",
            "__massEditorPairKeys": {
              "rubric_en": "0:rubric"
            }
          },
          {
            "text_en": "(Today's Entrance Chant…)",
            "__massEditorPairKeys": {
              "text_en": "1:text"
            }
          }
        ]
      }
    },
    {
      "path": [
        2
      ],
      "value": {
        "id": "1.2 greeting",
        "type": "selectable",
        "header": {
          "en": "Greeting"
        },
        "variants": {
          "A": {
            "label": {
              "en": "Form I"
            },
            "lines": [
              {
                "text_en": "In the name of the Father, and of the Son, ✠ and of the Holy Spirit.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "Amen.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                },
                "sp_en": "ALL"
              },
              {
                "text_en": "The grace of our Lord Jesus Christ, and the love of God, and the communion of the Holy Spirit be with you all.",
                "__massEditorPairKeys": {
                  "text_en": "2:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "And with your spirit.",
                "__massEditorPairKeys": {
                  "text_en": "3:text"
                },
                "sp_en": "ALL"
              }
            ]
          },
          "B": {
            "label": {
              "en": "Form II"
            },
            "lines": [
              {
                "text_en": "In the name of the Father, and of the Son, ✠ and of the Holy Spirit.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "Amen.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                },
                "sp_en": "ALL"
              },
              {
                "text_en": "Grace to you and peace from God our Father and the Lord Jesus Christ.",
                "__massEditorPairKeys": {
                  "text_en": "2:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "And with your spirit.",
                "__massEditorPairKeys": {
                  "text_en": "3:text"
                },
                "sp_en": "ALL"
              }
            ]
          },
          "C": {
            "label": {
              "en": "Form III"
            },
            "lines": [
              {
                "text_en": "In the name of the Father, and of the Son, ✠ and of the Holy Spirit.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "Amen.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                },
                "sp_en": "ALL"
              },
              {
                "text_en": " The Lord be with you.",
                "__massEditorPairKeys": {
                  "text_en": "2:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "And with your spirit.",
                "__massEditorPairKeys": {
                  "text_en": "3:text"
                },
                "sp_en": "ALL"
              }
            ]
          },
          "D": {
            "label": {
              "en": "Bishop's Introit Form"
            },
            "lines": [
              {
                "text_en": "In the name of the Father, and of the Son, ✠ and of the Holy Spirit.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "Amen.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                },
                "sp_en": "ALL"
              },
              {
                "text_en": "Peace be with you.",
                "__massEditorPairKeys": {
                  "text_en": "2:text"
                },
                "sp_en": "B."
              },
              {
                "text_en": "And with your spirit.",
                "__massEditorPairKeys": {
                  "text_en": "3:text"
                },
                "sp_en": "ALL"
              }
            ]
          }
        }
      }
    },
    {
      "path": [
        3
      ],
      "value": {
        "id": "1.3 penitential",
        "type": "selectable",
        "header": {
          "en": "Penitential Act"
        },
        "variants": {
          "A": {
            "label": {
              "en": "Form I"
            },
            "lines": [
              {
                "text_en": "Brethren (brothers and sisters), let us acknowledge our sins,",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "and so prepare ourselves to celebrate the sacred mysteries.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                }
              },
              {
                "rubric_en": "A brief pause for silence follows.",
                "__massEditorPairKeys": {
                  "rubric_en": "2:rubric"
                },
                "rubricInset_en": true
              },
              {
                "text_en": "I confess",
                "__massEditorPairKeys": {
                  "text_en": "3:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "to almighty God",
                "__massEditorPairKeys": {
                  "text_en": "4:text"
                },
                "sp_en": "ALL"
              },
              {
                "text_en": "and to you, my brothers and sisters,",
                "__massEditorPairKeys": {
                  "text_en": "5:text"
                }
              },
              {
                "text_en": "that I have greatly sinned,",
                "__massEditorPairKeys": {
                  "text_en": "6:text"
                }
              },
              {
                "text_en": "in my thoughts and in my words,",
                "__massEditorPairKeys": {
                  "text_en": "7:text"
                }
              },
              {
                "text_en": "in what I have done and in what I have failed to do,",
                "__massEditorPairKeys": {
                  "text_en": "8:text"
                }
              },
              {
                "rubric_en": "striking their breast, they say: ",
                "__massEditorPairKeys": {
                  "rubric_en": "9:rubric"
                },
                "rubricInset_en": true
              },
              {
                "text_en": "through my fault, through my fault, through my most grievous fault;",
                "__massEditorPairKeys": {
                  "text_en": "9:text"
                }
              },
              {
                "text_en": "Therefore I ask blessed Mary ever-Virgin,",
                "__massEditorPairKeys": {
                  "text_en": "10:text"
                }
              },
              {
                "text_en": "all the Angels and Saints,",
                "__massEditorPairKeys": {
                  "text_en": "11:text"
                }
              },
              {
                "text_en": "and you, my brothers and sisters,",
                "__massEditorPairKeys": {
                  "text_en": "12:text"
                }
              },
              {
                "text_en": "to pray for me to the Lord our God.",
                "__massEditorPairKeys": {
                  "text_en": "13:text"
                }
              },
              {
                "text_en": "May almighty God have mercy on us,",
                "__massEditorPairKeys": {
                  "text_en": "14:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "forgive us our sins,",
                "__massEditorPairKeys": {
                  "text_en": "15:text"
                }
              },
              {
                "text_en": "and bring us to everlasting life.",
                "__massEditorPairKeys": {
                  "text_en": "16:text"
                }
              },
              {
                "text_en": "Amen.",
                "__massEditorPairKeys": {
                  "text_en": "17:text"
                },
                "sp_en": "ALL"
              }
            ]
          },
          "B": {
            "label": {
              "en": "Form II"
            },
            "lines": [
              {
                "text_en": "Brethren (brothers and sisters), let us acknowledge our sins,",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "and so prepare ourselves to celebrate the sacred mysteries.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                }
              },
              {
                "rubric_en": "A brief pause for silence follows.",
                "__massEditorPairKeys": {
                  "rubric_en": "2:rubric"
                },
                "rubricInset_en": true
              },
              {
                "text_en": "Have mercy on us, O Lord.",
                "__massEditorPairKeys": {
                  "text_en": "3:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "For we have sinned against you.",
                "__massEditorPairKeys": {
                  "text_en": "4:text"
                },
                "sp_en": "ALL"
              },
              {
                "text_en": "Show us, O Lord, your mercy.",
                "__massEditorPairKeys": {
                  "text_en": "5:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "And grant us your salvation.",
                "__massEditorPairKeys": {
                  "text_en": "6:text"
                },
                "sp_en": "ALL"
              },
              {
                "text_en": "May almighty God have mercy on us,",
                "__massEditorPairKeys": {
                  "text_en": "7:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "forgive us our sins,",
                "__massEditorPairKeys": {
                  "text_en": "8:text"
                }
              },
              {
                "text_en": "and bring us to everlasting life.",
                "__massEditorPairKeys": {
                  "text_en": "9:text"
                }
              },
              {
                "text_en": "Amen.",
                "__massEditorPairKeys": {
                  "text_en": "10:text"
                },
                "sp_en": "ALL"
              }
            ]
          },
          "C": {
            "label": {
              "en": "Form III"
            },
            "lines": [
              {
                "text_en": "Brethren (brothers and sisters), let us acknowledge our sins,",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "and so prepare ourselves to celebrate the sacred mysteries.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                }
              },
              {
                "rubric_en": "A brief pause for silence follows.",
                "__massEditorPairKeys": {
                  "rubric_en": "2:rubric"
                },
                "rubricInset_en": true
              },
              {
                "text_en": "You were sent to heal the contrite of heart:",
                "__massEditorPairKeys": {
                  "text_en": "3:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "Lord, have mercy.",
                "__massEditorPairKeys": {
                  "text_en": "4:text"
                }
              },
              {
                "text_en": "Lord, have mercy.",
                "__massEditorPairKeys": {
                  "text_en": "5:text"
                },
                "sp_en": "ALL"
              },
              {
                "text_en": "You came to call sinners:",
                "__massEditorPairKeys": {
                  "text_en": "6:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "Christ, have mercy.",
                "__massEditorPairKeys": {
                  "text_en": "7:text"
                }
              },
              {
                "text_en": "Christ, have mercy.",
                "__massEditorPairKeys": {
                  "text_en": "8:text"
                },
                "sp_en": "ALL"
              },
              {
                "text_en": "You are seated at the right hand of the Father to intercede for us:",
                "__massEditorPairKeys": {
                  "text_en": "9:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "Lord, have mercy.",
                "__massEditorPairKeys": {
                  "text_en": "10:text"
                }
              },
              {
                "text_en": "Lord, have mercy.",
                "__massEditorPairKeys": {
                  "text_en": "11:text"
                },
                "sp_en": "ALL"
              },
              {
                "text_en": "May almighty God have mercy on us,",
                "__massEditorPairKeys": {
                  "text_en": "12:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "forgive us our sins,",
                "__massEditorPairKeys": {
                  "text_en": "13:text"
                }
              },
              {
                "text_en": "and bring us to everlasting life.",
                "__massEditorPairKeys": {
                  "text_en": "14:text"
                }
              },
              {
                "text_en": "Amen.",
                "__massEditorPairKeys": {
                  "text_en": "15:text"
                },
                "sp_en": "ALL"
              }
            ]
          }
        }
      }
    },
    {
      "path": [
        4
      ],
      "value": {
        "id": "1.4 kyrie",
        "type": "part",
        "if": "not_penitential_C",
        "header": {
          "en": "Kyrie(Lord, have mercy)"
        },
        "lines": [
          {
            "text_en": "Lord, have mercy. ",
            "__massEditorPairKeys": {
              "text_en": "0:text"
            },
            "sp_en": "V."
          },
          {
            "rubric_en": "Or",
            "__massEditorPairKeys": {
              "rubric_en": "0:rubric"
            },
            "rubricInset_en": true
          },
          {
            "text_en": " Kyrie, eleison.",
            "__massEditorPairKeys": {
              "text_en": "editor-1793688508839-4:text"
            }
          },
          {
            "text_en": "Lord, have mercy. ",
            "__massEditorPairKeys": {
              "text_en": "1:text"
            },
            "sp_en": "R."
          },
          {
            "rubric_en": "Or",
            "__massEditorPairKeys": {
              "rubric_en": "1:rubric"
            },
            "rubricInset_en": true
          },
          {
            "text_en": " Kyrie, eleison.",
            "__massEditorPairKeys": {
              "text_en": "editor-1793688521090-5:text"
            }
          },
          {
            "text_en": "Christ, have mercy. ",
            "__massEditorPairKeys": {
              "text_en": "2:text"
            },
            "sp_en": "V."
          },
          {
            "rubric_en": "Or",
            "__massEditorPairKeys": {
              "rubric_en": "2:rubric"
            },
            "rubricInset_en": true
          },
          {
            "text_en": " Christe, eleison.",
            "__massEditorPairKeys": {
              "text_en": "editor-1793688541246-6:text"
            }
          },
          {
            "text_en": "Christ, have mercy. ",
            "__massEditorPairKeys": {
              "text_en": "3:text"
            },
            "sp_en": "R."
          },
          {
            "rubric_en": "Or",
            "__massEditorPairKeys": {
              "rubric_en": "3:rubric"
            },
            "rubricInset_en": true
          },
          {
            "text_en": " Christe, eleison.",
            "__massEditorPairKeys": {
              "text_en": "editor-1793688554794-7:text"
            }
          },
          {
            "text_en": "Lord, have mercy. ",
            "__massEditorPairKeys": {
              "text_en": "4:text"
            },
            "sp_en": "V."
          },
          {
            "rubric_en": "Or",
            "__massEditorPairKeys": {
              "rubric_en": "4:rubric"
            },
            "rubricInset_en": true
          },
          {
            "text_en": " Kyrie, eleison.",
            "__massEditorPairKeys": {
              "text_en": "editor-1793688564970-8:text"
            }
          },
          {
            "text_en": "Lord, have mercy. ",
            "__massEditorPairKeys": {
              "text_en": "5:text"
            },
            "sp_en": "R."
          },
          {
            "rubric_en": "Or",
            "__massEditorPairKeys": {
              "rubric_en": "5:rubric"
            },
            "rubricInset_en": true
          },
          {
            "text_en": " Kyrie, eleison.",
            "__massEditorPairKeys": {
              "text_en": "editor-1793688617347-9:text"
            }
          }
        ]
      }
    },
    {
      "path": [
        5
      ],
      "value": {
        "id": "1.5 gloria",
        "type": "part",
        "if": "sunday",
        "header": {
          "en": "Gloria"
        },
        "lines": [
          {
            "text_en": "Glory to God in the highest,",
            "__massEditorPairKeys": {
              "text_en": "0:text"
            },
            "sp_en": "P."
          },
          {
            "text_en": "and on earth peace to people of good will.",
            "__massEditorPairKeys": {
              "text_en": "1:text"
            },
            "sp_en": "ALL"
          },
          {
            "text_en": "We praise you,",
            "__massEditorPairKeys": {
              "text_en": "2:text"
            },
            "sp_en": "V."
          },
          {
            "text_en": "we bless you,",
            "__massEditorPairKeys": {
              "text_en": "3:text"
            }
          },
          {
            "text_en": "we adore you,",
            "__massEditorPairKeys": {
              "text_en": "4:text"
            },
            "sp_en": "R."
          },
          {
            "text_en": "we glorify you,",
            "__massEditorPairKeys": {
              "text_en": "5:text"
            }
          },
          {
            "text_en": "we give you thanks for your great glory,",
            "__massEditorPairKeys": {
              "text_en": "6:text"
            },
            "sp_en": "V."
          },
          {
            "text_en": "Lord God, heavenly King,",
            "__massEditorPairKeys": {
              "text_en": "7:text"
            },
            "sp_en": "R."
          },
          {
            "text_en": "Lord Jesus Christ, Only Begotten Son,",
            "__massEditorPairKeys": {
              "text_en": "8:text"
            },
            "sp_en": "V."
          },
          {
            "text_en": "Lord God, Lamb of God, Son of the Father,",
            "__massEditorPairKeys": {
              "text_en": "9:text"
            },
            "sp_en": "R."
          },
          {
            "text_en": "you take away the sins of the world,",
            "__massEditorPairKeys": {
              "text_en": "10:text"
            },
            "sp_en": "V."
          },
          {
            "text_en": "have mercy on us;",
            "__massEditorPairKeys": {
              "text_en": "11:text"
            }
          },
          {
            "text_en": "you take away the sins of the world,",
            "__massEditorPairKeys": {
              "text_en": "12:text"
            },
            "sp_en": "R."
          },
          {
            "text_en": "receive our prayer;",
            "__massEditorPairKeys": {
              "text_en": "13:text"
            }
          },
          {
            "text_en": "you are seated at the right hand of the Father,",
            "__massEditorPairKeys": {
              "text_en": "14:text"
            },
            "sp_en": "V."
          },
          {
            "text_en": "have mercy on us;",
            "__massEditorPairKeys": {
              "text_en": "15:text"
            }
          },
          {
            "text_en": "For you alone are the Holy One,",
            "__massEditorPairKeys": {
              "text_en": "16:text"
            },
            "sp_en": "R."
          },
          {
            "text_en": "you alone are the Lord,",
            "__massEditorPairKeys": {
              "text_en": "17:text"
            }
          },
          {
            "text_en": "you alone are the Most High, Jesus Christ,",
            "__massEditorPairKeys": {
              "text_en": "18:text"
            }
          },
          {
            "text_en": "with the Holy Spirit,",
            "__massEditorPairKeys": {
              "text_en": "19:text"
            },
            "sp_en": "ALL"
          },
          {
            "text_en": "in the glory of God the Father.",
            "__massEditorPairKeys": {
              "text_en": "20:text"
            }
          },
          {
            "text_en": "Amen.",
            "__massEditorPairKeys": {
              "text_en": "21:text"
            }
          }
        ]
      }
    },
    {
      "path": [
        6
      ],
      "value": {
        "id": "1.6 collect",
        "type": "part",
        "header": {
          "en": "Collect"
        },
        "lines": [
          {
            "text_en": "Let us pray.",
            "__massEditorPairKeys": {
              "text_en": "0:text"
            },
            "sp_en": "P."
          },
          {
            "text_en": "(Today's Collect…)",
            "__massEditorPairKeys": {
              "text_en": "1:text"
            }
          },
          {
            "text_en": "(Prayer Ending)",
            "__massEditorPairKeys": {
              "text_en": "2:text"
            }
          },
          {
            "text_en": "Amen.",
            "__massEditorPairKeys": {
              "text_en": "3:text"
            },
            "sp_en": "All"
          }
        ]
      }
    },
    {
      "path": [
        8
      ],
      "value": {
        "id": "2.1 reading1",
        "type": "part",
        "header": {
          "en": "The First Reading"
        },
        "cit": {
          "cit_en": ""
        },
        "lines": [
          {
            "text_en": "<i><span color=gray>(Summary)</span></i>",
            "__massEditorPairKeys": {
              "text_en": "0:text"
            }
          },
          {
            "text_en": "A reading from the book of (Bible)",
            "__massEditorPairKeys": {
              "text_en": "1:text"
            },
            "sp_en": "L."
          },
          {
            "text_en": "(Today's the first reading...)",
            "__massEditorPairKeys": {
              "text_en": "2:text"
            }
          },
          {
            "text_en": "The word of the Lord.",
            "__massEditorPairKeys": {
              "text_en": "3:text"
            },
            "sp_en": "L."
          },
          {
            "text_en": "Thanks be to God.",
            "__massEditorPairKeys": {
              "text_en": "4:text"
            },
            "sp_en": "All"
          }
        ]
      }
    },
    {
      "path": [
        9
      ],
      "value": {
        "id": "2.2 psalm",
        "type": "part",
        "header": {
          "en": "The Psalm"
        },
        "cit": {
          "cit_en": ""
        },
        "lines": [
          {
            "text_en": "(Response)",
            "__massEditorPairKeys": {
              "text_en": "0:text"
            },
            "sp_en": "R."
          },
          {
            "text_en": "(The Psalm verse) - Response.",
            "__massEditorPairKeys": {
              "text_en": "1:text"
            },
            "sp_en": "Ps."
          }
        ]
      }
    },
    {
      "path": [
        10
      ],
      "value": {
        "id": "2.3 reading2",
        "type": "part",
        "if": "sunday",
        "header": {
          "en": "The Second Reading"
        },
        "cit": {
          "cit_en": ""
        },
        "lines": [
          {
            "text_en": "<i><span color=gray>(Summary)</span></i>",
            "__massEditorPairKeys": {
              "text_en": "0:text"
            }
          },
          {
            "text_en": "A reading from the book of (Bible)",
            "__massEditorPairKeys": {
              "text_en": "1:text"
            },
            "sp_en": "L."
          },
          {
            "text_en": "(Today's the second reading...)",
            "__massEditorPairKeys": {
              "text_en": "2:text"
            }
          },
          {
            "text_en": "The word of the Lord.",
            "__massEditorPairKeys": {
              "text_en": "3:text"
            },
            "sp_en": "L."
          },
          {
            "text_en": "Thanks be to God.",
            "__massEditorPairKeys": {
              "text_en": "4:text"
            },
            "sp_en": "All"
          }
        ]
      }
    },
    {
      "path": [
        11
      ],
      "value": {
        "id": "2.4 Sequence",
        "type": "part",
        "if": "easter_or_pentecost",
        "header": {
          "en": "Sequence"
        },
        "lines": [
          {
            "text_en": "(Today's Sequence...)",
            "__massEditorPairKeys": {
              "text_en": "0:text"
            }
          }
        ]
      }
    },
    {
      "path": [
        12
      ],
      "value": {
        "id": "2.5 gospel_accl",
        "type": "part",
        "header": {
          "en": "Alleluia"
        },
        "cit": {
          "cit_en": ""
        },
        "lines": [
          {
            "text_en": "(Today's Alleluia...)",
            "__massEditorPairKeys": {
              "text_en": "0:text"
            }
          }
        ]
      }
    },
    {
      "path": [
        13
      ],
      "value": {
        "id": "2.6 gospel",
        "type": "part",
        "header": {
          "en": "The Gospel"
        },
        "cit": {
          "cit_en": ""
        },
        "lines": [
          {
            "text_en": "The Lord be with you.",
            "__massEditorPairKeys": {
              "text_en": "0:text"
            },
            "sp_en": "P.(D.)"
          },
          {
            "text_en": "And with your spirit.",
            "__massEditorPairKeys": {
              "text_en": "1:text"
            },
            "sp_en": "ALL"
          },
          {
            "text_en": "A reading from the holy Gospel according to (...)).",
            "__massEditorPairKeys": {
              "text_en": "2:text"
            },
            "sp_en": "P.(D.)"
          },
          {
            "text_en": "Glory to you, Lord.",
            "__massEditorPairKeys": {
              "text_en": "3:text"
            },
            "sp_en": "ALL"
          },
          {
            "text_en": "(Today's Gospel...)",
            "__massEditorPairKeys": {
              "text_en": "4:text"
            }
          },
          {
            "text_en": "The Gospel of the Lord.",
            "__massEditorPairKeys": {
              "text_en": "5:text"
            },
            "sp_en": "P.(D.)"
          },
          {
            "text_en": "Praise to you, Lord Jesus Christ.",
            "__massEditorPairKeys": {
              "text_en": "6:text"
            },
            "sp_en": "All"
          }
        ]
      }
    },
    {
      "path": [
        14
      ],
      "value": {
        "id": "2.7 homily",
        "type": "part",
        "header": {
          "en": "Homily"
        },
        "lines": [
          {
            "rubric_en": "Then, follows the homily.",
            "__massEditorPairKeys": {
              "rubric_en": "0:rubric"
            }
          }
        ]
      }
    },
    {
      "path": [
        15
      ],
      "value": {
        "id": "2.8 creed",
        "type": "selectable",
        "if": "sunday",
        "header": {
          "en": "The Creed"
        },
        "variants": {
          "A": {
            "label": {
              "en": "Apostles' Creed"
            },
            "lines": [
              {
                "text_en": "I believe in God,",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "the Father almighty,",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                },
                "sp_en": "ALL"
              },
              {
                "text_en": "Creator of heaven and earth,",
                "__massEditorPairKeys": {
                  "text_en": "2:text"
                }
              },
              {
                "text_en": "and in Jesus Christ, his only Son, our Lord,",
                "__massEditorPairKeys": {
                  "text_en": "3:text"
                }
              },
              {
                "rubric_en": "All bow. ",
                "__massEditorPairKeys": {
                  "rubric_en": "4:rubric"
                },
                "rubricInset_en": true
              },
              {
                "text_en": "who was conceived by the Holy Spirit, born of the Virgin Mary,",
                "__massEditorPairKeys": {
                  "text_en": "4:text"
                }
              },
              {
                "text_en": "suffered under Pontius Pilate,",
                "__massEditorPairKeys": {
                  "text_en": "5:text"
                }
              },
              {
                "text_en": "was crucified, died and was buried;",
                "__massEditorPairKeys": {
                  "text_en": "6:text"
                }
              },
              {
                "text_en": "he descended into hell;",
                "__massEditorPairKeys": {
                  "text_en": "7:text"
                }
              },
              {
                "text_en": "on the third day he rose again from the dead;",
                "__massEditorPairKeys": {
                  "text_en": "8:text"
                }
              },
              {
                "text_en": "he ascended into heaven,",
                "__massEditorPairKeys": {
                  "text_en": "9:text"
                }
              },
              {
                "text_en": "and is seated at the right hand of God the Father almighty;",
                "__massEditorPairKeys": {
                  "text_en": "10:text"
                }
              },
              {
                "text_en": "from there he will come to judge the living and the dead.",
                "__massEditorPairKeys": {
                  "text_en": "11:text"
                }
              },
              {
                "text_en": "I believe in the Holy Spirit,",
                "__massEditorPairKeys": {
                  "text_en": "12:text"
                }
              },
              {
                "text_en": "the holy catholic Church,",
                "__massEditorPairKeys": {
                  "text_en": "13:text"
                }
              },
              {
                "text_en": "the communion of saints,",
                "__massEditorPairKeys": {
                  "text_en": "14:text"
                }
              },
              {
                "text_en": "the forgiveness of sins,",
                "__massEditorPairKeys": {
                  "text_en": "15:text"
                }
              },
              {
                "text_en": "the resurrection of the body,",
                "__massEditorPairKeys": {
                  "text_en": "16:text"
                }
              },
              {
                "text_en": "and life everlasting.",
                "__massEditorPairKeys": {
                  "text_en": "17:text"
                }
              },
              {
                "text_en": "Amen.",
                "__massEditorPairKeys": {
                  "text_en": "18:text"
                }
              }
            ]
          },
          "B": {
            "label": {
              "en": "Nicene-Constantinopolitan Creed"
            },
            "lines": [
              {
                "text_en": "I believe",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "in one God,",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                },
                "sp_en": "ALL"
              },
              {
                "text_en": "the Father almighty, maker of heaven and earth,",
                "__massEditorPairKeys": {
                  "text_en": "2:text"
                }
              },
              {
                "text_en": "of all things visible and invisible.",
                "__massEditorPairKeys": {
                  "text_en": "3:text"
                }
              },
              {
                "text_en": "I believe in one Lord Jesus Christ,",
                "__massEditorPairKeys": {
                  "text_en": "4:text"
                }
              },
              {
                "text_en": "the Only Begotten Son of God,",
                "__massEditorPairKeys": {
                  "text_en": "5:text"
                }
              },
              {
                "text_en": "born of the Father before all ages.",
                "__massEditorPairKeys": {
                  "text_en": "6:text"
                }
              },
              {
                "text_en": "God from God, Light from Light,",
                "__massEditorPairKeys": {
                  "text_en": "7:text"
                }
              },
              {
                "text_en": "true God from true God,",
                "__massEditorPairKeys": {
                  "text_en": "8:text"
                }
              },
              {
                "text_en": "begotten, not made, consubstantial with the Father;",
                "__massEditorPairKeys": {
                  "text_en": "9:text"
                }
              },
              {
                "text_en": "through him all things were made.",
                "__massEditorPairKeys": {
                  "text_en": "10:text"
                }
              },
              {
                "text_en": "For us men and for our salvation",
                "__massEditorPairKeys": {
                  "text_en": "11:text"
                }
              },
              {
                "text_en": "he came down from heaven,",
                "__massEditorPairKeys": {
                  "text_en": "12:text"
                }
              },
              {
                "rubric_en": "All bow. ",
                "__massEditorPairKeys": {
                  "rubric_en": "13:rubric"
                },
                "rubricInset_en": true
              },
              {
                "text_en": "and by the Holy Spirit was incarnate of the Virgin Mary,",
                "__massEditorPairKeys": {
                  "text_en": "13:text"
                }
              },
              {
                "text_en": "and became man.",
                "__massEditorPairKeys": {
                  "text_en": "14:text"
                }
              },
              {
                "text_en": "For our sake he was crucified under Pontius Pilate,",
                "__massEditorPairKeys": {
                  "text_en": "15:text"
                }
              },
              {
                "text_en": "he suffered death and was buried,",
                "__massEditorPairKeys": {
                  "text_en": "16:text"
                }
              },
              {
                "text_en": "and rose again on the third day",
                "__massEditorPairKeys": {
                  "text_en": "17:text"
                }
              },
              {
                "text_en": "in accordance with the Scriptures.",
                "__massEditorPairKeys": {
                  "text_en": "18:text"
                }
              },
              {
                "text_en": "He ascended into heaven",
                "__massEditorPairKeys": {
                  "text_en": "19:text"
                }
              },
              {
                "text_en": "and is seated at the right hand of the Father.",
                "__massEditorPairKeys": {
                  "text_en": "20:text"
                }
              },
              {
                "text_en": "He will come again in glory",
                "__massEditorPairKeys": {
                  "text_en": "21:text"
                }
              },
              {
                "text_en": "to judge the living and the dead",
                "__massEditorPairKeys": {
                  "text_en": "22:text"
                }
              },
              {
                "text_en": "and his kingdom will have no end.",
                "__massEditorPairKeys": {
                  "text_en": "23:text"
                }
              },
              {
                "text_en": "I believe in the Holy Spirit, the Lord, the giver of life,",
                "__massEditorPairKeys": {
                  "text_en": "24:text"
                }
              },
              {
                "text_en": "who proceeds from the Father and the Son,",
                "__massEditorPairKeys": {
                  "text_en": "25:text"
                }
              },
              {
                "text_en": "who with the Father and the Son is adored and glorified,",
                "__massEditorPairKeys": {
                  "text_en": "26:text"
                }
              },
              {
                "text_en": "who has spoken through the prophets.",
                "__massEditorPairKeys": {
                  "text_en": "27:text"
                }
              },
              {
                "text_en": "I believe in one, holy, catholic and apostolic Church.",
                "__massEditorPairKeys": {
                  "text_en": "28:text"
                }
              },
              {
                "text_en": "I confess one baptism for the forgiveness of sins",
                "__massEditorPairKeys": {
                  "text_en": "29:text"
                }
              },
              {
                "text_en": "and I look forward to the resurrection of the dead",
                "__massEditorPairKeys": {
                  "text_en": "30:text"
                }
              },
              {
                "text_en": "and the life of the world to come.",
                "__massEditorPairKeys": {
                  "text_en": "31:text"
                }
              },
              {
                "text_en": "Amen.",
                "__massEditorPairKeys": {
                  "text_en": "32:text"
                }
              }
            ]
          }
        }
      }
    },
    {
      "path": [
        16
      ],
      "value": {
        "id": "2.9 universal",
        "type": "part",
        "if": "sunday",
        "header": {
          "en": "Universal Prayer (Prayer of the Faithful)"
        },
        "lines": [
          {
            "text_en": "Dear brothers and sisters….",
            "__massEditorPairKeys": {
              "text_en": "0:text"
            },
            "sp_en": "P."
          },
          {
            "rubric_en": "The community offers prayers prepared by themselves.",
            "__massEditorPairKeys": {
              "rubric_en": "1:rubric"
            },
            "rubricInset_en": true
          },
          {
            "rubric_en": "At the end of the prayers",
            "__massEditorPairKeys": {
              "rubric_en": "2:rubric"
            },
            "rubricInset_en": true
          },
          {
            "text_en": " Lord, hear our prayer.",
            "__massEditorPairKeys": {
              "text_en": "2:text"
            },
            "sp_en": "All"
          },
          {
            "text_en": "Dear brothers and sisters…",
            "__massEditorPairKeys": {
              "text_en": "3:text"
            },
            "sp_en": "P."
          },
          {
            "text_en": "Through Christ our Lord.",
            "__massEditorPairKeys": {
              "text_en": "4:text"
            }
          },
          {
            "text_en": "Amen.",
            "__massEditorPairKeys": {
              "text_en": "5:text"
            },
            "sp_en": "All"
          }
        ]
      }
    },
    {
      "path": [
        18
      ],
      "value": {
        "id": "3.1 offertory",
        "type": "part",
        "header": {
          "en": "Offertory"
        },
        "lines": [
          {
            "rubric_en": "The Offertory Chant is not sung, The Priest may speak these words aloud.",
            "__massEditorPairKeys": {
              "rubric_en": "0:rubric"
            }
          },
          {
            "rubric_en": "takes the paten with the bread",
            "__massEditorPairKeys": {
              "rubric_en": "1:rubric"
            },
            "rubricInset_en": true
          },
          {
            "rubric_en": "and holds it slightly raised above the altar, with both hands ",
            "__massEditorPairKeys": {
              "rubric_en": "2:rubric"
            },
            "rubricInset_en": true
          },
          {
            "text_en": "Blessed are you, Lord God of all creation,",
            "__massEditorPairKeys": {
              "text_en": "2:text"
            }
          },
          {
            "text_en": "for through your goodness",
            "__massEditorPairKeys": {
              "text_en": "3:text"
            }
          },
          {
            "text_en": "we have received the bread we offer you:",
            "__massEditorPairKeys": {
              "text_en": "4:text"
            }
          },
          {
            "text_en": "fruit of the earth and work of human hands,",
            "__massEditorPairKeys": {
              "text_en": "5:text"
            }
          },
          {
            "text_en": "it will become for us the bread of life.",
            "__massEditorPairKeys": {
              "text_en": "6:text"
            }
          },
          {
            "text_en": "Blessed be God for ever.",
            "__massEditorPairKeys": {
              "text_en": "7:text"
            },
            "sp_en": "ALL"
          },
          {
            "rubric_en": "takes the chalice and holds it slightly raised",
            "__massEditorPairKeys": {
              "rubric_en": "8:rubric"
            },
            "rubricInset_en": true
          },
          {
            "rubric_en": "above the altar with both hands ",
            "__massEditorPairKeys": {
              "rubric_en": "9:rubric"
            },
            "rubricInset_en": true
          },
          {
            "text_en": "Blessed are you, Lord God of all creation,",
            "__massEditorPairKeys": {
              "text_en": "9:text"
            }
          },
          {
            "text_en": "for through your goodness",
            "__massEditorPairKeys": {
              "text_en": "10:text"
            }
          },
          {
            "text_en": "we have received the wine we offer you:",
            "__massEditorPairKeys": {
              "text_en": "11:text"
            }
          },
          {
            "text_en": "fruit of the vine and work of human hands",
            "__massEditorPairKeys": {
              "text_en": "12:text"
            }
          },
          {
            "text_en": "it will become our spiritual drink.",
            "__massEditorPairKeys": {
              "text_en": "13:text"
            }
          },
          {
            "text_en": "Blessed be God for ever.",
            "__massEditorPairKeys": {
              "text_en": "14:text"
            },
            "sp_en": "ALL"
          },
          {
            "rubric_en": "After the preparation of the offerings is finished",
            "__massEditorPairKeys": {
              "rubric_en": "15:rubric"
            },
            "rubricInset_en": true
          },
          {
            "text_en": "Pray, brethren (brothers and sisters),",
            "__massEditorPairKeys": {
              "text_en": "16:text"
            },
            "sp_en": "P."
          },
          {
            "text_en": "that my sacrifice and yours",
            "__massEditorPairKeys": {
              "text_en": "17:text"
            }
          },
          {
            "text_en": "may be acceptable to God, the almighty Father.",
            "__massEditorPairKeys": {
              "text_en": "18:text"
            }
          },
          {
            "text_en": "May the Lord accept the sacrifice at your hands",
            "__massEditorPairKeys": {
              "text_en": "19:text"
            },
            "sp_en": "ALL"
          },
          {
            "text_en": "for the praise and glory of his name,",
            "__massEditorPairKeys": {
              "text_en": "20:text"
            }
          },
          {
            "text_en": "for our good, and the good of all his holy Church.",
            "__massEditorPairKeys": {
              "text_en": "21:text"
            }
          }
        ]
      }
    },
    {
      "path": [
        19
      ],
      "value": {
        "id": "3.2 prayer_offerings",
        "type": "part",
        "header": {
          "en": "Prayer over the Offerings"
        },
        "lines": [
          {
            "text_en": "(Today's Prayer over the Offerings…)",
            "__massEditorPairKeys": {
              "text_en": "0:text"
            },
            "sp_en": "P."
          },
          {
            "text_en": "(Prayer Ending)",
            "__massEditorPairKeys": {
              "text_en": "1:text"
            }
          },
          {
            "text_en": "Amen.",
            "__massEditorPairKeys": {
              "text_en": "2:text"
            },
            "sp_en": "All"
          }
        ]
      }
    },
    {
      "path": [
        20
      ],
      "value": {
        "id": "3.3 eucharist",
        "type": "selectable",
        "isEucharist": true,
        "header": {
          "en": "The Eucharistic Prayer"
        },
        "variants": {
          "1": {
            "label": {
              "en": "Eucharistic Prayer I"
            }
          },
          "2": {
            "label": {
              "en": "Eucharistic Prayer II"
            }
          },
          "3": {
            "label": {
              "en": "Eucharistic Prayer III"
            }
          },
          "4": {
            "label": {
              "en": "Eucharistic Prayer IV"
            }
          }
        },
        "common_dialogue": [
          {
            "text_en": "The Lord be with you.",
            "__massEditorPairKeys": {
              "text_en": "0:text"
            },
            "sp_en": "V."
          },
          {
            "text_en": "And with your spirit.",
            "__massEditorPairKeys": {
              "text_en": "1:text"
            },
            "sp_en": "R."
          },
          {
            "text_en": "Lift up your hearts.",
            "__massEditorPairKeys": {
              "text_en": "2:text"
            },
            "sp_en": "V."
          },
          {
            "text_en": "We lift them up to the Lord.",
            "__massEditorPairKeys": {
              "text_en": "3:text"
            },
            "sp_en": "R."
          },
          {
            "text_en": "Let us give thanks to the Lord our God.",
            "__massEditorPairKeys": {
              "text_en": "4:text"
            },
            "sp_en": "V."
          },
          {
            "text_en": "It is right and just.",
            "__massEditorPairKeys": {
              "text_en": "5:text"
            },
            "sp_en": "R."
          }
        ],
        "songs": {
          "ordinary_1": {
            "title": {
              "en": "PREFACE I OF THE SUNDAYS IN ORDINARY TIME - The Paschal Mystery and the People of God"
            },
            "content": [
              {
                "text_en": "It is truly right and just, our duty and our salvation, always and everywhere to give you thanks, Lord, holy Father, almighty and eternal God, through Christ our Lord.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "For through his Paschal Mystery, he accomplished the marvelous deed, by which he has freed us from the yoke of sin and death, summoning us to the glory of being now called a chosen race, a royal priesthood, a holy nation, a people for your own possession,",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                }
              },
              {
                "text_en": "to proclaim everywhere your mighty works, for you have called us out of darkness into your own wonderful light.",
                "__massEditorPairKeys": {
                  "text_en": "2:text"
                }
              },
              {
                "text_en": "And so, with Angels and Archangels, with Thrones and Dominions, and with all the hosts and Powers of heaven, we sing the hymn of your glory, as without end we acclaim:",
                "__massEditorPairKeys": {
                  "text_en": "3:text"
                }
              }
            ]
          },
          "ordinary_2": {
            "title": {
              "en": "PREFACE II OF THE SUNDAYS IN ORDINARY TIME - The mystery of salvation"
            },
            "content": [
              {
                "text_en": "It is truly right and just, our duty and our salvation, always and everywhere to give you thanks, Lord, holy Father, almighty and eternal God, through Christ our Lord.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "For out of compassion for the waywardness that is ours, he humbled himself and was born of the Virgin; by the passion of the Cross he freed us from unending death, and by rising from the dead he gave us life eternal.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                }
              },
              {
                "text_en": "And so, with Angels and Archangels, with Thrones and Dominions, and with all the hosts and Powers of heaven, we sing the hymn of your glory, as without end we acclaim:",
                "__massEditorPairKeys": {
                  "text_en": "2:text"
                }
              }
            ]
          },
          "ordinary_3": {
            "title": {
              "en": "PREFACE III OF THE SUNDAYS IN ORDINARY TIME - The salvation of man by a man"
            },
            "content": [
              {
                "text_en": "It is truly right and just, our duty and our salvation, always and everywhere to give you thanks, Lord, holy Father, almighty and eternal God, through Christ our Lord.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "For we know it belongs to your boundless glory, that you came to the aid of mortal beings with your divinity and even fashioned for us a remedy out of mortality itself, that the cause of our downfall might become the means of our salvation, through Christ our Lord.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                }
              },
              {
                "text_en": "Through him the host of Angels adores your majesty and rejoices in your presence for ever.",
                "__massEditorPairKeys": {
                  "text_en": "2:text"
                }
              },
              {
                "text_en": "May our voices, we pray, join with theirs in one chorus of exultant praise, as we acclaim:",
                "__massEditorPairKeys": {
                  "text_en": "3:text"
                }
              }
            ]
          },
          "ordinary_4": {
            "title": {
              "en": "PREFACE IV OF THE SUNDAYS IN ORDINARY TIME - The history of salvation"
            },
            "content": [
              {
                "text_en": "It is truly right and just, our duty and our salvation, always and everywhere to give you thanks, Lord, holy Father, almighty and eternal God, through Christ our Lord.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "For by his birth he brought renewal to humanity's fallen state, and by his suffering, canceled out our sins; by his rising from the dead he has opened the way to eternal life, and by ascending to you, O Father, he has unlocked the gates of heaven.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                }
              },
              {
                "text_en": "And so, with Angels and Archangels, with Thrones and Dominions, and with all the hosts and Powers of heaven, we sing the hymn of your glory, as without end we acclaim:",
                "__massEditorPairKeys": {
                  "text_en": "2:text"
                }
              }
            ]
          },
          "ordinary_5": {
            "title": {
              "en": "PREFACE V OF THE SUNDAYS IN ORDINARY TIME - Creation"
            },
            "content": [
              {
                "text_en": "It is truly right and just, our duty and our salvation, always and everywhere to give you thanks, Lord, holy Father, almighty and eternal God, through Christ our Lord.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "For you created all things of the world and have directed the changing of seasons, but you formed man in your own image and set humanity over the whole world in all its wonder, to rule in your name over all you have made and forever praise you in your mighty works, through Christ our Lord.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                }
              },
              {
                "text_en": "Through him the host of Angels adores your majesty and rejoices in your presence for ever.",
                "__massEditorPairKeys": {
                  "text_en": "2:text"
                }
              },
              {
                "text_en": "May our voices, we pray, join with theirs in one chorus of exultant praise, as we acclaim:",
                "__massEditorPairKeys": {
                  "text_en": "3:text"
                }
              }
            ]
          },
          "ordinary_6": {
            "title": {
              "en": "PREFACE VI OF THE SUNDAYS IN ORDINARY TIME - The pledge of the eternal Passover"
            },
            "content": [
              {
                "text_en": "It is truly right and just, our duty and our salvation, always and everywhere to give you thanks, Lord, holy Father, almighty and eternal God.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "For in you we live and move and have our being, and while in this body we not only experience the daily effects of your care, but even now possess the pledge of life eternal.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                }
              },
              {
                "text_en": "For, having received the first fruits of the Spirit, through whom you raised up Jesus from the dead, we hope for an everlasting share in the Paschal Mystery.",
                "__massEditorPairKeys": {
                  "text_en": "2:text"
                }
              },
              {
                "text_en": "And so, with all the Angels, we praise you, as in joyful celebration we acclaim:",
                "__massEditorPairKeys": {
                  "text_en": "3:text"
                }
              }
            ]
          },
          "ordinary_7": {
            "title": {
              "en": "PREFACE VII OF THE SUNDAYS IN ORDINARY TIME - Salvation through the obedience of Christ"
            },
            "content": [
              {
                "text_en": "It is truly right and just, our duty and our salvation, always and everywhere to give you thanks, Lord, holy Father, almighty and eternal God.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "For you so loved the world that in your mercy you sent us the Redeemer, to live like us in all things but sin, so that you might love in us what you loved in your Son, by whose obedience we have been restored to those gifts of yours that, by sinning, we had lost in disobedience.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                }
              },
              {
                "text_en": "And so, Lord, with all the Angels and Saints, we, too, give you thanks, as in exultation we acclaim:",
                "__massEditorPairKeys": {
                  "text_en": "2:text"
                }
              }
            ]
          },
          "ordinary_8": {
            "title": {
              "en": "PREFACE VIII OF THE SUNDAYS IN ORDINARY TIME - The Church united by the unity of the Trinity"
            },
            "content": [
              {
                "text_en": "It is truly right and just, our duty and our salvation, always and everywhere to give you thanks, Lord, holy Father, almighty and eternal God.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "For, when your children were scattered afar by sin, through the Blood of your Son and the power of the Spirit, you gathered them again to yourself, that a people, formed as one by the unity of the Trinity, made the body of Christ and the temple of the Holy Spirit, might, to the praise of your manifold wisdom, be manifest as the Church.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                }
              },
              {
                "text_en": "And so, in company with the choirs of Angels, we praise you, and with joy we proclaim:",
                "__massEditorPairKeys": {
                  "text_en": "2:text"
                }
              }
            ]
          },
          "common_1": {
            "title": {
              "en": "COMMON PREFACE I - The renewal of all things in Christ"
            },
            "content": [
              {
                "text_en": "It is truly right and just, our duty and our salvation, always and everywhere to give you thanks, Lord, holy Father, almighty and eternal God, through Christ our Lord.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "In him you have been pleased to renew all things, giving us all a share in his fullness.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                }
              },
              {
                "text_en": "For though he was in the form of God, he emptied himself and by the blood of his Cross brought peace to all creation.",
                "__massEditorPairKeys": {
                  "text_en": "2:text"
                }
              },
              {
                "text_en": "Therefore he has been exalted above all things, and to all who obey him, has become the source of eternal salvation.",
                "__massEditorPairKeys": {
                  "text_en": "3:text"
                }
              },
              {
                "text_en": "And so, with Angels and Archangels, with Thrones and Dominions, and with all the hosts and Powers of heaven, we sing the hymn of your glory, as without end we acclaim:",
                "__massEditorPairKeys": {
                  "text_en": "4:text"
                }
              }
            ]
          },
          "common_2": {
            "title": {
              "en": "COMMON PREFACE II - Salvation through Christ"
            },
            "content": [
              {
                "text_en": "It is truly right and just, our duty and our salvation, always and everywhere to give you thanks, Lord, holy Father, almighty and eternal God.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "For in goodness you created man and, when he was justly condemned, in mercy you redeemed him, through Christ our Lord.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                }
              },
              {
                "text_en": "Through him the Angels praise your majesty, Dominions adore and Powers tremble before you.",
                "__massEditorPairKeys": {
                  "text_en": "2:text"
                }
              },
              {
                "text_en": "Heaven and the Virtues of heaven and the blessed Seraphim worship together with exultation.",
                "__massEditorPairKeys": {
                  "text_en": "3:text"
                }
              },
              {
                "text_en": "May our voices, we pray, join with theirs in humble praise, as we acclaim:",
                "__massEditorPairKeys": {
                  "text_en": "4:text"
                }
              }
            ]
          },
          "common_3": {
            "title": {
              "en": "COMMON PREFACE III - Praise to God for the creation and restoration of the human race"
            },
            "content": [
              {
                "text_en": "It is truly right and just, our duty and our salvation, always and everywhere to give you thanks, Lord, holy Father, almighty and eternal God.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "For just as through your beloved Son you created the human race, so also through him with great goodness you formed it anew.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                }
              },
              {
                "text_en": "And so, it is right that all your creatures serve you, all the redeemed praise you, and all your Saints with one heart bless you.",
                "__massEditorPairKeys": {
                  "text_en": "2:text"
                }
              },
              {
                "text_en": "Therefore, we, too, extol you with all the Angels, as in joyful celebration we acclaim:",
                "__massEditorPairKeys": {
                  "text_en": "3:text"
                }
              }
            ]
          },
          "common_4": {
            "title": {
              "en": "COMMON PREFACE IV - Praise, the gift of God"
            },
            "content": [
              {
                "text_en": "It is truly right and just, our duty and our salvation, always and everywhere to give you thanks, Lord, holy Father, almighty and eternal God.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "For, although you have no need of our praise, yet our thanksgiving is itself your gift, since our praises add nothing to your greatness but profit us for salvation, through Christ our Lord.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                }
              },
              {
                "text_en": "And so, in company with the choirs of Angels, we praise you, and with joy we proclaim:",
                "__massEditorPairKeys": {
                  "text_en": "2:text"
                }
              }
            ]
          },
          "common_5": {
            "title": {
              "en": "COMMON PREFACE V - The proclamation of the mystery of Christ"
            },
            "content": [
              {
                "text_en": "It is truly right and just, our duty and our salvation, always and everywhere to give you thanks, Lord, holy Father, almighty and eternal God, through Christ our Lord.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "His Death we celebrate in love, his Resurrection we confess with living faith, and his Coming in glory we await with unwavering hope.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                }
              },
              {
                "text_en": "And so, with all the Angels and Saints, we praise you, as without end we acclaim:",
                "__massEditorPairKeys": {
                  "text_en": "2:text"
                }
              }
            ]
          },
          "common_6": {
            "title": {
              "en": "COMMON PREFACE VI - The mystery of salvation in Christ"
            },
            "content": [
              {
                "text_en": "It is truly right and just, our duty and our salvation, always and everywhere to give you thanks, Father most holy, through your beloved Son, Jesus Christ, your Word through whom you made all things, whom you sent as our Savior and Redeemer, incarnate by the Holy Spirit and born of the Virgin.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "Fulfilling your will and gaining for you a holy people, he stretched out his hands as he endured his Passion, so as to break the bonds of death and manifest the resurrection.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                }
              },
              {
                "text_en": "And so, with the Angels and all the Saints, we declare your glory, as with one voice we acclaim:",
                "__massEditorPairKeys": {
                  "text_en": "2:text"
                }
              }
            ]
          },
          "advent_1": {
            "title": {
              "en": "PREFACE I OF ADVENT - The two comings of Christ"
            },
            "content": [
              {
                "text_en": "It is truly right and just, our duty and our salvation, always and everywhere to give you thanks, Lord, holy Father, almighty and eternal God, through Christ our Lord.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "For he assumed at his first coming the lowliness of human flesh, and so fulfilled the design you formed long ago, and opened for us the way to eternal salvation,",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                }
              },
              {
                "text_en": "that, when he comes again in glory and majesty and all is at last made manifest, we who watch for that day may inherit the great promise in which now we dare to hope.",
                "__massEditorPairKeys": {
                  "text_en": "2:text"
                }
              },
              {
                "text_en": "And so, with Angels and Archangels, with Thrones and Dominions, and with all the hosts and Powers of heaven, we sing the hymn of your glory, as without end we acclaim:",
                "__massEditorPairKeys": {
                  "text_en": "3:text"
                }
              }
            ]
          },
          "advent_2": {
            "title": {
              "en": "PREFACE II OF ADVENT - The twofold expectation of Christ"
            },
            "content": [
              {
                "text_en": "It is truly right and just, our duty and our salvation, always and everywhere to give you thanks, Lord, holy Father, almighty and eternal God, through Christ our Lord.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "For all the oracles of the prophets foretold him, the Virgin Mother longed for him with love beyond all telling, John the Baptist sang of his coming and proclaimed his presence when he came.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                }
              },
              {
                "text_en": "It is by his gift that already we rejoice at the mystery of his Nativity, so that he may find us watchful in prayer and exultant in his praise.",
                "__massEditorPairKeys": {
                  "text_en": "2:text"
                }
              },
              {
                "text_en": "And so, with Angels and Archangels, with Thrones and Dominions, and with all the hosts and Powers of heaven, we sing the hymn of your glory, as without end we acclaim:",
                "__massEditorPairKeys": {
                  "text_en": "3:text"
                }
              }
            ]
          },
          "nativity_1": {
            "title": {
              "en": "PREFACE I OF THE NATIVITY OF THE LORD - Christ the Light"
            },
            "content": [
              {
                "text_en": "It is truly right and just, our duty and our salvation, always and everywhere to give you thanks, Lord, holy Father, almighty and eternal God.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "For in the mystery of the Word made flesh a new light of your glory has shone upon the eyes of our mind, so that, as we recognize in him God made visible, we may be caught up through him in love of things invisible.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                }
              },
              {
                "text_en": "And so, with Angels and Archangels, with Thrones and Dominions, and with all the hosts and Powers of heaven, we sing the hymn of your glory, as without end we acclaim:",
                "__massEditorPairKeys": {
                  "text_en": "2:text"
                }
              }
            ]
          },
          "nativity_2": {
            "title": {
              "en": "PREFACE II OF THE NATIVITY OF THE LORD - The restoration of all things in the Incarnation"
            },
            "content": [
              {
                "text_en": "It is truly right and just, our duty and our salvation, always and everywhere to give you thanks, Lord, holy Father, almighty and eternal God.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "For on the feast of this awe-filled mystery, though invisible in his own divine nature, he has appeared visibly in ours; and begotten before all ages, he has begun to exist in time;",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                }
              },
              {
                "text_en": "so that, raising up in himself all that was cast down, he might restore the whole creation and call straying humanity back to the heavenly Kingdom.",
                "__massEditorPairKeys": {
                  "text_en": "2:text"
                }
              },
              {
                "text_en": "And so, with all the Angels, we praise you, as in joyful celebration we acclaim:",
                "__massEditorPairKeys": {
                  "text_en": "3:text"
                }
              }
            ]
          },
          "nativity_3": {
            "title": {
              "en": "PREFACE III OF THE NATIVITY OF THE LORD - The exchange in the Incarnation of the Word"
            },
            "content": [
              {
                "text_en": "It is truly right and just, our duty and our salvation, always and everywhere to give you thanks, Lord, holy Father, almighty and eternal God.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "For through him the holy exchange that restores our life has shone forth today in splendor: when our frailty is assumed by your Word not only does human mortality receive unending honor but by this wondrous union we, too, are made eternal.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                }
              },
              {
                "text_en": "And so, in company with the choirs of Angels, we praise you, and with joy we proclaim:",
                "__massEditorPairKeys": {
                  "text_en": "2:text"
                }
              }
            ]
          },
          "epiphany": {
            "title": {
              "en": "PREFACE OF THE EPIPHANY OF THE LORD - Christ the light of the nations"
            },
            "content": [
              {
                "text_en": "It is truly right and just, our duty and our salvation, always and everywhere to give you thanks, Lord, holy Father, almighty and eternal God.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "For today you have revealed the mystery of our salvation in Christ as a light for the nations,",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                }
              },
              {
                "text_en": "and, when he appeared in our mortal nature, you made us new by the glory of his immortal nature.",
                "__massEditorPairKeys": {
                  "text_en": "2:text"
                }
              },
              {
                "text_en": "And so, with Angels and Archangels, with Thrones and Dominions, and with all the hosts and Powers of heaven, we sing the hymn of your glory, as without end we acclaim:",
                "__massEditorPairKeys": {
                  "text_en": "3:text"
                }
              }
            ]
          },
          "baptism_of_the_lord": {
            "title": {
              "en": "Preface of the Baptism of the Lord"
            },
            "content": [
              {
                "text_en": "It is truly right and just, our duty and our salvation, always and everywhere to give you thanks, Lord, holy Father, almighty and eternal God, through Christ our Lord.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "For in the waters of the Jordan you revealed with signs and wonders a new Baptism, so that through the voice that came down from heaven we might come to believe in your Word dwelling among us, and by the Spirit's descending in the likeness of a dove we might know that Christ your Servant has been anointed with the oil of gladness and sent to bring the good news to the poor.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                }
              },
              {
                "text_en": "And so, with the Powers of heaven, we worship you constantly on earth, and before your majesty without end we acclaim:",
                "__massEditorPairKeys": {
                  "text_en": "2:text"
                }
              }
            ]
          },
          "lent_1": {
            "title": {
              "en": "Preface of Lent I"
            },
            "content": [
              {
                "text_en": "It is truly right and just, our duty and our salvation, always and everywhere to give you thanks, Lord, holy Father, almighty and eternal God, through Christ our Lord.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "For by your gracious gift each year your faithful await the sacred paschal feasts with the joy of minds made pure,",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                }
              },
              {
                "text_en": "so that, more eagerly intent on prayer and on the works of charity, and participating in the mysteries by which they have been reborn, they may be led to the fullness of grace that you bestow on your sons and daughters.",
                "__massEditorPairKeys": {
                  "text_en": "2:text"
                }
              },
              {
                "text_en": "And so, with Angels and Archangels, with Thrones and Dominions, and with all the hosts and Powers of heaven, we sing the hymn of your glory, as without end we acclaim:",
                "__massEditorPairKeys": {
                  "text_en": "3:text"
                }
              }
            ]
          },
          "lent_2": {
            "title": {
              "en": "Preface of Lent II"
            },
            "content": [
              {
                "text_en": "It is truly right and just, our duty and our salvation, always and everywhere to give you thanks, Lord, holy Father, almighty and eternal God, through Christ our Lord.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "For you have given your children a sacred time for the renewing and purifying of their hearts,",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                }
              },
              {
                "text_en": "that, freed from disordered affections, they may so deal with the things of this passing world as to hold rather to the things that eternally endure.",
                "__massEditorPairKeys": {
                  "text_en": "2:text"
                }
              },
              {
                "text_en": "And so, with all the Angels and Saints, we praise you, as without end we acclaim:",
                "__massEditorPairKeys": {
                  "text_en": "3:text"
                }
              }
            ]
          },
          "lent_3": {
            "title": {
              "en": "PREFACE III OF LENT - The fruits of abstinence"
            },
            "content": [
              {
                "text_en": "It is truly right and just, our duty and our salvation, always and everywhere to give you thanks, Lord, holy Father, almighty and eternal God.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "For you will that our self-denial should give you thanks, there humble our sinful pride, contribute to the feeding of the poor, and so help us imitate you in your kindness.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                }
              },
              {
                "text_en": "And so we glorify you with countless Angels, as with one voice of praise we acclaim:",
                "__massEditorPairKeys": {
                  "text_en": "2:text"
                }
              }
            ]
          },
          "lent_4": {
            "title": {
              "en": "PREFACE IV OF LENT - The fruits of fasting"
            },
            "content": [
              {
                "text_en": "It is truly right and just, our duty and our salvation, always and everywhere to give you thanks, Lord, holy Father, almighty and eternal God.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "For through bodily fasting you restrain our faults, raise up our minds, and bestow both virtue and its rewards, through Christ our Lord.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                }
              },
              {
                "text_en": "Through him the Angels praise your majesty, Dominions adore and Powers tremble before you.",
                "__massEditorPairKeys": {
                  "text_en": "2:text"
                }
              },
              {
                "text_en": "Heaven and the Virtues of heaven and the blessed Seraphim worship together with exultation.",
                "__massEditorPairKeys": {
                  "text_en": "3:text"
                }
              },
              {
                "text_en": "May our voices, we pray, join with theirs in humble praise, as we acclaim:",
                "__massEditorPairKeys": {
                  "text_en": "4:text"
                }
              }
            ]
          },
          "lent_1st_sunday": {
            "title": {
              "en": "PREFACE OF THE FIRST SUNDAY OF LENT - The Temptation of the Lord"
            },
            "content": [
              {
                "text_en": "It is truly right and just, our duty and our salvation, always and everywhere to give you thanks, Lord, holy Father, almighty and eternal God, through Christ our Lord.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "By abstaining forty long days from earthly food, he consecrated through his fast the pattern of our Lenten observance and, by overturning all the snares of the ancient serpent, taught us to cast out the leaven of malice, so that, celebrating worthily the Paschal Mystery, we might pass over at last to the eternal paschal feast.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                }
              },
              {
                "text_en": "And so, with the company of Angels and Saints, we sing the hymn of your praise, as without end we acclaim:",
                "__massEditorPairKeys": {
                  "text_en": "2:text"
                }
              }
            ]
          },
          "lent_2nd_sunday": {
            "title": {
              "en": "PREFACE OF THE SECOND SUNDAY OF LENT - The Transfiguration of the Lord"
            },
            "content": [
              {
                "text_en": "It is truly right and just, our duty and our salvation, always and everywhere to give you thanks, Lord, holy Father, almighty and eternal God, through Christ our Lord.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "For after he had told the disciples of his coming Death, on the holy mountain he manifested to them his glory, to show, even by the testimony of the law and the prophets, that the Passion leads to the glory of the Resurrection.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                }
              },
              {
                "text_en": "And so, with the Powers of heaven, we worship you constantly on earth, and before your majesty without end we acclaim:",
                "__massEditorPairKeys": {
                  "text_en": "2:text"
                }
              }
            ]
          },
          "lent_3rd_sunday": {
            "title": {
              "en": "PREFACE OF THE THIRD SUNDAY OF LENT - The Samaritan Woman"
            },
            "content": [
              {
                "text_en": "It is truly right and just, our duty and our salvation, always and everywhere to give you thanks, Lord, holy Father, almighty and eternal God, through Christ our Lord.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "For when he asked the Samaritan woman for water to drink, he had already created the gift of faith within her and so ardently did he thirst for her faith, that he kindled in her the fire of divine love.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                }
              },
              {
                "text_en": "And so we, too, give you thanks and with the Angels praise your mighty deeds, as we acclaim:",
                "__massEditorPairKeys": {
                  "text_en": "2:text"
                }
              }
            ]
          },
          "lent_4th_sunday": {
            "title": {
              "en": "PREFACE OF THE FOURTH SUNDAY OF LENT - The Man Born Blind"
            },
            "content": [
              {
                "text_en": "It is truly right and just, our duty and our salvation, always and everywhere to give you thanks, Lord, holy Father, almighty and eternal God, through Christ our Lord.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "By the mystery of the Incarnation, he has led the human race that walked in darkness into the radiance of the faith and has brought those born in slavery to ancient sin through the waters of regeneration to make them your adopted children.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                }
              },
              {
                "text_en": "Therefore, all creatures of heaven and earth sing a new song in adoration, and we, with all the host of Angels, cry out, and without end we acclaim:",
                "__massEditorPairKeys": {
                  "text_en": "2:text"
                }
              }
            ]
          },
          "lent_5th_sunday": {
            "title": {
              "en": "PREFACE OF THE FIFTH SUNDAY OF LENT - Lazarus"
            },
            "content": [
              {
                "text_en": "It is truly right and just, our duty and our salvation, always and everywhere to give you thanks, Lord, holy Father, almighty and eternal God, through Christ our Lord.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "For as true man he wept for Lazarus his friend and as eternal God raised him from the tomb, just as, taking pity on the human race, he leads us by sacred mysteries to new life.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                }
              },
              {
                "text_en": "Through him the host of Angels adores your majesty and rejoices in your presence for ever.",
                "__massEditorPairKeys": {
                  "text_en": "2:text"
                }
              },
              {
                "text_en": "May our voices, we pray, join with theirs in one chorus of exultant praise, as we acclaim:",
                "__massEditorPairKeys": {
                  "text_en": "3:text"
                }
              }
            ]
          },
          "passion_1": {
            "title": {
              "en": "PREFACE I OF THE PASSION OF THE LORD - The power of the Cross"
            },
            "content": [
              {
                "text_en": "It is truly right and just, our duty and our salvation, always and everywhere to give you thanks, Lord, holy Father, almighty and eternal God, through Christ our Lord.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "For, through the saving Passion of your Son, the whole world has received a heart to confess the infinite power of your majesty, since by the wondrous power of the cross your judgment on the world is now revealed and the authority of Christ crucified.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                }
              },
              {
                "text_en": "And so, with Angels and Archangels, with Thrones and Dominions, and with all the hosts and Powers of heaven, we sing the hymn of your glory, as without end we acclaim:",
                "__massEditorPairKeys": {
                  "text_en": "2:text"
                }
              }
            ]
          },
          "passion_2": {
            "title": {
              "en": "PREFACE II OF THE PASSION OF THE LORD - The victory of the Passion"
            },
            "content": [
              {
                "text_en": "It is truly right and just, our duty and our salvation, always and everywhere to give you thanks, Lord, holy Father, almighty and eternal God, through Christ our Lord.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "For the days of his saving Passion and glorious Resurrection are approaching, by which the pride of the ancient foe is vanquished and the mystery of our redemption in Christ is celebrated.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                }
              },
              {
                "text_en": "And so, with Angels and Archangels, with Thrones and Dominions, and with all the hosts and Powers of heaven, we sing the hymn of your glory, as without end we acclaim:",
                "__massEditorPairKeys": {
                  "text_en": "2:text"
                }
              }
            ]
          },
          "easter_1": {
            "title": {
              "en": "PREFACE I OF EASTER - The Paschal Mystery"
            },
            "content": [
              {
                "text_en": "It is truly right and just, our duty and our salvation, at all times to acclaim you, O Lord, but in this time (or on this night / on this day) above all to laud you yet more gloriously, when Christ our Passover has been sacrificed.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "For he is the true Lamb who has taken away the sins of the world; by dying he has destroyed our death, and by rising, restored our life.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                }
              },
              {
                "text_en": "Therefore, overcome with paschal joy, every land, every people exults in your praise and even the heavenly Powers, with the angelic hosts, sing together the unending hymn of your glory, as they acclaim:",
                "__massEditorPairKeys": {
                  "text_en": "2:text"
                }
              }
            ]
          },
          "easter_2": {
            "title": {
              "en": "PREFACE II OF EASTER - New life in Christ"
            },
            "content": [
              {
                "text_en": "It is truly right and just, our duty and our salvation, at all times to acclaim you, O Lord, but in this time above all to laud you yet more gloriously, when Christ our Passover has been sacrificed.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "Through him the children of light rise to eternal life and the halls of the heavenly Kingdom are thrown open to the faithful; for his Death is our ransom from death, and in his rising the life of all has risen.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                }
              },
              {
                "text_en": "Therefore, overcome with paschal joy, every land, every people exults in your praise and even the heavenly Powers, with the angelic hosts, sing together the unending hymn of your glory, as they acclaim:",
                "__massEditorPairKeys": {
                  "text_en": "2:text"
                }
              }
            ]
          },
          "easter_3": {
            "title": {
              "en": "PREFACE III OF EASTER - Christ living and always interceding for us"
            },
            "content": [
              {
                "text_en": "It is truly right and just, our duty and our salvation, at all times to acclaim you, O Lord, but in this time above all to laud you yet more gloriously, when Christ our Passover has been sacrificed.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "He never ceases to offer himself for us but defends us and ever pleads our cause before you: he is the sacrificial Victim who dies no more, the Lamb, once slain, who lives forever.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                }
              },
              {
                "text_en": "Therefore, overcome with paschal joy, every land, every people exults in your praise and even the heavenly Powers, with the angelic hosts, sing together the unending hymn of your glory, as they acclaim:",
                "__massEditorPairKeys": {
                  "text_en": "2:text"
                }
              }
            ]
          },
          "easter_4": {
            "title": {
              "en": "PREFACE IV OF EASTER - The restoration of the universe through the Paschal Mystery"
            },
            "content": [
              {
                "text_en": "It is truly right and just, our duty and our salvation, at all times to acclaim you, O Lord, but in this time above all to laud you yet more gloriously, when Christ our Passover has been sacrificed.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "For, with the old order destroyed, a universe cast down is renewed, and integrity of life is restored to us in Christ.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                }
              },
              {
                "text_en": "Therefore, overcome with paschal joy, every land, every people exults in your praise and even the heavenly Powers, with the angelic hosts, sing together the unending hymn of your glory, as they acclaim:",
                "__massEditorPairKeys": {
                  "text_en": "2:text"
                }
              }
            ]
          },
          "easter_5": {
            "title": {
              "en": "PREFACE V OF EASTER - Christ, Priest and Victim"
            },
            "content": [
              {
                "text_en": "It is truly right and just, our duty and our salvation, at all times to acclaim you, O Lord, but in this time above all to laud you yet more gloriously, when Christ our Passover has been sacrificed.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "By the oblation of his Body, he brought the sacrifices of old to fulfillment in the reality of the Cross and, by commending himself to you for our salvation, showed himself the Priest, the Altar, and the Lamb of sacrifice.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                }
              },
              {
                "text_en": "Therefore, overcome with paschal joy, every land, every people exults in your praise and even the heavenly Powers, with the angelic hosts, sing together the unending hymn of your glory, as they acclaim:",
                "__massEditorPairKeys": {
                  "text_en": "2:text"
                }
              }
            ]
          },
          "ascension_1": {
            "title": {
              "en": "PREFACE I OF THE ASCENSION OF THE LORD - The mystery of the Ascension"
            },
            "content": [
              {
                "text_en": "It is truly right and just, our duty and our salvation, always and everywhere to give you thanks, Lord, holy Father, almighty and eternal God, through Christ our Lord.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "For after his Resurrection he plainly appeared to all his disciples and was taken up to heaven in their sight, that he might make us sharers in his divinity.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                }
              },
              {
                "text_en": "Therefore, overcome with paschal joy, every land, every people exults in your praise and even the heavenly Powers, with the angelic hosts, sing together the unending hymn of your glory, as they acclaim:",
                "__massEditorPairKeys": {
                  "text_en": "2:text"
                }
              }
            ]
          },
          "ascension_2": {
            "title": {
              "en": "PREFACE II OF THE ASCENSION OF THE LORD - The mystery of the Ascension"
            },
            "content": [
              {
                "text_en": "It is truly right and just, our duty and our salvation, always and everywhere to give you thanks, Lord, holy Father, almighty and eternal God, through Christ our Lord.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "For the Lord Jesus, the King of glory, conqueror of sin and death, ascended today to the highest heavens, as the Angels gazed in wonder.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                }
              },
              {
                "text_en": "Mediator between God and man, judge of the world and Lord of hosts, he ascended, not to distance himself from our lowly state but that we, his members, might be confident of following where he, our Head and Founder, has gone before.",
                "__massEditorPairKeys": {
                  "text_en": "2:text"
                }
              },
              {
                "text_en": "Therefore, overcome with paschal joy, every land, every people exults in your praise and even the heavenly Powers, with the angelic hosts, sing together the unending hymn of your glory, as they acclaim:",
                "__massEditorPairKeys": {
                  "text_en": "3:text"
                }
              }
            ]
          },
          "pentecost": {
            "title": {
              "en": "PREFACE OF PENTECOST - The mystery of Pentecost"
            },
            "content": [
              {
                "text_en": "It is truly right and just, our duty and our salvation, always and everywhere to give you thanks, Lord, holy Father, almighty and eternal God.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "For, bringing your Paschal Mystery to completion, you bestowed the Holy Spirit today on those you made your adopted children by uniting them to your Only Begotten Son.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                }
              },
              {
                "text_en": "This same Spirit, as the Church came to birth, opened to all peoples the knowledge of God and brought together the many languages of the earth in profession of the one faith.",
                "__massEditorPairKeys": {
                  "text_en": "2:text"
                }
              },
              {
                "text_en": "Therefore, overcome with paschal joy, every land, every people exults in your praise and even the heavenly Powers, with the angelic hosts, sing together the unending hymn of your glory, as they acclaim:",
                "__massEditorPairKeys": {
                  "text_en": "3:text"
                }
              }
            ]
          },
          "holy_trinity": {
            "title": {
              "en": "PREFACE OF THE MOST HOLY TRINITY - The mystery of the Most Holy Trinity"
            },
            "content": [
              {
                "text_en": "It is truly right and just, our duty and our salvation, always and everywhere to give you thanks, Lord, holy Father, almighty and eternal God.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "For with your Only Begotten Son and the Holy Spirit you are one God, one Lord: not in the unity of a single person, but in a Trinity of one substance.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                }
              },
              {
                "text_en": "For what you have revealed to us of your glory we believe equally of your Son and of the Holy Spirit, so that, in the confessing of the true and eternal Godhead, you might be adored in what is proper to each Person, their unity in substance, and their equality in majesty.",
                "__massEditorPairKeys": {
                  "text_en": "2:text"
                }
              },
              {
                "text_en": "And so, with Angels and Archangels, with Thrones and Dominions, and with all the hosts and Powers of heaven, we sing the hymn of your glory, as without end we acclaim:",
                "__massEditorPairKeys": {
                  "text_en": "3:text"
                }
              }
            ]
          },
          "christ_the_king": {
            "title": {
              "en": "Preface of Christ the King"
            },
            "content": [
              {
                "text_en": "It is truly right and just, our duty and our salvation, always and everywhere to give you thanks, Lord, holy Father, almighty and eternal God.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "For you anointed your Only Begotten Son, our Lord Jesus Christ, with the oil of gladness as eternal Priest and King of all creation,",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                }
              },
              {
                "text_en": "so that, by offering himself on the altar of the Cross as a spotless sacrifice to bring us peace, he might accomplish the mysteries of human redemption and, making all created things subject to his rule, he might present to the immensity of your majesty an eternal and universal kingdom, a kingdom of truth and life, a kingdom of holiness and grace, a kingdom of justice, love and peace.",
                "__massEditorPairKeys": {
                  "text_en": "2:text"
                }
              },
              {
                "text_en": "And so, with Angels and Archangels, with Thrones and Dominions, and with all the hosts and Powers of heaven, we sing the hymn of your glory, as without end we acclaim:",
                "__massEditorPairKeys": {
                  "text_en": "3:text"
                }
              }
            ]
          },
          "transfiguration": {
            "title": {
              "en": "PREFACE OF THE TRANSFIGURATION OF THE LORD - The mystery of the Transfiguration"
            },
            "content": [
              {
                "text_en": "It is truly right and just, our duty and our salvation, always and everywhere to give you thanks, Lord, holy Father, almighty and eternal God, through Christ our Lord.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "For he revealed his glory in the presence of chosen witnesses and filled with the greatest splendor that bodily form which he shares with all humanity, that the scandal of the Cross might be removed from the hearts of his disciples and that he might show how in the Body of the whole Church is to be fulfilled what so wonderfully shone forth first in its Head.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                }
              },
              {
                "text_en": "And so, with the Powers of heaven, we worship you constantly on earth, and before your majesty without end we acclaim:",
                "__massEditorPairKeys": {
                  "text_en": "2:text"
                }
              }
            ]
          },
          "presentation_of_the_lord": {
            "title": {
              "en": "PREFACE OF THE PRESENTATION OF THE LORD - The mystery of the Presentation of the Lord"
            },
            "content": [
              {
                "text_en": "It is truly right and just, our duty and our salvation, always and everywhere to give you thanks, Lord, holy Father, almighty and eternal God.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "For your co-eternal Son was presented on this day in the Temple and revealed by the Spirit as the glory of Israel and Light of the nations.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                }
              },
              {
                "text_en": "And so, we, too, go forth, rejoicing to encounter your Salvation, and with the Angels and Saints praise you, as without end we acclaim:",
                "__massEditorPairKeys": {
                  "text_en": "2:text"
                }
              }
            ]
          },
          "eucharist_1": {
            "title": {
              "en": "PREFACE I OF THE MOST HOLY EUCHARIST - The Sacrifice and the Sacrament of Christ"
            },
            "content": [
              {
                "text_en": "It is truly right and just, our duty and our salvation, always and everywhere to give you thanks, Lord, holy Father, almighty and eternal God, through Christ our Lord.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "For he is the true and eternal Priest, who instituted the pattern of an everlasting sacrifice and was the first to offer himself as the saving Victim, commanding us to make this offering as his memorial.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                }
              },
              {
                "text_en": "As we eat his flesh that was sacrificed for us, we are made strong, and, as we drink his Blood that was poured out for us, we are washed clean.",
                "__massEditorPairKeys": {
                  "text_en": "2:text"
                }
              },
              {
                "text_en": "And so, with Angels and Archangels, with Thrones and Dominions, and with all the hosts and Powers of heaven, we sing the hymn of your glory, as without end we acclaim:",
                "__massEditorPairKeys": {
                  "text_en": "3:text"
                }
              }
            ]
          },
          "eucharist_2": {
            "title": {
              "en": "PREFACE II OF THE MOST HOLY EUCHARIST - The fruits of the Most Holy Eucharist"
            },
            "content": [
              {
                "text_en": "It is truly right and just, our duty and our salvation, always and everywhere to give you thanks, Lord, holy Father, almighty and eternal God, through Christ our Lord.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "For at the Last Supper with his Apostles, establishing for the ages to come the saving memorial of the Cross, he offered himself to you as the unblemished Lamb, the acceptable gift of perfect praise.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                }
              },
              {
                "text_en": "Nourishing your faithful by this sacred mystery, you make them holy, so that the human race, bounded by one world, may be enlightened by one faith and united by one bond of charity.",
                "__massEditorPairKeys": {
                  "text_en": "2:text"
                }
              },
              {
                "text_en": "And so, we approach the table of this wondrous Sacrament, so that, bathed in the sweetness of your grace, we may pass over to the heavenly realities here foreshadowed.",
                "__massEditorPairKeys": {
                  "text_en": "3:text"
                }
              },
              {
                "text_en": "Therefore, all creatures of heaven and earth sing a new song in adoration, and we, with all the host of Angels, cry out, and without end we acclaim:",
                "__massEditorPairKeys": {
                  "text_en": "4:text"
                }
              }
            ]
          },
          "sacred_heart": {
            "title": {
              "en": "PREFACE OF THE MOST SACRED HEART OF JESUS - The boundless charity of Christ"
            },
            "content": [
              {
                "text_en": "It is truly right and just, our duty and our salvation, always and everywhere to give you thanks, Lord, holy Father, almighty and eternal God, through Christ our Lord.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "For raised up high on the Cross, he gave himself up for us with a wonderful love and poured out blood and water from his pierced side, the wellspring of the Church's Sacraments, so that, won over to the open heart of the Savior, all might draw water joyfully from the springs of salvation.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                }
              },
              {
                "text_en": "And so, with all the Angels and Saints, we praise you, as without end we acclaim:",
                "__massEditorPairKeys": {
                  "text_en": "2:text"
                }
              }
            ]
          },
          "holy_cross": {
            "title": {
              "en": "Preface of the Triumph of the Holy Cross"
            },
            "content": [
              {
                "text_en": "It is truly right and just, our duty and our salvation, always and everywhere to give you thanks, Lord, holy Father, almighty and eternal God.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "For you placed the salvation of the human race on the wood of the Cross, so that, where death arose, life might again spring forth and the evil one, who conquered on a tree, might likewise on a tree be conquered, through Christ our Lord.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                }
              },
              {
                "text_en": "Through him the Angels praise your majesty, Dominions adore and Powers tremble before you.",
                "__massEditorPairKeys": {
                  "text_en": "2:text"
                }
              },
              {
                "text_en": "Heaven and the Virtues of heaven and the blessed Seraphim worship together with exultation.",
                "__massEditorPairKeys": {
                  "text_en": "3:text"
                }
              },
              {
                "text_en": "May our voices, we pray, join with theirs in humble praise, as we acclaim:",
                "__massEditorPairKeys": {
                  "text_en": "4:text"
                }
              }
            ]
          },
          "john_the_baptist": {
            "title": {
              "en": "PREFACE OF THE NATIVITY OF SAINT JOHN THE BAPTIST - The mission of the Precursor"
            },
            "content": [
              {
                "text_en": "It is truly right and just, our duty and our salvation, always and everywhere to give you thanks, Lord, holy Father, almighty and eternal God, through Christ our Lord.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "In his Precursor, Saint John the Baptist, we praise your great glory, for you consecrated him for a singular honor among those born of women.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                }
              },
              {
                "text_en": "His birth brought great rejoicing; even in the womb he leapt for joy at the coming of human salvation.",
                "__massEditorPairKeys": {
                  "text_en": "2:text"
                }
              },
              {
                "text_en": "He alone of all the prophets pointed out the Lamb of redemption.",
                "__massEditorPairKeys": {
                  "text_en": "3:text"
                }
              },
              {
                "text_en": "And to make holy the flowing waters, he baptized the very author of Baptism and was privileged to bear him supreme witness by the shedding of his blood.",
                "__massEditorPairKeys": {
                  "text_en": "4:text"
                }
              },
              {
                "text_en": "And so, with the Powers of heaven, we worship you constantly on earth, and before your majesty without end we acclaim:",
                "__massEditorPairKeys": {
                  "text_en": "5:text"
                }
              }
            ]
          },
          "mary_magdalene": {
            "title": {
              "en": "PREFACE OF SAINT MARY MAGDALENE - Apostle of the Apostles"
            },
            "content": []
          },
          "peter_and_paul": {
            "title": {
              "en": "PREFACE OF SAINTS PETER AND PAUL, APOSTLES"
            },
            "content": [
              {
                "text_en": "It is truly right and just, our duty and our salvation, always and everywhere to give you thanks, Lord, holy Father, almighty and eternal God.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "For by your providence the blessed Apostles Peter and Paul bring us joy: Peter, foremost in confessing the faith, Paul, its outstanding preacher, Peter, who established the early Church from the remnant of Israel, Paul, master and teacher of the Gentiles that you call.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                }
              },
              {
                "text_en": "And so, each in a different way gathered together the one family of Christ, and revered together throughout the world, they share one Martyr's crown.",
                "__massEditorPairKeys": {
                  "text_en": "2:text"
                }
              },
              {
                "text_en": "And therefore, with all the Angels and Saints, we praise you, as without end we acclaim:",
                "__massEditorPairKeys": {
                  "text_en": "3:text"
                }
              }
            ]
          },
          "saint_joseph": {
            "title": {
              "en": "PREFACE OF SAINT JOSEPH - The mission of Saint Joseph"
            },
            "content": [
              {
                "text_en": "It is truly right and just, our duty and our salvation, always and everywhere to give you thanks, Lord, holy Father, almighty and eternal God, and on the Solemnity of Saint Joseph to give you fitting praise, to glorify you and bless you.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "For this just man was given by you as spouse to the Virgin Mother of God and set as a wise and faithful servant in charge of your household to watch like a father over your Only Begotten Son, who was conceived by the overshadowing of the Holy Spirit, Lord Jesus Christ.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                }
              },
              {
                "text_en": "Through him the Angels praise your majesty, Dominions adore and Powers tremble before you.",
                "__massEditorPairKeys": {
                  "text_en": "2:text"
                }
              },
              {
                "text_en": "Heaven and the Virtues of heaven and the blessed Seraphim worship together with exultation.",
                "__massEditorPairKeys": {
                  "text_en": "3:text"
                }
              },
              {
                "text_en": "May our voices, we pray, join with theirs in humble praise, as we acclaim:",
                "__massEditorPairKeys": {
                  "text_en": "4:text"
                }
              }
            ]
          },
          "annunciation": {
            "title": {
              "en": "Preface of the Annunciation of the Lord"
            },
            "content": [
              {
                "text_en": "It is truly right and just, our duty and our salvation, always and everywhere to give you thanks, Lord, holy Father, almighty and eternal God, through Christ our Lord.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "For the Virgin Mary heard with faith that the Christ was to be born among men and for men's sake by the overshadowing power of the Holy Spirit.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                }
              },
              {
                "text_en": "Lovingly she bore him in her immaculate womb, that the promises to the children of Israel might come about and the hope of nations be accomplished beyond all telling.",
                "__massEditorPairKeys": {
                  "text_en": "2:text"
                }
              },
              {
                "text_en": "Through him the host of Angels adores your majesty and rejoices in your presence for ever.",
                "__massEditorPairKeys": {
                  "text_en": "3:text"
                }
              },
              {
                "text_en": "May our voices, we pray, join with theirs in one chorus of exultant praise, as we acclaim:",
                "__massEditorPairKeys": {
                  "text_en": "4:text"
                }
              }
            ]
          },
          "immaculate_conception": {
            "title": {
              "en": "PREFACE OF THE IMMACULATE CONCEPTION OF THE BLESSED VIRGIN MARY - The mystery of Mary and the Church"
            },
            "content": [
              {
                "text_en": "It is truly right and just, our duty and our salvation, always and everywhere to give you thanks, Lord, holy Father, almighty and eternal God.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "For you preserved the Most Blessed Virgin Mary from all stain of original sin, so that in her, endowed with the rich fullness of your grace, you might prepare a worthy Mother for your Son and signify the beginning of the Church, his beautiful Bride without spot or wrinkle.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                }
              },
              {
                "text_en": "She, the most pure Virgin, was to bring forth a Son, the innocent Lamb who would wipe away our offenses; you placed her above all others to be for your people an advocate of grace and a model of holiness.",
                "__massEditorPairKeys": {
                  "text_en": "2:text"
                }
              },
              {
                "text_en": "And so, in company with the choirs of Angels, we praise you, and with joy we proclaim:",
                "__massEditorPairKeys": {
                  "text_en": "3:text"
                }
              }
            ]
          },
          "assumption": {
            "title": {
              "en": "PREFACE OF THE ASSUMPTION OF THE BLESSED VIRGIN MARY - Mary assumed into glory"
            },
            "content": [
              {
                "text_en": "It is truly right and just, our duty and our salvation, always and everywhere to give you thanks, Lord, holy Father, almighty and eternal God, through Christ our Lord.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "For today the Virgin Mother of God was assumed into heaven as the beginning and image of your Church's coming to perfection and a sign of sure hope and comfort to your pilgrim people;",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                }
              },
              {
                "text_en": "rightly you would not allow her to see the corruption of the tomb since from her own body she marvelously brought forth your incarnate Son, the Author of all life.",
                "__massEditorPairKeys": {
                  "text_en": "2:text"
                }
              },
              {
                "text_en": "And so, in company with the choirs of Angels, we praise you, and with joy we proclaim:",
                "__massEditorPairKeys": {
                  "text_en": "3:text"
                }
              }
            ]
          },
          "all_saints": {
            "title": {
              "en": "Preface of All Saints"
            },
            "content": [
              {
                "text_en": "It is truly right and just, our duty and our salvation, always and everywhere to give you thanks, Lord, holy Father, almighty and eternal God, through Christ our Lord.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "For today by your gift we celebrate the festival of your city, the heavenly Jerusalem, our mother, where the great array of our brothers and sisters already gives you eternal praise.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                }
              },
              {
                "text_en": "Towards her, we eagerly hasten as pilgrims advancing by faith,",
                "__massEditorPairKeys": {
                  "text_en": "2:text"
                }
              },
              {
                "text_en": "rejoicing in the glory bestowed upon those exalted members of the Church through whom you give us, in our frailty, both strength and good example.",
                "__massEditorPairKeys": {
                  "text_en": "3:text"
                }
              },
              {
                "text_en": "And so, we glorify you with the multitude of Saints and Angels, as with one voice of praise we acclaim:",
                "__massEditorPairKeys": {
                  "text_en": "4:text"
                }
              }
            ]
          },
          "chrism_mass": {
            "title": {
              "en": "Preface of the Chrism Mass"
            },
            "content": [
              {
                "text_en": "It is truly right and just, our duty and our salvation, always and everywhere to give you thanks, Lord, holy Father, almighty and eternal God.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "For by the anointing of the Holy Spirit you made your Only Begotten Son High Priest of the new and eternal covenant, and by your wondrous design were pleased to decree that his one Priesthood should continue in the Church.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                }
              },
              {
                "text_en": "For Christ not only adorns with a royal priesthood the people he has made his own, but with a brother's kindness he also chooses men to become sharers in his sacred ministry through the laying on of hands.",
                "__massEditorPairKeys": {
                  "text_en": "2:text"
                }
              },
              {
                "text_en": "They are to renew in his name the sacrifice of human redemption, to set before your children the paschal banquet, to lead your holy people in charity, to nourish them with the word and strengthen them with the Sacraments.",
                "__massEditorPairKeys": {
                  "text_en": "3:text"
                }
              },
              {
                "text_en": "As they give up their lives for you and for the salvation of their brothers and sisters, they strive to be conformed to the image of Christ himself and offer you a constant witness of faith and love.",
                "__massEditorPairKeys": {
                  "text_en": "4:text"
                }
              },
              {
                "text_en": "And so, Lord, with all the Angels and Saints, we, too, give you thanks, as in exultation we acclaim:",
                "__massEditorPairKeys": {
                  "text_en": "5:text"
                }
              }
            ]
          },
          "dedication_of_a_church": {
            "title": {
              "en": "PREFACE OF THE DEDICATION OF A CHURCH - The mystery of the Church as God’s temple"
            },
            "content": [
              {
                "text_en": "It is truly right and just, our duty and our salvation, always and everywhere to give you thanks, Lord, holy Father, almighty and eternal God, through Christ our Lord.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "For in this visible house that you have let us build and where you never cease to show favor to the family on pilgrimage to you in this place, you wonderfully manifest and accomplish the mystery of your own communion with us.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                }
              },
              {
                "text_en": "Here you build up for yourself the temple that we are, and cause your Church, spread throughout the world, to grow ever more and more as the Lord's own Body, till she reaches her fullness in the vision of peace, the heavenly city of Jerusalem.",
                "__massEditorPairKeys": {
                  "text_en": "2:text"
                }
              },
              {
                "text_en": "And so, with the countless ranks of the blessed, in the temple of your glory we praise you, we bless you and proclaim your greatness, as we acclaim:",
                "__massEditorPairKeys": {
                  "text_en": "3:text"
                }
              },
              {
                "text_en": "And so, with the company of Angels and Saints, we sing the hymn of your praise, as without end we acclaim:",
                "__massEditorPairKeys": {
                  "text_en": "4:text"
                }
              }
            ]
          },
          "mary_1": {
            "title": {
              "en": "PREFACE I OF THE BLESSED VIRGIN MARY - The Motherhood of the Blessed Virgin Mary"
            },
            "content": [
              {
                "text_en": "It is truly right and just, our duty and our salvation, always and everywhere to give you thanks, Lord, holy Father, almighty and eternal God, and to praise, bless, and glorify your name on the [...] of the Blessed Virgin Mary.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "For by the overshadowing of the Holy Spirit she conceived your Only Begotten Son, and without losing the glory of virginity, brought forth into the world the eternal Light, Jesus Christ our Lord.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                }
              },
              {
                "text_en": "Through him the Angels praise your majesty, Dominions adore and Powers tremble before you.",
                "__massEditorPairKeys": {
                  "text_en": "2:text"
                }
              },
              {
                "text_en": "Heaven and the Virtues of heaven and the blessed Seraphim worship together with exultation.",
                "__massEditorPairKeys": {
                  "text_en": "3:text"
                }
              },
              {
                "text_en": "May our voices, we pray, join with theirs in humble praise, as we acclaim:",
                "__massEditorPairKeys": {
                  "text_en": "4:text"
                }
              }
            ]
          },
          "mary_2": {
            "title": {
              "en": "PREFACE II OF THE BLESSED VIRGIN MARY - The Church praises God with the words of Mary"
            },
            "content": [
              {
                "text_en": "It is truly right and just, our duty and our salvation, always and everywhere to give you thanks, Lord, holy Father, almighty and eternal God, and to praise, bless, and glorify your name on the [...] of the Blessed Virgin Mary.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "For by the overshadowing of the Holy Spirit she conceived your Only Begotten Son, and without losing the glory of virginity, brought forth into the world the eternal Light, Jesus Christ our Lord.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                }
              },
              {
                "text_en": "She, receiving your Word in her Immaculate Heart, was found worthy to conceive him in her virgin's womb and, giving birth to the Creator, she nurtured the beginnings of the Church.",
                "__massEditorPairKeys": {
                  "text_en": "2:text"
                }
              },
              {
                "text_en": "Standing beside the Cross, she received the testament of divine love and took to herself as sons and daughters all those who by the Death of Christ are born to heavenly life.",
                "__massEditorPairKeys": {
                  "text_en": "3:text"
                }
              },
              {
                "text_en": "As the Apostles awaited the Spirit you had promised, she joined her supplication to the prayers of the disciples and so became the pattern of the Church at prayer.",
                "__massEditorPairKeys": {
                  "text_en": "4:text"
                }
              },
              {
                "text_en": "Raised to the glory of heaven, she accompanies your pilgrim Church with a mother's love and watches in kindness over the Church's homeward steps, until the Lord's Day shall come in glorious splendor.",
                "__massEditorPairKeys": {
                  "text_en": "5:text"
                }
              },
              {
                "text_en": "And so, with all the Angels and Saints, we praise you, as without end we acclaim:",
                "__massEditorPairKeys": {
                  "text_en": "6:text"
                }
              }
            ]
          },
          "apostles_1": {
            "title": {
              "en": "PREFACE I OF APOSTLES - The Apostles, shepherds of God’s people"
            },
            "content": [
              {
                "text_en": "It is truly right and just, our duty and our salvation, always and everywhere to give you thanks, Lord, holy Father, almighty and eternal God.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "For you, eternal Shepherd, do not desert your flock, but through the blessed Apostles watch over it and protect it always, so that it may be governed by those you have appointed shepherds to lead it in the name of your Son.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                }
              },
              {
                "text_en": "And so, with Angels and Archangels, with Thrones and Dominions, and with all the hosts and Powers of heaven, we sing the hymn of your glory, as without end we acclaim:",
                "__massEditorPairKeys": {
                  "text_en": "2:text"
                }
              }
            ]
          },
          "apostles_2": {
            "title": {
              "en": "PREFACE II OF APOSTLES - The apostolic foundation and witness"
            },
            "content": [
              {
                "text_en": "It is truly right and just, our duty and our salvation, always and everywhere to give you thanks, Lord, holy Father, almighty and eternal God, through Christ our Lord.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "For you have built your Church to stand firm on apostolic foundations, to be a lasting sign of your holiness on earth and offer all humanity your heavenly teaching.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                }
              },
              {
                "text_en": "Therefore, now and for ages unending, with all the host of Angels, we sing to you with all our hearts, crying out:",
                "__massEditorPairKeys": {
                  "text_en": "2:text"
                }
              }
            ]
          },
          "martyrs": {
            "title": {
              "en": "PREFACE I OF HOLY MARTYRS - The sign and example of martyrdom"
            },
            "content": [
              {
                "text_en": "It is truly right and just, our duty and our salvation, always and everywhere to give you thanks, Lord, holy Father, almighty and eternal God.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "For the blood of your blessed Martyr N., poured out like Christ's to glorify your name, shows forth your marvelous works,",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                }
              },
              {
                "text_en": "by which in our weakness you perfect your power and on the feeble bestow strength to bear you witness, through Christ our Lord.",
                "__massEditorPairKeys": {
                  "text_en": "2:text"
                }
              },
              {
                "text_en": "And so, with the Powers of heaven, we worship you constantly on earth, and before your majesty without end we acclaim:",
                "__massEditorPairKeys": {
                  "text_en": "3:text"
                }
              }
            ]
          },
          "pastors": {
            "title": {
              "en": "PREFACE OF HOLY PASTORS - The presence of holy Pastors in the Church"
            },
            "content": [
              {
                "text_en": "It is truly right and just, our duty and our salvation, always and everywhere to give you thanks, Lord, holy Father, almighty and eternal God, through Christ our Lord.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "For, as on the festival of Saint N. you bid your Church rejoice, so, too, you strengthen her by the example of his holy life, teach her by his words of preaching, and keep her safe in answer to his prayers.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                }
              },
              {
                "text_en": "And so, with the company of Angels and Saints, we sing the hymn of your praise, as without end we acclaim:",
                "__massEditorPairKeys": {
                  "text_en": "2:text"
                }
              }
            ]
          },
          "virgins_and_religious": {
            "title": {
              "en": "PREFACE OF HOLY VIRGINS AND RELIGIOUS - The sign of a life consecrated to God"
            },
            "content": [
              {
                "text_en": "It is truly right and just, our duty and our salvation, always and everywhere to give you thanks, Lord, holy Father, almighty and eternal God, through Christ our Lord.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "For in the Saints who consecrated themselves to Christ for the sake of the Kingdom of Heaven, it is right to celebrate the wonders of your providence,",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                }
              },
              {
                "text_en": "by which you call human nature back to its original holiness and bring it to experience on this earth the gifts you promise in the new world to come.",
                "__massEditorPairKeys": {
                  "text_en": "2:text"
                }
              },
              {
                "text_en": "And so, with all the Angels and Saints, we praise you, as without end we acclaim:",
                "__massEditorPairKeys": {
                  "text_en": "3:text"
                }
              }
            ]
          },
          "saints_1": {
            "title": {
              "en": "PREFACE I OF SAINTS - The glory of the Saints"
            },
            "content": [
              {
                "text_en": "It is truly right and just, our duty and our salvation, always and everywhere to give you thanks, Lord, holy Father, almighty and eternal God.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "For you are praised in the company of your Saints and, in crowning their merits, you crown your own gifts.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                }
              },
              {
                "text_en": "By their way of life you offer us an example, by communion with them you give us companionship, by their intercession, sure support, so that, encouraged by so great a cloud of witnesses, we may run as victors in the race before us and win with them the imperishable crown of glory, through Christ our Lord.",
                "__massEditorPairKeys": {
                  "text_en": "2:text"
                }
              },
              {
                "text_en": "And so, with the Angels and Archangels, and with the great multitude of the Saints, we sing the hymn of your praise, as without end we acclaim:",
                "__massEditorPairKeys": {
                  "text_en": "3:text"
                }
              }
            ]
          },
          "saints_2": {
            "title": {
              "en": "PREFACE II OF SAINTS - The action of the Saints"
            },
            "content": [
              {
                "text_en": "It is truly right and just, our duty and our salvation, always and everywhere to give you thanks, Lord, holy Father, almighty and eternal God, through Christ our Lord.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "For in the marvelous confession of your Saints, you make your Church fruitful with strength ever new and offer us sure signs of your love.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                }
              },
              {
                "text_en": "And that your saving mysteries may be fulfilled, their great example lends us courage, their fervent prayers sustain us in all we do.",
                "__massEditorPairKeys": {
                  "text_en": "2:text"
                }
              },
              {
                "text_en": "And so, Lord, with all the Angels and Saints, we, too, give you thanks, as in exultation we acclaim:",
                "__massEditorPairKeys": {
                  "text_en": "3:text"
                }
              }
            ]
          },
          "angels": {
            "title": {
              "en": "Preface of Angels"
            },
            "content": [
              {
                "text_en": "It is truly right and just, our duty and our salvation, always and everywhere to give you thanks, Lord, holy Father, almighty and eternal God, and to praise you without end in your Archangels and Angels.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "For the honor we pay the angelic creatures in whom you delight redounds to your own surpassing glory, and by their great dignity and splendor you show how infinitely great you are, to be exalted above all things, through Christ our Lord.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                }
              },
              {
                "text_en": "Through him the multitude of Angels extols your majesty, and we are united with them in joyful adoration, as with one voice of praise we acclaim:",
                "__massEditorPairKeys": {
                  "text_en": "2:text"
                }
              }
            ]
          },
          "eucharistic_2": {
            "title": {
              "en": "Preface of Eucharistic Prayer II"
            },
            "content": [
              {
                "text_en": "It is truly right and just, our duty and salvation, always and everywhere to give you thanks, Father most holy, through your beloved Son, Jesus Christ,",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "your Word through whom you made all things, whom you sent as our Savior and Redeemer, incarnate by the Holy Spirit and born of the Virgin.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                }
              },
              {
                "text_en": "Fulfilling your will and gaining for you a holy people, he stretched out his hands as he endured his Passion, so as to break the bonds of death and manifest the resurrection.",
                "__massEditorPairKeys": {
                  "text_en": "2:text"
                }
              },
              {
                "text_en": "And so, with the Angels and all the Saints we declare your glory, as with one voice we acclaim:",
                "__massEditorPairKeys": {
                  "text_en": "3:text"
                }
              }
            ]
          },
          "dead_1": {
            "title": {
              "en": "PREFACE I FOR THE DEAD - The hope of resurrection in Christ"
            },
            "content": [
              {
                "text_en": "It is truly right and just, our duty and our salvation, always and everywhere to give you thanks, Lord, holy Father, almighty and eternal God, through Christ our Lord.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "In him the hope of blessed resurrection has dawned, that those saddened by the certainty of dying might be consoled by the promise of immortality to come.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                }
              },
              {
                "text_en": "Indeed for your faithful, Lord, life is changed not ended, and, when this earthly dwelling turns to dust, an eternal dwelling is made ready for them in heaven.",
                "__massEditorPairKeys": {
                  "text_en": "2:text"
                }
              },
              {
                "text_en": "And so, with Angels and Archangels, with Thrones and Dominions, and with all the hosts and Powers of heaven, we sing the hymn of your glory, as without end we acclaim:",
                "__massEditorPairKeys": {
                  "text_en": "3:text"
                }
              }
            ]
          },
          "dead_2": {
            "title": {
              "en": "PREFACE II FOR THE DEAD - Christ died so that we might live"
            },
            "content": [
              {
                "text_en": "It is truly right and just, our duty and our salvation, always and everywhere to give you thanks, Lord, holy Father, almighty and eternal God, through Christ our Lord.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "For as one alone he accepted death, so that we might all escape from dying; as one man he chose to die, so that in your sight we all might live for ever.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                }
              },
              {
                "text_en": "And so, in company with the choirs of Angels, we praise you, and with joy we proclaim:",
                "__massEditorPairKeys": {
                  "text_en": "2:text"
                }
              }
            ]
          },
          "dead_3": {
            "title": {
              "en": "PREFACE III FOR THE DEAD - Christ, the salvation and the life"
            },
            "content": [
              {
                "text_en": "It is truly right and just, our duty and our salvation, always and everywhere to give you thanks, Lord, holy Father, almighty and eternal God, through Christ our Lord.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "For he is the salvation of the world, the life of the human race, the resurrection of the dead.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                }
              },
              {
                "text_en": "Through him the host of Angels adores your majesty and rejoices in your presence for ever.",
                "__massEditorPairKeys": {
                  "text_en": "2:text"
                }
              },
              {
                "text_en": "May our voices, we pray, join with theirs in one chorus of exultant praise, as we acclaim:",
                "__massEditorPairKeys": {
                  "text_en": "3:text"
                }
              }
            ]
          },
          "dead_4": {
            "title": {
              "en": "PREFACE IV FOR THE DEAD - From earthly life to heavenly glory"
            },
            "content": [
              {
                "text_en": "It is truly right and just, our duty and our salvation, always and everywhere to give you thanks, Lord, holy Father, almighty and eternal God, through Christ our Lord.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "For it is at your summons that we come to birth, by your will that we are governed, and at your command that we return, on account of sin, to that earth from which we came.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                }
              },
              {
                "text_en": "And when you give the sign, we who have been redeemed by the Death of your Son, shall be raised up to the glory of his Resurrection.",
                "__massEditorPairKeys": {
                  "text_en": "2:text"
                }
              },
              {
                "text_en": "And so, with the company of Angels and Saints, we sing the hymn of your praise, as without end we acclaim:",
                "__massEditorPairKeys": {
                  "text_en": "3:text"
                }
              }
            ]
          },
          "dead_5": {
            "title": {
              "en": "PREFACE V FOR THE DEAD - Our resurrection through the victory of Christ"
            },
            "content": [
              {
                "text_en": "It is truly right and just, our duty and our salvation, always and everywhere to give you thanks, Lord, holy Father, almighty and eternal God.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "For even though by our own fault we perish, yet by your compassion and your grace, when seized by death according to our sins, we are resolved through Christ's victory to be with you.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                }
              },
              {
                "text_en": "For he has brought to light life and immortality, and, having overcome the sting of death, has freely shared with us the glory of his Resurrection.",
                "__massEditorPairKeys": {
                  "text_en": "2:text"
                }
              },
              {
                "text_en": "And so, with the company of Angels and Saints, we sing the hymn of your praise, as without end we acclaim:",
                "__massEditorPairKeys": {
                  "text_en": "3:text"
                }
              }
            ]
          },
          "marriage_1": {
            "title": {
              "en": "Preface of Marriage I"
            },
            "content": [
              {
                "text_en": "It is truly right and just, our duty and our salvation, always and everywhere to give you thanks, Lord, holy Father, almighty and eternal God.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "For you forged the covenant of marriage as a sweet yoke of harmony and an unbreakable bond of peace, so that the chaste and fruitful love of holy Matrimony may serve to increase the children you adopt as your own.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                }
              },
              {
                "text_en": "By your providence and grace, O Lord, you accomplish the wonder of this twofold design: that, while the birth of children brings beauty to the world, their rebirth in Baptism gives increase to the Church, through Christ our Lord.",
                "__massEditorPairKeys": {
                  "text_en": "2:text"
                }
              },
              {
                "text_en": "Through him, with the Angels and all the Saints, we sing the hymn of your praise, as without end we acclaim:",
                "__massEditorPairKeys": {
                  "text_en": "3:text"
                }
              }
            ]
          },
          "marriage_2": {
            "title": {
              "en": "Preface of Marriage II"
            },
            "content": [
              {
                "text_en": "It is truly right and just, our duty and our salvation, always and everywhere to give you thanks, Lord, holy Father, almighty and eternal God, through Christ our Lord.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "For in him you have made a new covenant with your people, so that, as you have redeemed man and woman by the mystery of Christ's Death and Resurrection, so in Christ you might make them partakers of divine nature and joint heirs with him of heavenly glory.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                }
              },
              {
                "text_en": "In him you unite man and woman in an unbreakable bond of love and peace, so that the sacrament of holy Matrimony may serve to increase the children of your household.",
                "__massEditorPairKeys": {
                  "text_en": "2:text"
                }
              },
              {
                "text_en": "And so, with the Angels and all the Saints, we praise you, as without end we acclaim:",
                "__massEditorPairKeys": {
                  "text_en": "3:text"
                }
              }
            ]
          },
          "marriage_3": {
            "title": {
              "en": "Preface of Marriage III"
            },
            "content": [
              {
                "text_en": "It is truly right and just, our duty and our salvation, always and everywhere to give you thanks, Lord, holy Father, almighty and eternal God.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "For you willed that the human race, created by the gift of your goodness, should be raised to such high dignity that in the union of husband and wife you might bestow a true image of your love.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                }
              },
              {
                "text_en": "For those you created out of love you call to the law of charity without ceasing and grant them a share in your eternal charity.",
                "__massEditorPairKeys": {
                  "text_en": "2:text"
                }
              },
              {
                "text_en": "And so, the sacrament of holy Matrimony, as the abiding sign of your own love, consecrates the love of man and woman, through Christ our Lord.",
                "__massEditorPairKeys": {
                  "text_en": "3:text"
                }
              },
              {
                "text_en": "Through him, with the Angels and all the Saints, we sing the hymn of your praise, as without end we acclaim:",
                "__massEditorPairKeys": {
                  "text_en": "4:text"
                }
              }
            ]
          },
          "holy_orders": {
            "title": {
              "en": "Preface of Holy Orders"
            },
            "content": [
              {
                "text_en": "It is truly right and just, our duty and our salvation, always and everywhere to give you thanks, Lord, holy Father, almighty and eternal God.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "For by the anointing of the Holy Spirit you made your Only Begotten Son High Priest of the new and eternal covenant, and by your wondrous design were pleased to decree that his one Priesthood should continue in the Church.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                }
              },
              {
                "text_en": "For Christ not only adorns with a royal priesthood the people he has made his own, but with a brother's kindness he also chooses men to become sharers in his sacred ministry through the laying on of hands.",
                "__massEditorPairKeys": {
                  "text_en": "2:text"
                }
              },
              {
                "text_en": "And so, Lord, with all the Angels and Saints, we, too, give you thanks, as in exultation we acclaim:",
                "__massEditorPairKeys": {
                  "text_en": "3:text"
                }
              }
            ]
          },
          "sick": {
            "title": {
              "en": "Preface of the Anointing of the Sick"
            },
            "content": [
              {
                "text_en": "It is truly right and just, our duty and our salvation, always and everywhere to give you thanks, Lord, holy Father, almighty and eternal God, through Christ our Lord.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "For you have not left us in our time of sickness, but in your varied and manifold mercies you console and aid us, so that, strengthened by the grace of Christ, we may attain salvation.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                }
              },
              {
                "text_en": "And so, with the company of Angels and Saints, we sing the hymn of your praise, as without end we acclaim:",
                "__massEditorPairKeys": {
                  "text_en": "2:text"
                }
              }
            ]
          },
          "religious_profession": {
            "title": {
              "en": "Preface of Religious Profession"
            },
            "content": [
              {
                "text_en": "It is truly right and just, our duty and our salvation, always and everywhere to give you thanks, Lord, holy Father, almighty and eternal God, through Christ our Lord.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "For in your holy ones who consecrated themselves to Christ for the sake of the Kingdom of Heaven, it is right to celebrate the wonders of your providence, by which you call human nature back to its original holiness and bring it to experience on this earth the gifts you promise in the new world to come.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                }
              },
              {
                "text_en": "And so, with all the Angels and Saints, we praise you, as without end we acclaim:",
                "__massEditorPairKeys": {
                  "text_en": "2:text"
                }
              }
            ]
          },
          "kr_proper_1": {
            "title": {
              "en": "Korean Proper Preface I: The faith of our ancestors"
            },
            "content": []
          },
          "kr_proper_2_lunar_new_year": {
            "title": {
              "en": "Korean Proper Preface II: God of creation and salvation"
            },
            "content": []
          },
          "kr_proper_3_chuseok": {
            "title": {
              "en": "Korean Proper Preface III: Salvation history and the praise of the Korean people"
            },
            "content": []
          },
          "kr_proper_4_unification": {
            "title": {
              "en": "Korean Proper Preface IV: God who brings about national reconciliation and reunification"
            },
            "content": []
          },
          "vn_martyrs": {
            "title": {
              "en": "Vietnamese Proper Preface: The Martyrs of Vietnam"
            },
            "content": []
          },
          "us_thanksgiving": {
            "title": {
              "en": "Preface for Thanksgiving Day"
            },
            "content": [
              {
                "text_en": "It is truly right and just, our duty and our salvation, always and everywhere to give you thanks, Lord, holy Father, almighty and eternal God, through Christ our Lord.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "For you have given us the earth to cultivate, and its fruits to sustain our lives.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                }
              },
              {
                "text_en": "You have formed us in your own image and made us a diverse human family, united in your love.",
                "__massEditorPairKeys": {
                  "text_en": "2:text"
                }
              },
              {
                "text_en": "And so, with the Angels and all the Saints, we declare your glory, as with one voice we acclaim:",
                "__massEditorPairKeys": {
                  "text_en": "3:text"
                }
              }
            ]
          },
          "us_independence": {
            "title": {
              "en": "Preface for Independence Day"
            },
            "content": [
              {
                "text_en": "It is truly right and just, our duty and our salvation, always and everywhere to give you thanks, Lord, holy Father, almighty and eternal God, through Christ our Lord.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "He spoke to us a message of peace and taught us to live as brothers and sisters.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                }
              },
              {
                "text_en": "His message took form in the vision of our founding fathers as they fashioned a nation where we might live as one.",
                "__massEditorPairKeys": {
                  "text_en": "2:text"
                }
              },
              {
                "text_en": "His message lives on in our midst as our task for today and a promise for tomorrow.",
                "__massEditorPairKeys": {
                  "text_en": "3:text"
                }
              },
              {
                "text_en": "And so, with hearts full of love, we join the angels today and every day of our lives, to sing your glory as we acclaim:",
                "__massEditorPairKeys": {
                  "text_en": "4:text"
                }
              }
            ]
          },
          "us_guadalupe": {
            "title": {
              "en": "Preface of Our Lady of Guadalupe"
            },
            "content": [
              {
                "text_en": "It is truly right and just, our duty and our salvation, always and everywhere to give you thanks, Lord, holy Father, almighty and eternal God, through Christ our Lord.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "For you have given to your Church the Blessed Virgin Mary, to be the loving Mother of all the peoples of this continent.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                }
              },
              {
                "text_en": "She opened her arms to Saint Juan Diego, and continues to offer her motherly comfort to all who call upon her.",
                "__massEditorPairKeys": {
                  "text_en": "2:text"
                }
              },
              {
                "text_en": "And so, with all the Angels and Saints, we praise you, as without end we acclaim:",
                "__massEditorPairKeys": {
                  "text_en": "3:text"
                }
              }
            ]
          },
          "jp_26_martyrs": {
            "title": {
              "en": "Japanese Proper Preface: The Twenty-Six Martyrs of Japan"
            },
            "content": []
          },
          "jp_discovery_of_christians": {
            "title": {
              "en": "Japanese Proper Preface: Our Lady and the Discovery of the Hidden Christians"
            },
            "content": []
          }
        },
        "sanctus": [
          {
            "text_en": "Holy, Holy,",
            "__massEditorPairKeys": {
              "text_en": "0:text"
            },
            "sp_en": "ALL"
          },
          {
            "text_en": "Holy Lord God of hosts.",
            "__massEditorPairKeys": {
              "text_en": "1:text"
            }
          },
          {
            "text_en": "Heaven and earth are full of your glory.",
            "__massEditorPairKeys": {
              "text_en": "2:text"
            }
          },
          {
            "text_en": "Hosanna in the highest.",
            "__massEditorPairKeys": {
              "text_en": "3:text"
            }
          },
          {
            "text_en": "Blessed is he who comes in the name of the Lord.",
            "__massEditorPairKeys": {
              "text_en": "4:text"
            }
          },
          {
            "text_en": "Hosanna in the highest.",
            "__massEditorPairKeys": {
              "text_en": "5:text"
            }
          }
        ],
        "forms": {
          "1": [
            {
              "text_en": "To you, therefore, most merciful Father",
              "__massEditorPairKeys": {
                "text_en": "canon:te_igitur:0:text"
              },
              "sp_en": "P."
            },
            {
              "text_en": "we make humble prayer and petition through Jesus Christ, your Son, our Lord:",
              "__massEditorPairKeys": {
                "text_en": "canon:te_igitur:1:text"
              }
            },
            {
              "text_en": "that you accept and bless ✠ these gifts, these offerings,",
              "__massEditorPairKeys": {
                "text_en": "canon:te_igitur:2:text"
              }
            },
            {
              "text_en": "these holy and unblemished sacrifices,",
              "__massEditorPairKeys": {
                "text_en": "canon:te_igitur:3:text"
              }
            },
            {
              "text_en": "which we offer you firstly for your holy catholic Church.",
              "__massEditorPairKeys": {
                "text_en": "canon:te_igitur:4:text"
              }
            },
            {
              "text_en": "Be pleased to grant her peace,",
              "__massEditorPairKeys": {
                "text_en": "canon:te_igitur:5:text"
              }
            },
            {
              "text_en": "to guard, unite and govern her throughout the whole world,",
              "__massEditorPairKeys": {
                "text_en": "canon:te_igitur:6:text"
              }
            },
            {
              "text_en": "together with your servant [Pope Name] our Pope",
              "__massEditorPairKeys": {
                "text_en": "canon:te_igitur:7:text"
              }
            },
            {
              "text_en": "and [Bishop Name] our Bishop, (and Auxiliary Bishops,)",
              "__massEditorPairKeys": {
                "text_en": "canon:te_igitur:8:text"
              }
            },
            {
              "text_en": "and all those who, holding to the truth,",
              "__massEditorPairKeys": {
                "text_en": "canon:te_igitur:9:text"
              }
            },
            {
              "text_en": "hand on the catholic and apostolic faith.",
              "__massEditorPairKeys": {
                "text_en": "canon:te_igitur:10:text"
              }
            },
            {
              "text_en": "Remember, Lord, your servants [Person Name]. and [the Other Person Name].",
              "__massEditorPairKeys": {
                "text_en": "canon:living:0:text"
              },
              "sp_en": "P."
            },
            {
              "text_en": "and all gathered here,",
              "__massEditorPairKeys": {
                "text_en": "canon:living:1:text"
              }
            },
            {
              "text_en": "whose faith and devotion are known to you.",
              "__massEditorPairKeys": {
                "text_en": "canon:living:2:text"
              }
            },
            {
              "text_en": "For them, we offer you this sacrifice of praise",
              "__massEditorPairKeys": {
                "text_en": "canon:living:3:text"
              }
            },
            {
              "text_en": "or they offer it for themselves and all who are dear to them,",
              "__massEditorPairKeys": {
                "text_en": "canon:living:4:text"
              }
            },
            {
              "text_en": "for the redemption of their souls,",
              "__massEditorPairKeys": {
                "text_en": "canon:living:5:text"
              }
            },
            {
              "text_en": "in hope of health and well-being and paying their homage to you,",
              "__massEditorPairKeys": {
                "text_en": "canon:living:6:text"
              }
            },
            {
              "text_en": "the eternal God, living and true.",
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
                      "text_en": "In communion with those whose memory we venerate,",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:0:text"
                      },
                      "sp_en": "P."
                    },
                    {
                      "text_en": "especially the glorious ever-Virgin Mary",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:1:text"
                      }
                    },
                    {
                      "text_en": "Mother of our God and Lord, Jesus Christ,",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:2:text"
                      }
                    },
                    {
                      "text_en": "and blessed Joseph, her Spouse,",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:3:text"
                      }
                    },
                    {
                      "text_en": "your blessed Apostles and Martyrs,",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:4:text"
                      }
                    },
                    {
                      "text_en": "Peter and Paul, Andrew,",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:5:text"
                      }
                    },
                    {
                      "text_en": "(James, John, Thomas, James, Philip,",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:6:text"
                      }
                    },
                    {
                      "text_en": "Bartholomew, Matthew,",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:7:text"
                      }
                    },
                    {
                      "text_en": "Simon and Jude:",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:8:text"
                      }
                    },
                    {
                      "text_en": "Linus, Cletus, Clement, Sixtus,",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:9:text"
                      }
                    },
                    {
                      "text_en": "Cornelius, Cyprian, Lawrence, Chrysogonus,",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:10:text"
                      }
                    },
                    {
                      "text_en": "John and Paul, Cosmas and Damian)",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:11:text"
                      }
                    },
                    {
                      "text_en": "and all your Saints:",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:12:text"
                      }
                    },
                    {
                      "text_en": "we ask that through their merits and prayers,",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:13:text"
                      }
                    },
                    {
                      "text_en": "in all things we may be defended",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:14:text"
                      }
                    },
                    {
                      "text_en": "by your protecting help.",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:15:text"
                      }
                    },
                    {
                      "text_en": "(Through Christ our Lord.",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:16:text"
                      }
                    },
                    {
                      "text_en": "Amen.)",
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
                      "text_en": "Celebrating the most sacred night (day)",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:0:text"
                      },
                      "sp_en": "P."
                    },
                    {
                      "text_en": "when blessed Mary the immaculate Virgin",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:1:text"
                      }
                    },
                    {
                      "text_en": "brought forth the Savior for this world,",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:2:text"
                      }
                    },
                    {
                      "text_en": "and in communion with those whose memory we venerate,",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:3:text"
                      }
                    },
                    {
                      "text_en": "especially the glorious ever-Virgin Mary",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:4:text"
                      }
                    },
                    {
                      "text_en": "Mother of our God and Lord, Jesus Christ,",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:5:text"
                      }
                    },
                    {
                      "text_en": "and blessed Joseph, her Spouse,",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:6:text"
                      }
                    },
                    {
                      "text_en": "your blessed Apostles and Martyrs,",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:7:text"
                      }
                    },
                    {
                      "text_en": "Peter and Paul, Andrew,",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:8:text"
                      }
                    },
                    {
                      "text_en": "(James, John, Thomas, James, Philip,",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:9:text"
                      }
                    },
                    {
                      "text_en": "Bartholomew, Matthew,",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:10:text"
                      }
                    },
                    {
                      "text_en": "Simon and Jude:",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:11:text"
                      }
                    },
                    {
                      "text_en": "Linus, Cletus, Clement, Sixtus,",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:12:text"
                      }
                    },
                    {
                      "text_en": "Cornelius, Cyprian, Lawrence, Chrysogonus,",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:13:text"
                      }
                    },
                    {
                      "text_en": "John and Paul, Cosmas and Damian)",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:14:text"
                      }
                    },
                    {
                      "text_en": "and all your Saints:",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:15:text"
                      }
                    },
                    {
                      "text_en": "we ask that through their merits and prayers,",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:16:text"
                      }
                    },
                    {
                      "text_en": "in all things we may be defended",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:17:text"
                      }
                    },
                    {
                      "text_en": "by your protecting help.",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:18:text"
                      }
                    },
                    {
                      "text_en": "(Through Christ our Lord.",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:19:text"
                      }
                    },
                    {
                      "text_en": "Amen.)",
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
                      "text_en": "Celebrating the most sacred day",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:0:text"
                      },
                      "sp_en": "P."
                    },
                    {
                      "text_en": "on which your Only Begotten Son,",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:1:text"
                      }
                    },
                    {
                      "text_en": "eternal with you in your glory,",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:2:text"
                      }
                    },
                    {
                      "text_en": "appeared in a human body, truly sharing our flesh,",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:3:text"
                      }
                    },
                    {
                      "text_en": "and in communion with those whose memory we venerate,",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:4:text"
                      }
                    },
                    {
                      "text_en": "especially the glorious ever-Virgin Mary",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:5:text"
                      }
                    },
                    {
                      "text_en": "Mother of our God and Lord, Jesus Christ,",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:6:text"
                      }
                    },
                    {
                      "text_en": "and blessed Joseph, her Spouse,",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:7:text"
                      }
                    },
                    {
                      "text_en": "your blessed Apostles and Martyrs,",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:8:text"
                      }
                    },
                    {
                      "text_en": "Peter and Paul, Andrew,",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:9:text"
                      }
                    },
                    {
                      "text_en": "(James, John, Thomas, James, Philip,",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:10:text"
                      }
                    },
                    {
                      "text_en": "Bartholomew, Matthew,",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:11:text"
                      }
                    },
                    {
                      "text_en": "Simon and Jude:",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:12:text"
                      }
                    },
                    {
                      "text_en": "Linus, Cletus, Clement, Sixtus,",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:13:text"
                      }
                    },
                    {
                      "text_en": "Cornelius, Cyprian, Lawrence, Chrysogonus,",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:14:text"
                      }
                    },
                    {
                      "text_en": "John and Paul, Cosmas and Damian)",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:15:text"
                      }
                    },
                    {
                      "text_en": "and all your Saints:",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:16:text"
                      }
                    },
                    {
                      "text_en": "we ask that through their merits and prayers,",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:17:text"
                      }
                    },
                    {
                      "text_en": "in all things we may be defended",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:18:text"
                      }
                    },
                    {
                      "text_en": "by your protecting help.",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:19:text"
                      }
                    },
                    {
                      "text_en": "(Through Christ our Lord.",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:20:text"
                      }
                    },
                    {
                      "text_en": "Amen.)",
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
                      "text_en": "Celebrating the most sacred night (day)",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:0:text"
                      },
                      "sp_en": "P."
                    },
                    {
                      "text_en": "of the Resurrection of our Lord Jesus Christ in the flesh,",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:1:text"
                      }
                    },
                    {
                      "text_en": "and in communion with those whose memory we venerate,",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:2:text"
                      }
                    },
                    {
                      "text_en": "especially the glorious ever-Virgin Mary",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:3:text"
                      }
                    },
                    {
                      "text_en": "Mother of our God and Lord, Jesus Christ,",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:4:text"
                      }
                    },
                    {
                      "text_en": "and blessed Joseph, her Spouse,",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:5:text"
                      }
                    },
                    {
                      "text_en": "your blessed Apostles and Martyrs,",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:6:text"
                      }
                    },
                    {
                      "text_en": "Peter and Paul, Andrew,",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:7:text"
                      }
                    },
                    {
                      "text_en": "(James, John, Thomas, James, Philip,",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:8:text"
                      }
                    },
                    {
                      "text_en": "Bartholomew, Matthew,",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:9:text"
                      }
                    },
                    {
                      "text_en": "Simon and Jude:",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:10:text"
                      }
                    },
                    {
                      "text_en": "Linus, Cletus, Clement, Sixtus,",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:11:text"
                      }
                    },
                    {
                      "text_en": "Cornelius, Cyprian, Lawrence, Chrysogonus,",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:12:text"
                      }
                    },
                    {
                      "text_en": "John and Paul, Cosmas and Damian)",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:13:text"
                      }
                    },
                    {
                      "text_en": "and all your Saints:",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:14:text"
                      }
                    },
                    {
                      "text_en": "we ask that through their merits and prayers,",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:15:text"
                      }
                    },
                    {
                      "text_en": "in all things we may be defended",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:16:text"
                      }
                    },
                    {
                      "text_en": "by your protecting help.",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:17:text"
                      }
                    },
                    {
                      "text_en": "(Through Christ our Lord.",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:18:text"
                      }
                    },
                    {
                      "text_en": "Amen.)",
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
                      "text_en": "Celebrating the most sacred day",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:0:text"
                      },
                      "sp_en": "P."
                    },
                    {
                      "text_en": "on which your Only Begotten Son, our Lord,",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:1:text"
                      }
                    },
                    {
                      "text_en": "placed at the right hand of your glory",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:2:text"
                      }
                    },
                    {
                      "text_en": "our weak human nature,",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:3:text"
                      }
                    },
                    {
                      "text_en": "which he had united to himself,",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:4:text"
                      }
                    },
                    {
                      "text_en": "and in communion with those whose memory we venerate,",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:5:text"
                      }
                    },
                    {
                      "text_en": "especially the glorious ever-Virgin Mary",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:6:text"
                      }
                    },
                    {
                      "text_en": "Mother of our God and Lord, Jesus Christ,",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:7:text"
                      }
                    },
                    {
                      "text_en": "and blessed Joseph, her Spouse,",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:8:text"
                      }
                    },
                    {
                      "text_en": "your blessed Apostles and Martyrs,",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:9:text"
                      }
                    },
                    {
                      "text_en": "Peter and Paul, Andrew,",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:10:text"
                      }
                    },
                    {
                      "text_en": "(James, John, Thomas, James, Philip,",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:11:text"
                      }
                    },
                    {
                      "text_en": "Bartholomew, Matthew,",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:12:text"
                      }
                    },
                    {
                      "text_en": "Simon and Jude:",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:13:text"
                      }
                    },
                    {
                      "text_en": "Linus, Cletus, Clement, Sixtus,",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:14:text"
                      }
                    },
                    {
                      "text_en": "Cornelius, Cyprian, Lawrence, Chrysogonus,",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:15:text"
                      }
                    },
                    {
                      "text_en": "John and Paul, Cosmas and Damian)",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:16:text"
                      }
                    },
                    {
                      "text_en": "and all your Saints:",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:17:text"
                      }
                    },
                    {
                      "text_en": "we ask that through their merits and prayers,",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:18:text"
                      }
                    },
                    {
                      "text_en": "in all things we may be defended",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:19:text"
                      }
                    },
                    {
                      "text_en": "by your protecting help.",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:20:text"
                      }
                    },
                    {
                      "text_en": "(Through Christ our Lord.",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:21:text"
                      }
                    },
                    {
                      "text_en": "Amen.)",
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
                      "text_en": "Celebrating the most sacred day of Pentecost,",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:0:text"
                      },
                      "sp_en": "P."
                    },
                    {
                      "text_en": "on which the Holy Spirit",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:1:text"
                      }
                    },
                    {
                      "text_en": "appeared to the Apostles in tongues of fire,",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:2:text"
                      }
                    },
                    {
                      "text_en": "and in communion with those whose memory we venerate,",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:3:text"
                      }
                    },
                    {
                      "text_en": "especially the glorious ever-Virgin Mary",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:4:text"
                      }
                    },
                    {
                      "text_en": "Mother of our God and Lord, Jesus Christ,",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:5:text"
                      }
                    },
                    {
                      "text_en": "and blessed Joseph, her Spouse,",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:6:text"
                      }
                    },
                    {
                      "text_en": "your blessed Apostles and Martyrs,",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:7:text"
                      }
                    },
                    {
                      "text_en": "Peter and Paul, Andrew,",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:8:text"
                      }
                    },
                    {
                      "text_en": "(James, John, Thomas, James, Philip,",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:9:text"
                      }
                    },
                    {
                      "text_en": "Bartholomew, Matthew,",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:10:text"
                      }
                    },
                    {
                      "text_en": "Simon and Jude:",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:11:text"
                      }
                    },
                    {
                      "text_en": "Linus, Cletus, Clement, Sixtus,",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:12:text"
                      }
                    },
                    {
                      "text_en": "Cornelius, Cyprian, Lawrence, Chrysogonus,",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:13:text"
                      }
                    },
                    {
                      "text_en": "John and Paul, Cosmas and Damian)",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:14:text"
                      }
                    },
                    {
                      "text_en": "and all your Saints:",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:15:text"
                      }
                    },
                    {
                      "text_en": "we ask that through their merits and prayers,",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:16:text"
                      }
                    },
                    {
                      "text_en": "in all things we may be defended",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:17:text"
                      }
                    },
                    {
                      "text_en": "by your protecting help.",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:18:text"
                      }
                    },
                    {
                      "text_en": "(Through Christ our Lord.",
                      "__massEditorPairKeys": {
                        "text_en": "canon:communicantes:19:text"
                      }
                    },
                    {
                      "text_en": "Amen.)",
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
                      "text_en": "Therefore, Lord, we pray:",
                      "__massEditorPairKeys": {
                        "text_en": "canon:hanc_igitur:0:text"
                      },
                      "sp_en": "P."
                    },
                    {
                      "text_en": "graciously accept this oblation of our service,",
                      "__massEditorPairKeys": {
                        "text_en": "canon:hanc_igitur:1:text"
                      }
                    },
                    {
                      "text_en": "that of your whole family;",
                      "__massEditorPairKeys": {
                        "text_en": "canon:hanc_igitur:2:text"
                      }
                    },
                    {
                      "text_en": "order our days in your peace,",
                      "__massEditorPairKeys": {
                        "text_en": "canon:hanc_igitur:3:text"
                      }
                    },
                    {
                      "text_en": "and command that we be delivered from eternal damnation",
                      "__massEditorPairKeys": {
                        "text_en": "canon:hanc_igitur:4:text"
                      }
                    },
                    {
                      "text_en": "and counted among the flock of those you have chosen.",
                      "__massEditorPairKeys": {
                        "text_en": "canon:hanc_igitur:5:text"
                      }
                    },
                    {
                      "text_en": "(Through Christ our Lord.",
                      "__massEditorPairKeys": {
                        "text_en": "canon:hanc_igitur:6:text"
                      }
                    },
                    {
                      "text_en": "Amen.)",
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
                      "text_en": "Therefore, Lord, we pray:",
                      "__massEditorPairKeys": {
                        "text_en": "canon:hanc_igitur:0:text"
                      },
                      "sp_en": "P."
                    },
                    {
                      "text_en": "graciously accept this oblation of our service,",
                      "__massEditorPairKeys": {
                        "text_en": "canon:hanc_igitur:1:text"
                      }
                    },
                    {
                      "text_en": "that of your whole family;",
                      "__massEditorPairKeys": {
                        "text_en": "canon:hanc_igitur:2:text"
                      }
                    },
                    {
                      "text_en": "order our days in your peace,",
                      "__massEditorPairKeys": {
                        "text_en": "canon:hanc_igitur:3:text"
                      }
                    },
                    {
                      "text_en": "and command that we be delivered from eternal damnation",
                      "__massEditorPairKeys": {
                        "text_en": "canon:hanc_igitur:4:text"
                      }
                    },
                    {
                      "text_en": "and counted among the flock of those you have chosen.",
                      "__massEditorPairKeys": {
                        "text_en": "canon:hanc_igitur:5:text"
                      }
                    },
                    {
                      "text_en": "(Through Christ our Lord.",
                      "__massEditorPairKeys": {
                        "text_en": "canon:hanc_igitur:6:text"
                      }
                    },
                    {
                      "text_en": "Amen.)",
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
                      "text_en": "Therefore, Lord, we pray:",
                      "__massEditorPairKeys": {
                        "text_en": "canon:hanc_igitur:0:text"
                      },
                      "sp_en": "P."
                    },
                    {
                      "text_en": "graciously accept this oblation of our service,",
                      "__massEditorPairKeys": {
                        "text_en": "canon:hanc_igitur:1:text"
                      }
                    },
                    {
                      "text_en": "that of your whole family;",
                      "__massEditorPairKeys": {
                        "text_en": "canon:hanc_igitur:2:text"
                      }
                    },
                    {
                      "text_en": "order our days in your peace,",
                      "__massEditorPairKeys": {
                        "text_en": "canon:hanc_igitur:3:text"
                      }
                    },
                    {
                      "text_en": "and command that we be delivered from eternal damnation",
                      "__massEditorPairKeys": {
                        "text_en": "canon:hanc_igitur:4:text"
                      }
                    },
                    {
                      "text_en": "and counted among the flock of those you have chosen.",
                      "__massEditorPairKeys": {
                        "text_en": "canon:hanc_igitur:5:text"
                      }
                    },
                    {
                      "text_en": "(Through Christ our Lord.",
                      "__massEditorPairKeys": {
                        "text_en": "canon:hanc_igitur:6:text"
                      }
                    },
                    {
                      "text_en": "Amen.)",
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
                      "text_en": "Therefore, Lord, we pray:",
                      "__massEditorPairKeys": {
                        "text_en": "canon:hanc_igitur:0:text"
                      },
                      "sp_en": "P."
                    },
                    {
                      "text_en": "graciously accept this oblation of our service,",
                      "__massEditorPairKeys": {
                        "text_en": "canon:hanc_igitur:1:text"
                      }
                    },
                    {
                      "text_en": "that of your whole family,",
                      "__massEditorPairKeys": {
                        "text_en": "canon:hanc_igitur:2:text"
                      }
                    },
                    {
                      "text_en": "which we make to you",
                      "__massEditorPairKeys": {
                        "text_en": "canon:hanc_igitur:3:text"
                      }
                    },
                    {
                      "text_en": "also for those to whom you have been pleased to give",
                      "__massEditorPairKeys": {
                        "text_en": "canon:hanc_igitur:4:text"
                      }
                    },
                    {
                      "text_en": "the new birth of water and the Holy Spirit,",
                      "__massEditorPairKeys": {
                        "text_en": "canon:hanc_igitur:5:text"
                      }
                    },
                    {
                      "text_en": "granting them forgiveness of all their sins:",
                      "__massEditorPairKeys": {
                        "text_en": "canon:hanc_igitur:6:text"
                      }
                    },
                    {
                      "text_en": "order our days in your peace,",
                      "__massEditorPairKeys": {
                        "text_en": "canon:hanc_igitur:7:text"
                      }
                    },
                    {
                      "text_en": "and command that we be delivered from eternal damnation",
                      "__massEditorPairKeys": {
                        "text_en": "canon:hanc_igitur:8:text"
                      }
                    },
                    {
                      "text_en": "and counted among the flock of those you have chosen.",
                      "__massEditorPairKeys": {
                        "text_en": "canon:hanc_igitur:9:text"
                      }
                    },
                    {
                      "text_en": "(Through Christ our Lord.",
                      "__massEditorPairKeys": {
                        "text_en": "canon:hanc_igitur:10:text"
                      }
                    },
                    {
                      "text_en": "Amen.)",
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
                      "text_en": "Therefore, Lord, we pray:",
                      "__massEditorPairKeys": {
                        "text_en": "canon:hanc_igitur:0:text"
                      },
                      "sp_en": "P."
                    },
                    {
                      "text_en": "graciously accept this oblation of our service,",
                      "__massEditorPairKeys": {
                        "text_en": "canon:hanc_igitur:1:text"
                      }
                    },
                    {
                      "text_en": "that of your whole family;",
                      "__massEditorPairKeys": {
                        "text_en": "canon:hanc_igitur:2:text"
                      }
                    },
                    {
                      "text_en": "order our days in your peace,",
                      "__massEditorPairKeys": {
                        "text_en": "canon:hanc_igitur:3:text"
                      }
                    },
                    {
                      "text_en": "and command that we be delivered from eternal damnation",
                      "__massEditorPairKeys": {
                        "text_en": "canon:hanc_igitur:4:text"
                      }
                    },
                    {
                      "text_en": "and counted among the flock of those you have chosen.",
                      "__massEditorPairKeys": {
                        "text_en": "canon:hanc_igitur:5:text"
                      }
                    },
                    {
                      "text_en": "(Through Christ our Lord.",
                      "__massEditorPairKeys": {
                        "text_en": "canon:hanc_igitur:6:text"
                      }
                    },
                    {
                      "text_en": "Amen.)",
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
                      "text_en": "Therefore, Lord, we pray:",
                      "__massEditorPairKeys": {
                        "text_en": "canon:hanc_igitur:0:text"
                      },
                      "sp_en": "P."
                    },
                    {
                      "text_en": "graciously accept this oblation of our service,",
                      "__massEditorPairKeys": {
                        "text_en": "canon:hanc_igitur:1:text"
                      }
                    },
                    {
                      "text_en": "that of your whole family;",
                      "__massEditorPairKeys": {
                        "text_en": "canon:hanc_igitur:2:text"
                      }
                    },
                    {
                      "text_en": "order our days in your peace,",
                      "__massEditorPairKeys": {
                        "text_en": "canon:hanc_igitur:3:text"
                      }
                    },
                    {
                      "text_en": "and command that we be delivered from eternal damnation",
                      "__massEditorPairKeys": {
                        "text_en": "canon:hanc_igitur:4:text"
                      }
                    },
                    {
                      "text_en": "and counted among the flock of those you have chosen.",
                      "__massEditorPairKeys": {
                        "text_en": "canon:hanc_igitur:5:text"
                      }
                    },
                    {
                      "text_en": "(Through Christ our Lord.",
                      "__massEditorPairKeys": {
                        "text_en": "canon:hanc_igitur:6:text"
                      }
                    },
                    {
                      "text_en": "Amen.)",
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
              "text_en": "Be pleased, O God, we pray,",
              "__massEditorPairKeys": {
                "text_en": "canon:quam_oblationem:0:text"
              },
              "sp_en": "P."
            },
            {
              "text_en": "to bless, acknowledge, and approve this offering in every respect;",
              "__massEditorPairKeys": {
                "text_en": "canon:quam_oblationem:1:text"
              }
            },
            {
              "text_en": "make it spiritual and acceptable,",
              "__massEditorPairKeys": {
                "text_en": "canon:quam_oblationem:2:text"
              }
            },
            {
              "text_en": "so that it may become for us",
              "__massEditorPairKeys": {
                "text_en": "canon:quam_oblationem:3:text"
              }
            },
            {
              "text_en": "the Body and Blood of your most beloved Son, our Lord Jesus Christ.",
              "__massEditorPairKeys": {
                "text_en": "canon:quam_oblationem:4:text"
              }
            },
            {
              "text_en": "On the day before he was to suffer,",
              "__massEditorPairKeys": {
                "text_en": "canon:bread:0:text"
              }
            },
            {
              "text_en": "he took bread in his holy and venerable hands,",
              "__massEditorPairKeys": {
                "text_en": "canon:bread:1:text"
              }
            },
            {
              "rubric_en": "He raises his eyes.",
              "__massEditorPairKeys": {
                "rubric_en": "canon:bread:2:rubric"
              },
              "rubricInset_en": true
            },
            {
              "text_en": "and with eyes raised to heaven",
              "__massEditorPairKeys": {
                "text_en": "canon:bread:3:text"
              }
            },
            {
              "text_en": "to you, O God, his almighty Father,",
              "__massEditorPairKeys": {
                "text_en": "canon:bread:4:text"
              }
            },
            {
              "text_en": "giving you thanks he said the blessing, broke the bread",
              "__massEditorPairKeys": {
                "text_en": "canon:bread:5:text"
              }
            },
            {
              "text_en": "and gave it to his disciples, saying:",
              "__massEditorPairKeys": {
                "text_en": "canon:bread:6:text"
              }
            },
            {
              "text_en": "<B>TAKE THIS, ALL OF YOU, AND EAT OF IT,</b>",
              "__massEditorPairKeys": {
                "text_en": "canon:bread:7:text"
              }
            },
            {
              "text_en": "<b>FOR THIS IS MY BODY,</b>",
              "__massEditorPairKeys": {
                "text_en": "canon:bread:8:text"
              }
            },
            {
              "text_en": "<b>WHICH WILL BE GIVEN UP FOR YOU.</b>",
              "__massEditorPairKeys": {
                "text_en": "canon:bread:9:text"
              }
            },
            {
              "rubric_en": "After gazing at the consecrated Host shown by the priest,",
              "__massEditorPairKeys": {
                "rubric_en": "canon:bread:10:rubric"
              },
              "rubricInset_en": true
            },
            {
              "rubric_en": "all genuflect (or bow deeply) when the priest places it on the paten.",
              "__massEditorPairKeys": {
                "rubric_en": "canon:bread:11:rubric"
              },
              "rubricInset_en": true
            },
            {
              "text_en": "In a similar way, when supper was ended,",
              "__massEditorPairKeys": {
                "text_en": "canon:cup:0:text"
              },
              "sp_en": "P."
            },
            {
              "text_en": "he took this precious chalice",
              "__massEditorPairKeys": {
                "text_en": "canon:cup:1:text"
              }
            },
            {
              "text_en": "in his holy and venerable hands,",
              "__massEditorPairKeys": {
                "text_en": "canon:cup:2:text"
              }
            },
            {
              "text_en": "and once more giving you thanks, he said the blessing",
              "__massEditorPairKeys": {
                "text_en": "canon:cup:3:text"
              }
            },
            {
              "text_en": "and gave the chalice to his disciples, saying:",
              "__massEditorPairKeys": {
                "text_en": "canon:cup:4:text"
              }
            },
            {
              "text_en": "<b>TAKE THIS, ALL OF YOU, AND DRINK FROM IT,</b>",
              "__massEditorPairKeys": {
                "text_en": "canon:cup:5:text"
              }
            },
            {
              "text_en": "FOR THIS IS THE CHALICE OF MY BLOOD,",
              "__massEditorPairKeys": {
                "text_en": "canon:cup:6:text"
              }
            },
            {
              "text_en": "THE BLOOD OF THE NEW AND ETERNAL COVENANT,",
              "__massEditorPairKeys": {
                "text_en": "canon:cup:7:text"
              }
            },
            {
              "text_en": "<B>WHICH WILL BE POURED OUT FOR YOU AND FOR MANY</B>",
              "__massEditorPairKeys": {
                "text_en": "canon:cup:8:text"
              }
            },
            {
              "text_en": "<b>FOR THE FORGIVENESS OF SINS.</b>",
              "__massEditorPairKeys": {
                "text_en": "canon:cup:9:text"
              }
            },
            {
              "text_en": "<b>DO THIS IN MEMORY OF ME.</b>",
              "__massEditorPairKeys": {
                "text_en": "canon:cup:10:text"
              }
            },
            {
              "rubric_en": "After gazing at the chalice shown by the priest, all genuflect (or bow deeply) when he places it on the corporal.",
              "__massEditorPairKeys": {
                "rubric_en": "canon:cup:11:rubric"
              },
              "rubricInset_en": true
            },
            {
              "text_en": "The mystery of faith.",
              "__massEditorPairKeys": {
                "text_en": "canon:mystery_invitation:0:text"
              },
              "sp_en": "P."
            },
            {
              "text_en": "We proclaim your Death, O Lord,",
              "__massEditorPairKeys": {
                "text_en": "canon:mystery_a:0:text"
              },
              "sp_en": "ALL"
            },
            {
              "text_en": "and profess your Resurrection",
              "__massEditorPairKeys": {
                "text_en": "canon:mystery_a:1:text"
              }
            },
            {
              "text_en": "until you come again.",
              "__massEditorPairKeys": {
                "text_en": "canon:mystery_a:2:text"
              }
            },
            {
              "rubric_en": "Or: ",
              "__massEditorPairKeys": {
                "rubric_en": "canon:mystery_b:0:rubric"
              },
              "rubricInset_en": true
            },
            {
              "text_en": "When we eat this Bread and drink this Cup,",
              "__massEditorPairKeys": {
                "text_en": "canon:mystery_b:0:text"
              }
            },
            {
              "text_en": "we proclaim your Death, O Lord,",
              "__massEditorPairKeys": {
                "text_en": "canon:mystery_b:1:text"
              }
            },
            {
              "text_en": "until you come again.",
              "__massEditorPairKeys": {
                "text_en": "canon:mystery_b:2:text"
              }
            },
            {
              "rubric_en": "Or: ",
              "__massEditorPairKeys": {
                "rubric_en": "canon:mystery_c:0:rubric"
              },
              "rubricInset_en": true
            },
            {
              "text_en": "Save us, Savior of the world,",
              "__massEditorPairKeys": {
                "text_en": "canon:mystery_c:0:text"
              }
            },
            {
              "text_en": "for by your Cross and Resurrection",
              "__massEditorPairKeys": {
                "text_en": "canon:mystery_c:1:text"
              }
            },
            {
              "text_en": "you have set us free.",
              "__massEditorPairKeys": {
                "text_en": "canon:mystery_c:2:text"
              }
            },
            {
              "text_en": "Therefore, O Lord,",
              "__massEditorPairKeys": {
                "text_en": "canon:anamnesis:0:text"
              },
              "sp_en": "P."
            },
            {
              "text_en": "as we celebrate the memorial of the blessed Passion,",
              "__massEditorPairKeys": {
                "text_en": "canon:anamnesis:1:text"
              }
            },
            {
              "text_en": "the Resurrection from the dead,",
              "__massEditorPairKeys": {
                "text_en": "canon:anamnesis:2:text"
              }
            },
            {
              "text_en": "and the glorious Ascension into heaven of Christ, your Son, our Lord,",
              "__massEditorPairKeys": {
                "text_en": "canon:anamnesis:3:text"
              }
            },
            {
              "text_en": "we, your servants and your holy people,",
              "__massEditorPairKeys": {
                "text_en": "canon:anamnesis:4:text"
              }
            },
            {
              "text_en": "offer to your glorious majesty",
              "__massEditorPairKeys": {
                "text_en": "canon:anamnesis:5:text"
              }
            },
            {
              "text_en": "from the gifts that you have given us,",
              "__massEditorPairKeys": {
                "text_en": "canon:anamnesis:6:text"
              }
            },
            {
              "text_en": "this pure victim, this holy victim, this spotless victim,",
              "__massEditorPairKeys": {
                "text_en": "canon:anamnesis:7:text"
              }
            },
            {
              "text_en": "the holy Bread of eternal life",
              "__massEditorPairKeys": {
                "text_en": "canon:anamnesis:8:text"
              }
            },
            {
              "text_en": "and the Chalice of everlasting salvation.",
              "__massEditorPairKeys": {
                "text_en": "canon:anamnesis:9:text"
              }
            },
            {
              "text_en": "Be pleased to look upon these offerings",
              "__massEditorPairKeys": {
                "text_en": "canon:supra_quae:0:text"
              }
            },
            {
              "text_en": "with a serene and kindly countenance,",
              "__massEditorPairKeys": {
                "text_en": "canon:supra_quae:1:text"
              }
            },
            {
              "text_en": "and to accept them,",
              "__massEditorPairKeys": {
                "text_en": "canon:supra_quae:2:text"
              }
            },
            {
              "text_en": "as once you were pleased to accept",
              "__massEditorPairKeys": {
                "text_en": "canon:supra_quae:3:text"
              }
            },
            {
              "text_en": "the gifts of your servant Abel the just,",
              "__massEditorPairKeys": {
                "text_en": "canon:supra_quae:4:text"
              }
            },
            {
              "text_en": "the sacrifice of Abraham, our father in faith,",
              "__massEditorPairKeys": {
                "text_en": "canon:supra_quae:5:text"
              }
            },
            {
              "text_en": "and the offering of your high priest Melchizedek,",
              "__massEditorPairKeys": {
                "text_en": "canon:supra_quae:6:text"
              }
            },
            {
              "text_en": "a holy sacrifice, a spotless victim.",
              "__massEditorPairKeys": {
                "text_en": "canon:supra_quae:7:text"
              }
            },
            {
              "text_en": "In humble prayer we ask you, almighty God:",
              "__massEditorPairKeys": {
                "text_en": "canon:supplices:0:text"
              }
            },
            {
              "text_en": "command that these gifts be borne",
              "__massEditorPairKeys": {
                "text_en": "canon:supplices:1:text"
              }
            },
            {
              "text_en": "by the hands of your holy Angel to your altar on high",
              "__massEditorPairKeys": {
                "text_en": "canon:supplices:2:text"
              }
            },
            {
              "text_en": "in the sight of your divine majesty,",
              "__massEditorPairKeys": {
                "text_en": "canon:supplices:3:text"
              }
            },
            {
              "text_en": "so that all of us who through this participation at the altar receive",
              "__massEditorPairKeys": {
                "text_en": "canon:supplices:4:text"
              }
            },
            {
              "text_en": "the most holy Body and Blood of your Son,",
              "__massEditorPairKeys": {
                "text_en": "canon:supplices:5:text"
              }
            },
            {
              "text_en": "may be filled with every grace and heavenly blessing.",
              "__massEditorPairKeys": {
                "text_en": "canon:supplices:6:text"
              }
            },
            {
              "text_en": "(Through Christ our Lord.",
              "__massEditorPairKeys": {
                "text_en": "canon:supplices:7:text"
              }
            },
            {
              "text_en": "Amen.)",
              "__massEditorPairKeys": {
                "text_en": "canon:supplices:8:text"
              }
            },
            {
              "text_en": "Remember also, Lord, your servants [Person N.] and [the Other Person N.],",
              "__massEditorPairKeys": {
                "text_en": "canon:departed:0:text"
              },
              "sp_en": "P."
            },
            {
              "text_en": "who have gone before us with the sign of faith",
              "__massEditorPairKeys": {
                "text_en": "canon:departed:1:text"
              }
            },
            {
              "text_en": "and rest in the sleep of peace.",
              "__massEditorPairKeys": {
                "text_en": "canon:departed:2:text"
              }
            },
            {
              "text_en": "Grant them, O Lord, we pray,",
              "__massEditorPairKeys": {
                "text_en": "canon:departed:3:text"
              }
            },
            {
              "text_en": "and all who sleep in Christ,",
              "__massEditorPairKeys": {
                "text_en": "canon:departed:4:text"
              }
            },
            {
              "text_en": "a place of refreshment, light and peace.",
              "__massEditorPairKeys": {
                "text_en": "canon:departed:5:text"
              }
            },
            {
              "text_en": "(Through Christ our Lord.",
              "__massEditorPairKeys": {
                "text_en": "canon:departed:6:text"
              }
            },
            {
              "text_en": "Amen.)",
              "__massEditorPairKeys": {
                "text_en": "canon:departed:7:text"
              }
            },
            {
              "text_en": "To us, also, your servants, who, though sinners,",
              "__massEditorPairKeys": {
                "text_en": "canon:nobis_quoque:0:text"
              }
            },
            {
              "text_en": "hope in your abundant mercies,",
              "__massEditorPairKeys": {
                "text_en": "canon:nobis_quoque:1:text"
              }
            },
            {
              "text_en": "graciously grant some share",
              "__massEditorPairKeys": {
                "text_en": "canon:nobis_quoque:2:text"
              }
            },
            {
              "text_en": "and fellowship with your holy Apostles and Martyrs:",
              "__massEditorPairKeys": {
                "text_en": "canon:nobis_quoque:3:text"
              }
            },
            {
              "text_en": "with John the Baptist, Stephen,",
              "__massEditorPairKeys": {
                "text_en": "canon:nobis_quoque:4:text"
              }
            },
            {
              "text_en": "Matthias, Barnabas,",
              "__massEditorPairKeys": {
                "text_en": "canon:nobis_quoque:5:text"
              }
            },
            {
              "text_en": "(Ignatius, Alexander,",
              "__massEditorPairKeys": {
                "text_en": "canon:nobis_quoque:6:text"
              }
            },
            {
              "text_en": "Marcellinus, Peter,",
              "__massEditorPairKeys": {
                "text_en": "canon:nobis_quoque:7:text"
              }
            },
            {
              "text_en": "Felicity, Perpetua,",
              "__massEditorPairKeys": {
                "text_en": "canon:nobis_quoque:8:text"
              }
            },
            {
              "text_en": "Agatha, Lucy,",
              "__massEditorPairKeys": {
                "text_en": "canon:nobis_quoque:9:text"
              }
            },
            {
              "text_en": "Agnes, Cecilia, Anastasia)",
              "__massEditorPairKeys": {
                "text_en": "canon:nobis_quoque:10:text"
              }
            },
            {
              "text_en": "and all your Saints:",
              "__massEditorPairKeys": {
                "text_en": "canon:nobis_quoque:11:text"
              }
            },
            {
              "text_en": "admit us, we beseech you into their company",
              "__massEditorPairKeys": {
                "text_en": "canon:nobis_quoque:12:text"
              }
            },
            {
              "text_en": "not weighing our merits, but granting us your pardon,",
              "__massEditorPairKeys": {
                "text_en": "canon:nobis_quoque:13:text"
              }
            },
            {
              "text_en": "through Christ our Lord.",
              "__massEditorPairKeys": {
                "text_en": "canon:nobis_quoque:14:text"
              }
            },
            {
              "text_en": "Through whom",
              "__massEditorPairKeys": {
                "text_en": "canon:per_quem:0:text"
              }
            },
            {
              "text_en": "you continue to make all these good things, O Lord;",
              "__massEditorPairKeys": {
                "text_en": "canon:per_quem:1:text"
              }
            },
            {
              "text_en": "you sanctify them, fill them with life,",
              "__massEditorPairKeys": {
                "text_en": "canon:per_quem:2:text"
              }
            },
            {
              "text_en": "bless them, and bestow them upon us.",
              "__massEditorPairKeys": {
                "text_en": "canon:per_quem:3:text"
              }
            }
          ],
          "2": [
            {
              "text_en": "You are indeed Holy, O Lord,",
              "__massEditorPairKeys": {
                "text_en": "0:text"
              },
              "sp_en": "P."
            },
            {
              "text_en": "the fount of all holiness.",
              "__massEditorPairKeys": {
                "text_en": "1:text"
              }
            },
            {
              "text_en": "Make holy, therefore, these gifts, we pray,",
              "__massEditorPairKeys": {
                "text_en": "2:text"
              }
            },
            {
              "text_en": "by sending down your Spirit upon them like the dewfall,",
              "__massEditorPairKeys": {
                "text_en": "3:text"
              }
            },
            {
              "text_en": "so that they may become for us, the Body and ✠ Blood of our Lord, Jesus Christ.",
              "__massEditorPairKeys": {
                "text_en": "4:text"
              }
            },
            {
              "text_en": "At the time he was betrayed",
              "__massEditorPairKeys": {
                "text_en": "5:text"
              }
            },
            {
              "text_en": "and entered willingly into his Passion,",
              "__massEditorPairKeys": {
                "text_en": "6:text"
              }
            },
            {
              "text_en": "he took bread and, giving thanks,",
              "__massEditorPairKeys": {
                "text_en": "7:text"
              }
            },
            {
              "text_en": "broke it, and gave it to his disciples, saying:",
              "__massEditorPairKeys": {
                "text_en": "8:text"
              }
            },
            {
              "text_en": "<B>TAKE THIS, ALL OF YOU, AND EAT OF IT,</b>",
              "__massEditorPairKeys": {
                "text_en": "9:text"
              }
            },
            {
              "text_en": "<b>FOR THIS IS MY BODY,</b>",
              "__massEditorPairKeys": {
                "text_en": "10:text"
              }
            },
            {
              "text_en": "<b>WHICH WILL BE GIVEN UP FOR YOU.</b>",
              "__massEditorPairKeys": {
                "text_en": "11:text"
              }
            },
            {
              "rubric_en": "After gazing at the consecrated Host shown by the priest,",
              "__massEditorPairKeys": {
                "rubric_en": "12:rubric"
              },
              "rubricInset_en": true
            },
            {
              "rubric_en": "all genuflect (or bow deeply) when the priest places it on the paten.",
              "__massEditorPairKeys": {
                "rubric_en": "13:rubric"
              },
              "rubricInset_en": true
            },
            {
              "text_en": "In a similar way, when supper was ended,",
              "__massEditorPairKeys": {
                "text_en": "14:text"
              },
              "sp_en": "P."
            },
            {
              "text_en": "he took the chalice",
              "__massEditorPairKeys": {
                "text_en": "15:text"
              }
            },
            {
              "text_en": "and, once more giving thanks,",
              "__massEditorPairKeys": {
                "text_en": "16:text"
              }
            },
            {
              "text_en": "he gave it to his disciples, saying:",
              "__massEditorPairKeys": {
                "text_en": "17:text"
              }
            },
            {
              "text_en": "<b>TAKE THIS, ALL OF YOU, AND DRINK FROM IT,</b>",
              "__massEditorPairKeys": {
                "text_en": "18:text"
              }
            },
            {
              "text_en": "FOR THIS IS THE CHALICE OF MY BLOOD,",
              "__massEditorPairKeys": {
                "text_en": "19:text"
              }
            },
            {
              "text_en": "THE BLOOD OF THE NEW AND ETERNAL COVENANT,",
              "__massEditorPairKeys": {
                "text_en": "20:text"
              }
            },
            {
              "text_en": "<B>WHICH WILL BE POURED OUT FOR YOU AND FOR MANY</B>",
              "__massEditorPairKeys": {
                "text_en": "21:text"
              }
            },
            {
              "text_en": "<b>FOR THE FORGIVENESS OF SINS.</b>",
              "__massEditorPairKeys": {
                "text_en": "22:text"
              }
            },
            {
              "text_en": "<b>DO THIS IN MEMORY OF ME.</b>",
              "__massEditorPairKeys": {
                "text_en": "23:text"
              }
            },
            {
              "rubric_en": "After gazing at the chalice shown by the priest, all genuflect (or bow deeply) when he places it on the corporal.",
              "__massEditorPairKeys": {
                "rubric_en": "24:rubric"
              },
              "rubricInset_en": true
            },
            {
              "text_en": "The mystery of faith.",
              "__massEditorPairKeys": {
                "text_en": "25:text"
              },
              "sp_en": "P."
            },
            {
              "text_en": "We proclaim your Death, O Lord,",
              "__massEditorPairKeys": {
                "text_en": "26:text"
              },
              "sp_en": "ALL"
            },
            {
              "text_en": "and profess your Resurrection",
              "__massEditorPairKeys": {
                "text_en": "27:text"
              }
            },
            {
              "text_en": "until you come again.",
              "__massEditorPairKeys": {
                "text_en": "28:text"
              }
            },
            {
              "rubric_en": "Or: ",
              "__massEditorPairKeys": {
                "rubric_en": "29:rubric"
              },
              "rubricInset_en": true
            },
            {
              "text_en": "When we eat this Bread and drink this Cup,",
              "__massEditorPairKeys": {
                "text_en": "29:text"
              }
            },
            {
              "text_en": "we proclaim your Death, O Lord,",
              "__massEditorPairKeys": {
                "text_en": "30:text"
              }
            },
            {
              "text_en": "until you come again.",
              "__massEditorPairKeys": {
                "text_en": "31:text"
              }
            },
            {
              "rubric_en": "Or: ",
              "__massEditorPairKeys": {
                "rubric_en": "32:rubric"
              },
              "rubricInset_en": true
            },
            {
              "text_en": "Save us, Savior of the world,",
              "__massEditorPairKeys": {
                "text_en": "32:text"
              }
            },
            {
              "text_en": "for by your Cross and Resurrection",
              "__massEditorPairKeys": {
                "text_en": "33:text"
              }
            },
            {
              "text_en": "you have set us free.",
              "__massEditorPairKeys": {
                "text_en": "34:text"
              }
            },
            {
              "text_en": "Therefore, as we celebrate",
              "__massEditorPairKeys": {
                "text_en": "35:text"
              },
              "sp_en": "P."
            },
            {
              "text_en": "the memorial of his Death and Resurrection,",
              "__massEditorPairKeys": {
                "text_en": "36:text"
              }
            },
            {
              "text_en": "we offer you, Lord,",
              "__massEditorPairKeys": {
                "text_en": "37:text"
              }
            },
            {
              "text_en": "the Bread of life and the Chalice of salvation,",
              "__massEditorPairKeys": {
                "text_en": "38:text"
              }
            },
            {
              "text_en": "giving thanks that you have held us worthy",
              "__massEditorPairKeys": {
                "text_en": "39:text"
              }
            },
            {
              "text_en": "to be in your presence and minister to you.",
              "__massEditorPairKeys": {
                "text_en": "40:text"
              }
            },
            {
              "text_en": "Humbly we pray",
              "__massEditorPairKeys": {
                "text_en": "41:text"
              }
            },
            {
              "text_en": "that, partaking of the Body and Blood of Christ,",
              "__massEditorPairKeys": {
                "text_en": "42:text"
              }
            },
            {
              "text_en": "we may be gathered into one by the Holy Spirit.",
              "__massEditorPairKeys": {
                "text_en": "43:text"
              }
            },
            {
              "text_en": "Remember, Lord, your Church,",
              "__massEditorPairKeys": {
                "text_en": "44:text"
              }
            },
            {
              "text_en": "spread throughout the world,",
              "__massEditorPairKeys": {
                "text_en": "45:text"
              }
            },
            {
              "text_en": "and bring her to the fullness of charity,",
              "__massEditorPairKeys": {
                "text_en": "46:text"
              }
            },
            {
              "text_en": "together with [Pope N.] our Pope and [Bishop N.] our Bishop, (and Auxiliary Bishops,)",
              "__massEditorPairKeys": {
                "text_en": "47:text"
              }
            },
            {
              "text_en": "and all the clergy.",
              "__massEditorPairKeys": {
                "text_en": "48:text"
              }
            },
            {
              "rubric_en": "In Masses for the Dead, the following may be added:",
              "__massEditorPairKeys": {
                "rubric_en": "49:rubric"
              },
              "rubricInset_en": true
            },
            {
              "text_en": "Remember your servant [Person N.]",
              "__massEditorPairKeys": {
                "text_en": "50:text"
              },
              "sp_en": "P."
            },
            {
              "text_en": "whom you have called (today)",
              "__massEditorPairKeys": {
                "text_en": "51:text"
              }
            },
            {
              "text_en": "from this world to yourself.",
              "__massEditorPairKeys": {
                "text_en": "52:text"
              }
            },
            {
              "text_en": "Grant that he (she) who was united with your Son in a death like his,",
              "__massEditorPairKeys": {
                "text_en": "53:text"
              }
            },
            {
              "text_en": "may also be one with him in his Resurrection.",
              "__massEditorPairKeys": {
                "text_en": "54:text"
              }
            },
            {
              "rubric_en": "After the proper intercessions,",
              "__massEditorPairKeys": {
                "rubric_en": "55:rubric"
              },
              "rubricInset_en": true
            },
            {
              "text_en": "Remember also our brothers and sisters",
              "__massEditorPairKeys": {
                "text_en": "56:text"
              },
              "sp_en": "P."
            },
            {
              "text_en": "who have fallen asleep in the hope of the resurrection,",
              "__massEditorPairKeys": {
                "text_en": "57:text"
              }
            },
            {
              "text_en": "and all who have died in your mercy:",
              "__massEditorPairKeys": {
                "text_en": "58:text"
              }
            },
            {
              "text_en": "welcome them into the light of your face.",
              "__massEditorPairKeys": {
                "text_en": "59:text"
              }
            },
            {
              "text_en": "Have mercy on us all, we pray,",
              "__massEditorPairKeys": {
                "text_en": "60:text"
              }
            },
            {
              "text_en": "that with the blessed Virgin Mary, Mother of God,",
              "__massEditorPairKeys": {
                "text_en": "61:text"
              }
            },
            {
              "text_en": "with the blessed Apostles,",
              "__massEditorPairKeys": {
                "text_en": "62:text"
              }
            },
            {
              "text_en": "and all the Saints who have pleased you throughout the ages,",
              "__massEditorPairKeys": {
                "text_en": "63:text"
              }
            },
            {
              "text_en": "we may merit to be co-heirs to eternal life,",
              "__massEditorPairKeys": {
                "text_en": "64:text"
              }
            },
            {
              "text_en": "and may praise and glorify you",
              "__massEditorPairKeys": {
                "text_en": "65:text"
              }
            },
            {
              "text_en": "through your Son, Jesus Christ.",
              "__massEditorPairKeys": {
                "text_en": "66:text"
              }
            }
          ],
          "3": [
            {
              "text_en": "You are indeed Holy, O Lord,",
              "__massEditorPairKeys": {
                "text_en": "0:text"
              },
              "sp_en": "P."
            },
            {
              "text_en": "and all you have created rightly gives you praise,",
              "__massEditorPairKeys": {
                "text_en": "1:text"
              }
            },
            {
              "text_en": "for through your Son our Lord Jesus Christ,",
              "__massEditorPairKeys": {
                "text_en": "2:text"
              }
            },
            {
              "text_en": "by the power and working of the Holy Spirit, you give life to all things and make them holy,",
              "__massEditorPairKeys": {
                "text_en": "3:text"
              }
            },
            {
              "text_en": "and you never cease to gather a people to yourself,",
              "__massEditorPairKeys": {
                "text_en": "4:text"
              }
            },
            {
              "text_en": "so that from the rising of the sun to its setting a pure sacrifice may be offered to your name.",
              "__massEditorPairKeys": {
                "text_en": "5:text"
              }
            },
            {
              "text_en": "Therefore, O Lord, we humbly implore you:",
              "__massEditorPairKeys": {
                "text_en": "6:text"
              }
            },
            {
              "text_en": "by the same Spirit graciously make holy these gifts we have brought to you for consecration,",
              "__massEditorPairKeys": {
                "text_en": "7:text"
              }
            },
            {
              "text_en": "that they may become the Body and ✠ Blood of your Son our Lord Jesus Christ,",
              "__massEditorPairKeys": {
                "text_en": "8:text"
              }
            },
            {
              "text_en": "at whose command we celebrate these mysteries.",
              "__massEditorPairKeys": {
                "text_en": "9:text"
              }
            },
            {
              "text_en": "For on the night he was betrayed",
              "__massEditorPairKeys": {
                "text_en": "10:text"
              }
            },
            {
              "text_en": "he himself took bread, and, giving you thanks,",
              "__massEditorPairKeys": {
                "text_en": "11:text"
              }
            },
            {
              "text_en": "he said the blessing, broke the bread and gave it to his disciples, saying:",
              "__massEditorPairKeys": {
                "text_en": "12:text"
              }
            },
            {
              "text_en": "<B>TAKE THIS, ALL OF YOU, AND EAT OF IT,</b>",
              "__massEditorPairKeys": {
                "text_en": "13:text"
              }
            },
            {
              "text_en": "<b>FOR THIS IS MY BODY,</b>",
              "__massEditorPairKeys": {
                "text_en": "14:text"
              }
            },
            {
              "text_en": "<b>WHICH WILL BE GIVEN UP FOR YOU.</b>",
              "__massEditorPairKeys": {
                "text_en": "15:text"
              }
            },
            {
              "rubric_en": "After gazing at the consecrated Host shown by the priest,",
              "__massEditorPairKeys": {
                "rubric_en": "16:rubric"
              },
              "rubricInset_en": true
            },
            {
              "rubric_en": "all genuflect (or bow deeply) when the priest places it on the paten.",
              "__massEditorPairKeys": {
                "rubric_en": "17:rubric"
              },
              "rubricInset_en": true
            },
            {
              "text_en": "In a similar way, when supper was ended,",
              "__massEditorPairKeys": {
                "text_en": "18:text"
              },
              "sp_en": "P."
            },
            {
              "text_en": "he took the chalice, and, giving you thanks, he said the blessing,",
              "__massEditorPairKeys": {
                "text_en": "19:text"
              }
            },
            {
              "text_en": "and gave the chalice to his disciples, saying:",
              "__massEditorPairKeys": {
                "text_en": "20:text"
              }
            },
            {
              "text_en": "<b>TAKE THIS, ALL OF YOU, AND DRINK FROM IT,</b>",
              "__massEditorPairKeys": {
                "text_en": "21:text"
              }
            },
            {
              "text_en": "FOR THIS IS THE CHALICE OF MY BLOOD,",
              "__massEditorPairKeys": {
                "text_en": "22:text"
              }
            },
            {
              "text_en": "THE BLOOD OF THE NEW AND ETERNAL COVENANT,",
              "__massEditorPairKeys": {
                "text_en": "23:text"
              }
            },
            {
              "text_en": "<B>WHICH WILL BE POURED OUT FOR YOU AND FOR MANY</B>",
              "__massEditorPairKeys": {
                "text_en": "24:text"
              }
            },
            {
              "text_en": "<b>FOR THE FORGIVENESS OF SINS.</b>",
              "__massEditorPairKeys": {
                "text_en": "25:text"
              }
            },
            {
              "text_en": "<b>DO THIS IN MEMORY OF ME.</b>",
              "__massEditorPairKeys": {
                "text_en": "26:text"
              }
            },
            {
              "rubric_en": "After gazing at the chalice shown by the priest, all genuflect (or bow deeply) when he places it on the corporal.",
              "__massEditorPairKeys": {
                "rubric_en": "27:rubric"
              },
              "rubricInset_en": true
            },
            {
              "text_en": "The mystery of faith.",
              "__massEditorPairKeys": {
                "text_en": "28:text"
              },
              "sp_en": "P."
            },
            {
              "text_en": "We proclaim your Death, O Lord,",
              "__massEditorPairKeys": {
                "text_en": "29:text"
              },
              "sp_en": "ALL"
            },
            {
              "text_en": "and profess your Resurrection",
              "__massEditorPairKeys": {
                "text_en": "30:text"
              }
            },
            {
              "text_en": "until you come again.",
              "__massEditorPairKeys": {
                "text_en": "31:text"
              }
            },
            {
              "rubric_en": "Or: ",
              "__massEditorPairKeys": {
                "rubric_en": "32:rubric"
              },
              "rubricInset_en": true
            },
            {
              "text_en": "When we eat this Bread and drink this Cup,",
              "__massEditorPairKeys": {
                "text_en": "32:text"
              }
            },
            {
              "text_en": "we proclaim your Death, O Lord,",
              "__massEditorPairKeys": {
                "text_en": "33:text"
              }
            },
            {
              "text_en": "until you come again.",
              "__massEditorPairKeys": {
                "text_en": "34:text"
              }
            },
            {
              "rubric_en": "Or: ",
              "__massEditorPairKeys": {
                "rubric_en": "35:rubric"
              },
              "rubricInset_en": true
            },
            {
              "text_en": "Save us, Savior of the world,",
              "__massEditorPairKeys": {
                "text_en": "35:text"
              }
            },
            {
              "text_en": "for by your Cross and Resurrection",
              "__massEditorPairKeys": {
                "text_en": "36:text"
              }
            },
            {
              "text_en": "you have set us free.",
              "__massEditorPairKeys": {
                "text_en": "37:text"
              }
            },
            {
              "text_en": "Therefore, O Lord, as we celebrate the memorial of the saving Passion of your Son, his wondrous Resurrection and Ascension into heaven, and as we look forward to his second coming, we offer you in thanksgiving this holy and living sacrifice.",
              "__massEditorPairKeys": {
                "text_en": "38:text"
              },
              "sp_en": "P."
            },
            {
              "text_en": "Look, we pray, upon the oblation of your Church and, recognizing the sacrificial Victim by whose death you willed to reconcile us to yourself, grant that we, who are nourished by the Body and Blood of your Son and filled with his Holy Spirit, may become one body, one spirit in Christ.",
              "__massEditorPairKeys": {
                "text_en": "39:text"
              }
            },
            {
              "text_en": "May he make of us an eternal offering to you, so that we may obtain an inheritance with your elect, especially with the most blessed Virgin Mary, Mother of God, with blessed Joseph, her Spouse, with your blessed Apostles and glorious Martyrs (with Saint [Saint Name]) and with all the Saints, on whose constant intercession in your presence we rely for unfailing help.",
              "__massEditorPairKeys": {
                "text_en": "40:text"
              }
            },
            {
              "text_en": "May this Sacrifice of our reconciliation, we pray, O Lord, advance the peace and salvation of all the world.",
              "__massEditorPairKeys": {
                "text_en": "41:text"
              }
            },
            {
              "text_en": "Be pleased to confirm in faith and charity your pilgrim Church on earth, with your servant [Pope Name] our Pope and [Bishop Name] our Bishop, the Order of Bishops, all the clergy, and the entire people you have gained for your own.",
              "__massEditorPairKeys": {
                "text_en": "42:text"
              }
            },
            {
              "text_en": "Listen graciously to the prayers of this family, whom you have summoned before you: in your compassion, O merciful Father, gather to yourself all your children scattered throughout the world.",
              "__massEditorPairKeys": {
                "text_en": "43:text"
              }
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
                      "text_en": "To our departed brothers and sisters and to all who were pleasing to you at their passing from this life, give kind admittance to your kingdom. There we hope to enjoy for ever the fullness of your glory",
                      "__massEditorPairKeys": {
                        "text_en": "0:text"
                      }
                    },
                    {
                      "text_en": " ",
                      "__massEditorPairKeys": {
                        "text_en": "1:text"
                      }
                    },
                    {
                      "text_en": " ",
                      "__massEditorPairKeys": {
                        "text_en": "2:text"
                      }
                    },
                    {
                      "text_en": " ",
                      "__massEditorPairKeys": {
                        "text_en": "3:text"
                      }
                    },
                    {
                      "text_en": " ",
                      "__massEditorPairKeys": {
                        "text_en": "4:text"
                      }
                    },
                    {
                      "text_en": "through Christ our Lord,",
                      "__massEditorPairKeys": {
                        "text_en": "5:text"
                      }
                    },
                    {
                      "text_en": "through whom you bestow on the world all that is good.",
                      "__massEditorPairKeys": {
                        "text_en": "6:text"
                      }
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
                      "rubric_en": "When this Eucharistic Prayer is used in Masses for the Dead, the following may be said:",
                      "__massEditorPairKeys": {
                        "rubric_en": "0:rubric"
                      }
                    },
                    {
                      "text_en": "Remember your servant [Person Name] whom you have called (today) from this world to yourself. Grant that he (she) who was united with your Son in a death like his, may also be one with him in his Resurrection, when from the earth he will raise up in the flesh those who have died, and transform our lowly body after the pattern of his own glorious body. To our departed brothers and sisters, too, and to all who were pleasing to you at their passing from this life, give kind admittance to your kingdom. There we hope to enjoy for ever the fullness of your glory, when you will wipe away every tear from our eyes. For seeing you, our God, as you are, we shall be like you for all the ages and praise you without end,",
                      "__massEditorPairKeys": {
                        "text_en": "1:text"
                      }
                    },
                    {
                      "text_en": " ",
                      "__massEditorPairKeys": {
                        "text_en": "2:text"
                      }
                    },
                    {
                      "text_en": " ",
                      "__massEditorPairKeys": {
                        "text_en": "3:text"
                      }
                    },
                    {
                      "text_en": " ",
                      "__massEditorPairKeys": {
                        "text_en": "4:text"
                      }
                    },
                    {
                      "text_en": " ",
                      "__massEditorPairKeys": {
                        "text_en": "5:text"
                      }
                    },
                    {
                      "text_en": " ",
                      "__massEditorPairKeys": {
                        "text_en": "6:text"
                      }
                    },
                    {
                      "text_en": " ",
                      "__massEditorPairKeys": {
                        "text_en": "7:text"
                      }
                    },
                    {
                      "text_en": " ",
                      "__massEditorPairKeys": {
                        "text_en": "8:text"
                      }
                    },
                    {
                      "text_en": " ",
                      "__massEditorPairKeys": {
                        "text_en": "9:text"
                      }
                    },
                    {
                      "text_en": " ",
                      "__massEditorPairKeys": {
                        "text_en": "10:text"
                      }
                    },
                    {
                      "text_en": " ",
                      "__massEditorPairKeys": {
                        "text_en": "11:text"
                      }
                    },
                    {
                      "text_en": "through Christ our Lord,",
                      "__massEditorPairKeys": {
                        "text_en": "12:text"
                      }
                    },
                    {
                      "text_en": "through whom you bestow on the world all that is good.",
                      "__massEditorPairKeys": {
                        "text_en": "13:text"
                      }
                    }
                  ]
                }
              }
            }
          ],
          "4": [
            {
              "text_en": "It is truly right to give you thanks, truly just to give you glory, Father most holy,",
              "__massEditorPairKeys": {
                "text_en": "0:text"
              },
              "sp_en": "P."
            },
            {
              "text_en": "for you are the one God living and true, existing before all ages and abiding for all eternity, dwelling in unapproachable light;",
              "__massEditorPairKeys": {
                "text_en": "1:text"
              }
            },
            {
              "text_en": "yet you, who alone are good, the source of life, have made all that is, so that you might fill your creatures with blessings and bring joy to many of them by the glory of your light.",
              "__massEditorPairKeys": {
                "text_en": "2:text"
              }
            },
            {
              "text_en": "And so, in your presence are countless hosts of Angels, who serve you day and night and, gazing upon the glory of your face, glorify you without ceasing.",
              "__massEditorPairKeys": {
                "text_en": "3:text"
              }
            },
            {
              "text_en": "With them we, too, confess your name in exultation, giving voice to every creature under heaven as we acclaim:",
              "__massEditorPairKeys": {
                "text_en": "4:text"
              }
            },
            {
              "text_en": "Holy, Holy,",
              "__massEditorPairKeys": {
                "text_en": "5:text"
              },
              "sp_en": "ALL"
            },
            {
              "text_en": "Holy Lord God of hosts.",
              "__massEditorPairKeys": {
                "text_en": "6:text"
              }
            },
            {
              "text_en": "Heaven and earth are full of your glory.",
              "__massEditorPairKeys": {
                "text_en": "7:text"
              }
            },
            {
              "text_en": "Hosanna in the highest.",
              "__massEditorPairKeys": {
                "text_en": "8:text"
              }
            },
            {
              "text_en": "Blessed is he who comes in the name of the Lord.",
              "__massEditorPairKeys": {
                "text_en": "9:text"
              }
            },
            {
              "text_en": "Hosanna in the highest.",
              "__massEditorPairKeys": {
                "text_en": "10:text"
              }
            },
            {
              "text_en": "We give you praise, Father most holy, for you are great, and you have fashioned all your works in wisdom and in love.",
              "__massEditorPairKeys": {
                "text_en": "11:text"
              },
              "sp_en": "P."
            },
            {
              "text_en": "You formed man in your own image and entrusted the whole world to his care, so that in serving you alone, the Creator, he might have dominion over all creatures.",
              "__massEditorPairKeys": {
                "text_en": "12:text"
              }
            },
            {
              "text_en": "And when through disobedience he had lost your friendship, you did not abandon him to the domain of death.",
              "__massEditorPairKeys": {
                "text_en": "13:text"
              }
            },
            {
              "text_en": "For you came in mercy to the aid of all, so that those who seek might find you.",
              "__massEditorPairKeys": {
                "text_en": "14:text"
              }
            },
            {
              "text_en": "Time and again you offered them covenants and through the prophets taught them to look forward to salvation.",
              "__massEditorPairKeys": {
                "text_en": "15:text"
              }
            },
            {
              "text_en": "And you so loved the world, Father most holy, that in the fullness of time you sent your Only Begotten Son to be our Savior.",
              "__massEditorPairKeys": {
                "text_en": "16:text"
              }
            },
            {
              "text_en": "Made incarnate by the Holy Spirit and born of the Virgin Mary, he shared our human nature in all things but sin.",
              "__massEditorPairKeys": {
                "text_en": "17:text"
              }
            },
            {
              "text_en": "To the poor he proclaimed the good news of salvation, to prisoners, freedom, and to the sorrowful of heart, joy.",
              "__massEditorPairKeys": {
                "text_en": "18:text"
              }
            },
            {
              "text_en": "To accomplish your plan, he gave himself up to death, and, rising from the dead, he destroyed death and restored life.",
              "__massEditorPairKeys": {
                "text_en": "19:text"
              }
            },
            {
              "text_en": "And that we might live no longer for ourselves but for him who died and rose again for us, he sent the Holy Spirit from you, Father, as the first fruits for those who believe,",
              "__massEditorPairKeys": {
                "text_en": "20:text"
              }
            },
            {
              "text_en": "so that, bringing to perfection his work in the world, he might sanctify creation to the full.",
              "__massEditorPairKeys": {
                "text_en": "21:text"
              }
            },
            {
              "text_en": "Therefore, O Lord, we pray: may this same Holy Spirit graciously sanctify these offerings, that they may become the Body and Blood of our Lord Jesus Christ",
              "__massEditorPairKeys": {
                "text_en": "22:text"
              }
            },
            {
              "text_en": "for the celebration of this great mystery, which he himself left us as an eternal covenant.",
              "__massEditorPairKeys": {
                "text_en": "23:text"
              }
            },
            {
              "text_en": "For when the hour had come for him to be glorified by you, Father most holy, having loved his own who were in the world, he loved them to the end: and while they were at supper,",
              "__massEditorPairKeys": {
                "text_en": "24:text"
              }
            },
            {
              "text_en": "he took bread, blessed and broke it, and gave it to his disciples, saying,",
              "__massEditorPairKeys": {
                "text_en": "25:text"
              }
            },
            {
              "text_en": "<B>TAKE THIS, ALL OF YOU, AND EAT OF IT,</b>",
              "__massEditorPairKeys": {
                "text_en": "26:text"
              }
            },
            {
              "text_en": "<b>FOR THIS IS MY BODY,</b>",
              "__massEditorPairKeys": {
                "text_en": "27:text"
              }
            },
            {
              "text_en": "<b>WHICH WILL BE GIVEN UP FOR YOU.</b>",
              "__massEditorPairKeys": {
                "text_en": "28:text"
              }
            },
            {
              "rubric_en": "After gazing at the consecrated Host shown by the priest,",
              "__massEditorPairKeys": {
                "rubric_en": "29:rubric"
              },
              "rubricInset_en": true
            },
            {
              "rubric_en": "all genuflect (or bow deeply) when the priest places it on the paten.",
              "__massEditorPairKeys": {
                "rubric_en": "30:rubric"
              },
              "rubricInset_en": true
            },
            {
              "text_en": "In a similar way, taking the chalice filled with the fruit of the vine, he gave thanks, and gave the chalice to his disciples, saying:",
              "__massEditorPairKeys": {
                "text_en": "31:text"
              },
              "sp_en": "P."
            },
            {
              "text_en": "<b>TAKE THIS, ALL OF YOU, AND DRINK FROM IT,</b>",
              "__massEditorPairKeys": {
                "text_en": "32:text"
              }
            },
            {
              "text_en": "FOR THIS IS THE CHALICE OF MY BLOOD,",
              "__massEditorPairKeys": {
                "text_en": "33:text"
              }
            },
            {
              "text_en": "THE BLOOD OF THE NEW AND ETERNAL COVENANT,",
              "__massEditorPairKeys": {
                "text_en": "34:text"
              }
            },
            {
              "text_en": "<B>WHICH WILL BE POURED OUT FOR YOU AND FOR MANY</B>",
              "__massEditorPairKeys": {
                "text_en": "35:text"
              }
            },
            {
              "text_en": "<b>FOR THE FORGIVENESS OF SINS.</b>",
              "__massEditorPairKeys": {
                "text_en": "36:text"
              }
            },
            {
              "text_en": "<b>DO THIS IN MEMORY OF ME.</b>",
              "__massEditorPairKeys": {
                "text_en": "37:text"
              }
            },
            {
              "rubric_en": "After gazing at the chalice shown by the priest, all genuflect (or bow deeply) when he places it on the corporal.",
              "__massEditorPairKeys": {
                "rubric_en": "38:rubric"
              },
              "rubricInset_en": true
            },
            {
              "text_en": "The mystery of faith.",
              "__massEditorPairKeys": {
                "text_en": "39:text"
              },
              "sp_en": "P."
            },
            {
              "text_en": "We proclaim your Death, O Lord,",
              "__massEditorPairKeys": {
                "text_en": "40:text"
              },
              "sp_en": "ALL"
            },
            {
              "text_en": "and profess your Resurrection",
              "__massEditorPairKeys": {
                "text_en": "41:text"
              }
            },
            {
              "text_en": "until you come again.",
              "__massEditorPairKeys": {
                "text_en": "42:text"
              }
            },
            {
              "rubric_en": "Or: ",
              "__massEditorPairKeys": {
                "rubric_en": "43:rubric"
              },
              "rubricInset_en": true
            },
            {
              "text_en": "When we eat this Bread and drink this Cup,",
              "__massEditorPairKeys": {
                "text_en": "43:text"
              }
            },
            {
              "text_en": "we proclaim your Death, O Lord,",
              "__massEditorPairKeys": {
                "text_en": "44:text"
              }
            },
            {
              "text_en": "until you come again.",
              "__massEditorPairKeys": {
                "text_en": "45:text"
              }
            },
            {
              "rubric_en": "Or: ",
              "__massEditorPairKeys": {
                "rubric_en": "46:rubric"
              },
              "rubricInset_en": true
            },
            {
              "text_en": "Save us, Savior of the world,",
              "__massEditorPairKeys": {
                "text_en": "46:text"
              }
            },
            {
              "text_en": "for by your Cross and Resurrection",
              "__massEditorPairKeys": {
                "text_en": "47:text"
              }
            },
            {
              "text_en": "you have set us free.",
              "__massEditorPairKeys": {
                "text_en": "48:text"
              }
            },
            {
              "text_en": "Therefore, O Lord, as we now celebrate the memorial of our redemption, we remember Christ's death and his descent to the realm of the dead, we proclaim his Resurrection and his Ascension to your right hand;",
              "__massEditorPairKeys": {
                "text_en": "49:text"
              },
              "sp_en": "P."
            },
            {
              "text_en": "and as we await his coming in glory, we offer you his Body and Blood, the sacrifice acceptable to you which brings salvation to the whole world.",
              "__massEditorPairKeys": {
                "text_en": "50:text"
              }
            },
            {
              "text_en": "Look, O Lord, upon the Sacrifice which you yourself have provided for your Church, and grant in your loving kindness to all who partake of this one Bread and one Chalice that, gathered into one body by the Holy Spirit, they may truly become a living sacrifice in Christ to the praise of your glory.",
              "__massEditorPairKeys": {
                "text_en": "51:text"
              }
            },
            {
              "text_en": "Therefore, Lord, remember now all for whom we offer this sacrifice: especially your servant, N. our Pope, N. our Bishop, and the whole Order of Bishops, all the clergy, those who take part in this offering, those gathered here before you, your entire people, and all who seek you with a sincere heart.",
              "__massEditorPairKeys": {
                "text_en": "52:text"
              }
            },
            {
              "text_en": "Remember also those who have died in the peace of your Christ and all the dead, whose faith you alone have known.",
              "__massEditorPairKeys": {
                "text_en": "53:text"
              }
            },
            {
              "text_en": "To all of us, your children, grant, O merciful Father, that we may enter into a heavenly inheritance with the blessed Virgin Mary, Mother of God, and with your Apostles and Saints in your kingdom.",
              "__massEditorPairKeys": {
                "text_en": "54:text"
              }
            },
            {
              "text_en": "There, with the whole of creation, freed from the corruption of sin and death, may we glorify you through Christ our Lord, through whom you bestow on the world all that is good.",
              "__massEditorPairKeys": {
                "text_en": "55:text"
              }
            }
          ]
        },
        "amen": [
          {
            "text_en": "Through him, and with him, and in him,",
            "__massEditorPairKeys": {
              "text_en": "0:text"
            },
            "sp_en": "P."
          },
          {
            "text_en": "O God, almighty Father,",
            "__massEditorPairKeys": {
              "text_en": "1:text"
            }
          },
          {
            "text_en": "in the unity of the Holy Spirit,",
            "__massEditorPairKeys": {
              "text_en": "2:text"
            }
          },
          {
            "text_en": "all glory and honor is yours,",
            "__massEditorPairKeys": {
              "text_en": "3:text"
            }
          },
          {
            "text_en": "for ever and ever.",
            "__massEditorPairKeys": {
              "text_en": "4:text"
            }
          },
          {
            "text_en": "Amen.",
            "__massEditorPairKeys": {
              "text_en": "5:text"
            },
            "sp_en": "ALL"
          }
        ],
        "formEndings": {},
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
        },
        "ordinarySourceLayoutVersion": 1
      }
    },
    {
      "path": [
        21
      ],
      "value": {
        "id": "3.4 lords_prayer",
        "type": "part",
        "header": {
          "en": "The Lord's Prayer"
        },
        "lines": [
          {
            "text_en": "At the Savior's command",
            "__massEditorPairKeys": {
              "text_en": "0:text"
            },
            "sp_en": "P."
          },
          {
            "text_en": "and formed by divine teaching,",
            "__massEditorPairKeys": {
              "text_en": "1:text"
            }
          },
          {
            "text_en": "we dare to say:",
            "__massEditorPairKeys": {
              "text_en": "2:text"
            }
          },
          {
            "text_en": "Our Father, who art in heaven,",
            "__massEditorPairKeys": {
              "text_en": "3:text"
            },
            "sp_en": "ALL"
          },
          {
            "text_en": "hallowed be thy name;",
            "__massEditorPairKeys": {
              "text_en": "4:text"
            }
          },
          {
            "text_en": "thy kingdom come,",
            "__massEditorPairKeys": {
              "text_en": "5:text"
            }
          },
          {
            "text_en": "thy will be done",
            "__massEditorPairKeys": {
              "text_en": "6:text"
            }
          },
          {
            "text_en": "on earth as it is in heaven.",
            "__massEditorPairKeys": {
              "text_en": "7:text"
            }
          },
          {
            "text_en": "Give us this day our daily bread,",
            "__massEditorPairKeys": {
              "text_en": "8:text"
            }
          },
          {
            "text_en": "and forgive us our trespasses,",
            "__massEditorPairKeys": {
              "text_en": "9:text"
            }
          },
          {
            "text_en": "as we forgive those who trespass against us;",
            "__massEditorPairKeys": {
              "text_en": "10:text"
            }
          },
          {
            "text_en": "and lead us not into temptation,",
            "__massEditorPairKeys": {
              "text_en": "11:text"
            }
          },
          {
            "text_en": "but deliver us from evil.",
            "__massEditorPairKeys": {
              "text_en": "12:text"
            }
          },
          {
            "text_en": "Deliver us, Lord, we pray, from every evil,",
            "__massEditorPairKeys": {
              "text_en": "13:text"
            },
            "sp_en": "P."
          },
          {
            "text_en": "graciously grant peace in our days,",
            "__massEditorPairKeys": {
              "text_en": "14:text"
            }
          },
          {
            "text_en": "that, by the help of your mercy,",
            "__massEditorPairKeys": {
              "text_en": "15:text"
            }
          },
          {
            "text_en": "we may be always free from sin",
            "__massEditorPairKeys": {
              "text_en": "16:text"
            }
          },
          {
            "text_en": "and safe from all distress,",
            "__massEditorPairKeys": {
              "text_en": "17:text"
            }
          },
          {
            "text_en": "as we await the blessed hope",
            "__massEditorPairKeys": {
              "text_en": "18:text"
            }
          },
          {
            "text_en": "and the coming of our Savior, Jesus Christ.",
            "__massEditorPairKeys": {
              "text_en": "19:text"
            }
          },
          {
            "text_en": "For the kingdom,",
            "__massEditorPairKeys": {
              "text_en": "20:text"
            },
            "sp_en": "ALL"
          },
          {
            "text_en": "the power and the glory are yours",
            "__massEditorPairKeys": {
              "text_en": "21:text"
            }
          },
          {
            "text_en": "now and for ever.",
            "__massEditorPairKeys": {
              "text_en": "22:text"
            }
          }
        ]
      }
    },
    {
      "path": [
        22
      ],
      "value": {
        "id": "3.5 peace",
        "type": "part",
        "header": {
          "en": "The Rite of Peace"
        },
        "lines": [
          {
            "text_en": "Lord Jesus Christ,",
            "__massEditorPairKeys": {
              "text_en": "0:text"
            },
            "sp_en": "P."
          },
          {
            "text_en": "who said to your Apostles,",
            "__massEditorPairKeys": {
              "text_en": "1:text"
            }
          },
          {
            "text_en": "'Peace I leave you,",
            "__massEditorPairKeys": {
              "text_en": "2:text"
            }
          },
          {
            "text_en": "my peace I give you,'",
            "__massEditorPairKeys": {
              "text_en": "3:text"
            }
          },
          {
            "text_en": "look not on our sins,",
            "__massEditorPairKeys": {
              "text_en": "4:text"
            }
          },
          {
            "text_en": "but on the faith of your Church,",
            "__massEditorPairKeys": {
              "text_en": "5:text"
            }
          },
          {
            "text_en": "and graciously grant her peace and unity",
            "__massEditorPairKeys": {
              "text_en": "6:text"
            }
          },
          {
            "text_en": "in accordance with your will.",
            "__massEditorPairKeys": {
              "text_en": "7:text"
            }
          },
          {
            "text_en": "Who live and reign for ever and ever.",
            "__massEditorPairKeys": {
              "text_en": "8:text"
            }
          },
          {
            "text_en": "Amen.",
            "__massEditorPairKeys": {
              "text_en": "9:text"
            },
            "sp_en": "ALL"
          },
          {
            "text_en": "The peace of the Lord be with you always.",
            "__massEditorPairKeys": {
              "text_en": "10:text"
            },
            "sp_en": "P."
          },
          {
            "text_en": "And with your spirit.",
            "__massEditorPairKeys": {
              "text_en": "11:text"
            },
            "sp_en": "ALL"
          },
          {
            "text_en": "Let us offer each other the sign of peace.",
            "__massEditorPairKeys": {
              "text_en": "12:text"
            },
            "sp_en": "D.(P.)"
          },
          {
            "rubric_en": "All offer one another a sign, in keeping with local customs,",
            "__massEditorPairKeys": {
              "rubric_en": "13:rubric"
            }
          },
          {
            "rubric_en": "that expresses peace, communion, and charity.",
            "__massEditorPairKeys": {
              "rubric_en": "14:rubric"
            }
          }
        ]
      }
    },
    {
      "path": [
        23
      ],
      "value": {
        "id": "3.6 lamb",
        "type": "part",
        "header": {
          "en": "The Lamb of God"
        },
        "lines": [
          {
            "text_en": "Lamb of God, you take away the sins of the world,",
            "__massEditorPairKeys": {
              "text_en": "0:text"
            },
            "sp_en": "ALL"
          },
          {
            "text_en": "have mercy on us.",
            "__massEditorPairKeys": {
              "text_en": "1:text"
            }
          },
          {
            "text_en": "Lamb of God, you take away the sins of the world,",
            "__massEditorPairKeys": {
              "text_en": "2:text"
            }
          },
          {
            "text_en": "have mercy on us.",
            "__massEditorPairKeys": {
              "text_en": "3:text"
            }
          },
          {
            "text_en": "Lamb of God, you take away the sins of the world,",
            "__massEditorPairKeys": {
              "text_en": "4:text"
            }
          },
          {
            "text_en": "grant us peace.",
            "__massEditorPairKeys": {
              "text_en": "5:text"
            }
          }
        ]
      }
    },
    {
      "path": [
        24
      ],
      "value": {
        "id": "3.7 communion_rite",
        "type": "part",
        "header": {
          "en": "Holy Communion"
        },
        "lines": [
          {
            "text_en": "Behold the Lamb of God,",
            "__massEditorPairKeys": {
              "text_en": "0:text"
            },
            "sp_en": "P."
          },
          {
            "text_en": "behold him who takes away the sins of the world.",
            "__massEditorPairKeys": {
              "text_en": "1:text"
            }
          },
          {
            "text_en": "Blessed are those called to the supper of the Lamb.",
            "__massEditorPairKeys": {
              "text_en": "2:text"
            }
          },
          {
            "text_en": "Lord, I am not worthy",
            "__massEditorPairKeys": {
              "text_en": "3:text"
            },
            "sp_en": "ALL"
          },
          {
            "text_en": "that you should enter under my roof,",
            "__massEditorPairKeys": {
              "text_en": "4:text"
            }
          },
          {
            "text_en": "but only say the word",
            "__massEditorPairKeys": {
              "text_en": "5:text"
            }
          },
          {
            "text_en": "and my soul shall be healed.",
            "__massEditorPairKeys": {
              "text_en": "6:text"
            }
          },
          {
            "rubric_en": "Catholic faithful who are able to receive Holy Communion come forward.",
            "__massEditorPairKeys": {
              "rubric_en": "7:rubric"
            },
            "rubricInset_en": true
          },
          {
            "text_en": "The Body (and Blood) of Christ.",
            "__massEditorPairKeys": {
              "text_en": "8:text"
            },
            "sp_en": "P."
          },
          {
            "text_en": "Amen.",
            "__massEditorPairKeys": {
              "text_en": "9:text"
            },
            "sp_en": "R."
          }
        ]
      }
    },
    {
      "path": [
        25
      ],
      "value": {
        "id": "3.8 communion",
        "type": "part",
        "header": {
          "en": "Communion Antiphon"
        },
        "lines": [
          {
            "rubric_en": "If there is no singing, the Communion Antiphon may be recited.",
            "__massEditorPairKeys": {
              "rubric_en": "0:rubric"
            }
          },
          {
            "text_en": "(Today's Communion Antiphon…)",
            "__massEditorPairKeys": {
              "text_en": "1:text"
            }
          }
        ]
      }
    },
    {
      "path": [
        26
      ],
      "value": {
        "id": "3.9 prayer_after",
        "type": "part",
        "header": {
          "en": "Prayer after Communion"
        },
        "lines": [
          {
            "text_en": "Let us pray.",
            "__massEditorPairKeys": {
              "text_en": "0:text"
            },
            "sp_en": "P."
          },
          {
            "text_en": "(Today's Prayer after Communion…)",
            "__massEditorPairKeys": {
              "text_en": "1:text"
            }
          },
          {
            "text_en": "(Prayer Ending)",
            "__massEditorPairKeys": {
              "text_en": "2:text"
            }
          },
          {
            "text_en": "Amen.",
            "__massEditorPairKeys": {
              "text_en": "3:text"
            },
            "sp_en": "All"
          }
        ]
      }
    },
    {
      "path": [
        28
      ],
      "value": {
        "id": "4.1 announcement",
        "type": "part",
        "header": {
          "en": "announcements"
        },
        "lines": [
          {
            "rubric_en": "If they are necessary, any brief announcements to the people follow here.",
            "__massEditorPairKeys": {
              "rubric_en": "0:rubric"
            }
          }
        ]
      }
    },
    {
      "path": [
        29
      ],
      "value": {
        "id": "4.2 blessing",
        "type": "selectable",
        "header": {
          "en": "Blessing"
        },
        "variants": {
          "A": {
            "label": {
              "en": "Simple Blessing"
            },
            "lines": [
              {
                "text_en": "The Lord be with you.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "And with your spirit.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                },
                "sp_en": "ALL"
              },
              {
                "rubric_en": "Bow your heads and pray for God's blessing.",
                "__massEditorPairKeys": {
                  "rubric_en": "2:rubric"
                },
                "rubricInset_en": true
              },
              {
                "text_en": "May almighty God bless you:",
                "__massEditorPairKeys": {
                  "text_en": "3:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "the Father, and the Son, ✠ and the Holy Spirit.",
                "__massEditorPairKeys": {
                  "text_en": "4:text"
                }
              },
              {
                "text_en": "Amen.",
                "__massEditorPairKeys": {
                  "text_en": "5:text"
                },
                "sp_en": "All"
              }
            ]
          },
          "B": {
            "label": {
              "en": "Bishop's Introit Form"
            },
            "lines": [
              {
                "text_en": "The Lord be with you.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "B."
              },
              {
                "text_en": "And with your spirit.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                },
                "sp_en": "ALL"
              },
              {
                "text_en": "Blessed be the name of the Lord.",
                "__massEditorPairKeys": {
                  "text_en": "2:text"
                },
                "sp_en": "B."
              },
              {
                "text_en": "Now and for ever.",
                "__massEditorPairKeys": {
                  "text_en": "3:text"
                },
                "sp_en": "ALL"
              },
              {
                "text_en": "Our help is in the name of the Lord.",
                "__massEditorPairKeys": {
                  "text_en": "4:text"
                },
                "sp_en": "B."
              },
              {
                "text_en": "Who made heaven and earth.",
                "__massEditorPairKeys": {
                  "text_en": "5:text"
                },
                "sp_en": "ALL"
              },
              {
                "rubric_en": "Bow your heads and pray for God's blessing.",
                "__massEditorPairKeys": {
                  "rubric_en": "6:rubric"
                },
                "rubricInset_en": true
              },
              {
                "text_en": "May almighty God bless you,",
                "__massEditorPairKeys": {
                  "text_en": "7:text"
                },
                "sp_en": "B."
              },
              {
                "text_en": "the Father, ✠ and the Son, ✠ and the Holy ✠ Spirit.",
                "__massEditorPairKeys": {
                  "text_en": "8:text"
                }
              },
              {
                "text_en": "Amen.",
                "__massEditorPairKeys": {
                  "text_en": "9:text"
                },
                "sp_en": "All"
              }
            ]
          },
          "C": {
            "label": {
              "en": "A Solemn formula of blessing/The prayer over the people"
            },
            "lines": [
              {
                "text_en": "The Lord be with you.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "B."
              },
              {
                "text_en": "And with your spirit.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                },
                "sp_en": "ALL"
              },
              {
                "rubric_en": "Bow your heads and pray for God's blessing.",
                "__massEditorPairKeys": {
                  "rubric_en": "2:rubric"
                },
                "rubricInset_en": true
              },
              {
                "rubric_en": "At the end of the Priest's prayer, ",
                "__massEditorPairKeys": {
                  "rubric_en": "3:rubric"
                },
                "rubricInset_en": true
              },
              {
                "text_en": "Amen.",
                "__massEditorPairKeys": {
                  "text_en": "3:text"
                },
                "sp_en": "R."
              },
              {
                "text_en": "May almighty God bless you:",
                "__massEditorPairKeys": {
                  "text_en": "4:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "the Father, and the Son, ✠ and the Holy Spirit.",
                "__massEditorPairKeys": {
                  "text_en": "5:text"
                }
              },
              {
                "text_en": "Amen.",
                "__massEditorPairKeys": {
                  "text_en": "6:text"
                },
                "sp_en": "All"
              }
            ]
          },
          "solemn_advent": {
            "label": {
              "en": "Solemn Blessing - Advent"
            },
            "lines": [
              {
                "text_en": "The Lord be with you.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "B."
              },
              {
                "text_en": "And with your spirit.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                },
                "sp_en": "ALL"
              },
              {
                "rubric_en": "Bow your heads and pray for God's blessing.",
                "__massEditorPairKeys": {
                  "rubric_en": "2:rubric"
                },
                "rubricInset_en": true
              },
              {
                "text_en": "May the almighty and merciful God, by whose grace you have placed your faith in the First Coming of his Only Begotten Son and yearn for his coming again sanctify you by the radiance of Christ’s Advent and enrich you with his blessing.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:advent:petition:0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "Amen.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:advent:petition:1:text"
                },
                "sp_en": "ALL"
              },
              {
                "text_en": "As you run the race of this present life, may he make you firm in faith, joyful in hope and active in charity.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:advent:petition:2:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "Amen.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:advent:petition:3:text"
                },
                "sp_en": "ALL"
              },
              {
                "text_en": "So that, rejoicing now with devotion at the Redeemer’s coming in the flesh, you may be endowed with the rich reward of eternal life when he comes again in majesty.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:advent:petition:4:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "Amen.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:advent:petition:5:text"
                },
                "sp_en": "ALL"
              },
              {
                "text_en": "And may the blessing of almighty God, the Father, and the Son, ✠ and the Holy Spirit, come down on you and remain with you for ever.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:advent:ending:2:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "Amen.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:advent:ending:1:text"
                },
                "sp_en": "ALL"
              }
            ]
          },
          "solemn_christmas": {
            "label": {
              "en": "Solemn Blessing - The Nativity of the Lord"
            },
            "lines": [
              {
                "text_en": "The Lord be with you.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "B."
              },
              {
                "text_en": "And with your spirit.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                },
                "sp_en": "ALL"
              },
              {
                "rubric_en": "Bow your heads and pray for God's blessing.",
                "__massEditorPairKeys": {
                  "rubric_en": "2:rubric"
                },
                "rubricInset_en": true
              },
              {
                "text_en": "May the God of infinite goodness, who by the Incarnation of his Son has driven darkness from the world and by that glorious Birth has illumined this most holy night (day), drive far from you the darkness of vice and illumine your hearts with the light of virtue.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:christmas:petition:0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "Amen.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:christmas:petition:1:text"
                },
                "sp_en": "ALL"
              },
              {
                "text_en": "May God, who willed that the great joy of his Son’s saving Birth be announced to shepherds by the Angel, fill your minds with the gladness he gives and make you heralds of his Gospel.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:christmas:petition:2:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "Amen.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:christmas:petition:3:text"
                },
                "sp_en": "ALL"
              },
              {
                "text_en": "And may God, who by the Incarnation brought together the earthly and heavenly realm, fill you with the gift of his peace and favor and make you sharers with the Church in heaven.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:christmas:petition:4:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "Amen.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:christmas:petition:5:text"
                },
                "sp_en": "ALL"
              },
              {
                "text_en": "And may the blessing of almighty God, the Father, and the Son, ✠ and the Holy Spirit, come down on you and remain with you for ever.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:christmas:ending:2:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "Amen.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:christmas:ending:1:text"
                },
                "sp_en": "ALL"
              }
            ]
          },
          "solemn_new_year": {
            "label": {
              "en": "Solemn Blessing - The Beginning of the Year"
            },
            "lines": [
              {
                "text_en": "The Lord be with you.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "B."
              },
              {
                "text_en": "And with your spirit.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                },
                "sp_en": "ALL"
              },
              {
                "rubric_en": "Bow your heads and pray for God's blessing.",
                "__massEditorPairKeys": {
                  "rubric_en": "2:rubric"
                },
                "rubricInset_en": true
              },
              {
                "text_en": "May God, the source and origin of all blessing, grant you grace, pour out his blessing in abundance, and keep you safe from harm throughout the year.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:new_year:petition:0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "Amen.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:new_year:petition:1:text"
                },
                "sp_en": "ALL"
              },
              {
                "text_en": "May he give you integrity in the faith, endurance in hope, and perseverance in charity with holy patience to the end.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:new_year:petition:2:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "Amen.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:new_year:petition:3:text"
                },
                "sp_en": "ALL"
              },
              {
                "text_en": "May he order your days and your deeds in his peace, grant your prayers in this and in every place, and lead you happily to eternal life.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:new_year:petition:4:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "Amen.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:new_year:petition:5:text"
                },
                "sp_en": "ALL"
              },
              {
                "text_en": "And may the blessing of almighty God, the Father, and the Son, ✠ and the Holy Spirit, come down on you and remain with you for ever.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:new_year:ending:2:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "Amen.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:new_year:ending:1:text"
                },
                "sp_en": "ALL"
              }
            ]
          },
          "solemn_epiphany": {
            "label": {
              "en": "Solemn Blessing - The Epiphany of the Lord"
            },
            "lines": [
              {
                "text_en": "The Lord be with you.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "B."
              },
              {
                "text_en": "And with your spirit.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                },
                "sp_en": "ALL"
              },
              {
                "rubric_en": "Bow your heads and pray for God's blessing.",
                "__massEditorPairKeys": {
                  "rubric_en": "2:rubric"
                },
                "rubricInset_en": true
              },
              {
                "text_en": "May God, who has called you out of darkness into his wonderful light, pour out in kindness his blessing upon you and make your hearts firm in faith, hope and charity.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:epiphany:petition:0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "Amen.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:epiphany:petition:1:text"
                },
                "sp_en": "ALL"
              },
              {
                "text_en": "And since in all confidence you follow Christ, who today appeared in the world as a light shining in darkness, may God make you, too, a light for your brothers and sisters.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:epiphany:petition:2:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "Amen.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:epiphany:petition:3:text"
                },
                "sp_en": "ALL"
              },
              {
                "text_en": "And so when your pilgrimage is ended, may you come to him whom the Magi sought as they followed the star and whom they found with great joy, the Light from Light, who is Christ the Lord.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:epiphany:petition:4:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "Amen.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:epiphany:petition:5:text"
                },
                "sp_en": "ALL"
              },
              {
                "text_en": "And may the blessing of almighty God, the Father, and the Son, ✠ and the Holy Spirit, come down on you and remain with you for ever.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:epiphany:ending:2:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "Amen.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:epiphany:ending:1:text"
                },
                "sp_en": "ALL"
              }
            ]
          },
          "solemn_passion": {
            "label": {
              "en": "Solemn Blessing - The Passion of the Lord"
            },
            "lines": [
              {
                "text_en": "The Lord be with you.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "B."
              },
              {
                "text_en": "And with your spirit.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                },
                "sp_en": "ALL"
              },
              {
                "rubric_en": "Bow your heads and pray for God's blessing.",
                "__massEditorPairKeys": {
                  "rubric_en": "2:rubric"
                },
                "rubricInset_en": true
              },
              {
                "text_en": "May God, the Father of mercies, who has given you an example of love in the Passion of his Only Begotten Son, grant that, by serving God and your neighbor, you may lay hold of the wondrous gift of his blessing.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:passion:petition:0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "Amen.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:passion:petition:1:text"
                },
                "sp_en": "ALL"
              },
              {
                "text_en": "So that you may receive the reward of everlasting life from him, through whose earthly Death you believe that you escape eternal death.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:passion:petition:2:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "Amen.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:passion:petition:3:text"
                },
                "sp_en": "ALL"
              },
              {
                "text_en": "And by following the example of his self-abasement, may you possess a share in his Resurrection.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:passion:petition:4:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "Amen.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:passion:petition:5:text"
                },
                "sp_en": "ALL"
              },
              {
                "text_en": "And may the blessing of almighty God, the Father, and the Son, ✠ and the Holy Spirit, come down on you and remain with you for ever.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:passion:ending:2:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "Amen.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:passion:ending:1:text"
                },
                "sp_en": "ALL"
              }
            ]
          },
          "solemn_easter": {
            "label": {
              "en": "Solemn Blessing - Easter Time"
            },
            "lines": [
              {
                "text_en": "The Lord be with you.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "B."
              },
              {
                "text_en": "And with your spirit.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                },
                "sp_en": "ALL"
              },
              {
                "rubric_en": "Bow your heads and pray for God's blessing.",
                "__massEditorPairKeys": {
                  "rubric_en": "2:rubric"
                },
                "rubricInset_en": true
              },
              {
                "text_en": "May God, who by the Resurrection of his Only Begotten Son was pleased to confer on you the gift of redemption and of adoption, give you gladness by his blessing.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:easter:petition:0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "Amen.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:easter:petition:1:text"
                },
                "sp_en": "ALL"
              },
              {
                "text_en": "May he, by whose redeeming work you have received the gift of everlasting freedom, make you heirs to an eternal inheritance.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:easter:petition:2:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "Amen.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:easter:petition:3:text"
                },
                "sp_en": "ALL"
              },
              {
                "text_en": "And may you, who have already risen with Christ in Baptism through faith, by living in a right manner on this earth, be united with him in the homeland of heaven.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:easter:petition:4:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "Amen.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:easter:petition:5:text"
                },
                "sp_en": "ALL"
              },
              {
                "text_en": "And may the blessing of almighty God, the Father, and the Son, ✠ and the Holy Spirit, come down on you and remain with you for ever.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:easter:ending:2:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "Amen.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:easter:ending:1:text"
                },
                "sp_en": "ALL"
              }
            ]
          },
          "solemn_ascension": {
            "label": {
              "en": "Solemn Blessing - The Ascension of the Lord"
            },
            "lines": [
              {
                "text_en": "The Lord be with you.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "B."
              },
              {
                "text_en": "And with your spirit.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                },
                "sp_en": "ALL"
              },
              {
                "rubric_en": "Bow your heads and pray for God's blessing.",
                "__massEditorPairKeys": {
                  "rubric_en": "2:rubric"
                },
                "rubricInset_en": true
              },
              {
                "text_en": "May almighty God bless you, for on this very day his Only Begotten Son pierced the heights of heaven and unlocked for you the way to ascend to where he is.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:ascension:petition:0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "Amen.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:ascension:petition:1:text"
                },
                "sp_en": "ALL"
              },
              {
                "text_en": "May he grant that, as Christ after his Resurrection was seen plainly by his disciples, so when he comes as Judge he may show himself merciful to you for all eternity.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:ascension:petition:2:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "Amen.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:ascension:petition:3:text"
                },
                "sp_en": "ALL"
              },
              {
                "text_en": "And may you, who believe he is seated with the Father in his majesty, know with joy the fulfillment of his promise to stay with you until the end of time.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:ascension:petition:4:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "Amen.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:ascension:petition:5:text"
                },
                "sp_en": "ALL"
              },
              {
                "text_en": "And may the blessing of almighty God, the Father, and the Son, ✠ and the Holy Spirit, come down on you and remain with you for ever.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:ascension:ending:2:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "Amen.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:ascension:ending:1:text"
                },
                "sp_en": "ALL"
              }
            ]
          },
          "solemn_pentecost": {
            "label": {
              "en": "Solemn Blessing - The Holy Spirit"
            },
            "lines": [
              {
                "text_en": "The Lord be with you.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "B."
              },
              {
                "text_en": "And with your spirit.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                },
                "sp_en": "ALL"
              },
              {
                "rubric_en": "Bow your heads and pray for God's blessing.",
                "__massEditorPairKeys": {
                  "rubric_en": "2:rubric"
                },
                "rubricInset_en": true
              },
              {
                "text_en": "May God, the Father of lights, who was pleased to enlighten the disciples’ minds by the outpouring of the Spirit, the Paraclete, grant you gladness by his blessing and make you always abound with the gifts of the same Spirit.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:pentecost:petition:0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "Amen.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:pentecost:petition:1:text"
                },
                "sp_en": "ALL"
              },
              {
                "text_en": "May the wondrous flame that appeared above the disciples, powerfully cleanse your hearts from every evil and pervade them with its purifying light.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:pentecost:petition:2:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "Amen.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:pentecost:petition:3:text"
                },
                "sp_en": "ALL"
              },
              {
                "text_en": "And may God, who has been pleased to unite many tongues in the profession of one faith, give you perseverance in that same faith and, by believing, may you journey from hope to clear vision.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:pentecost:petition:4:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "Amen.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:pentecost:petition:5:text"
                },
                "sp_en": "ALL"
              },
              {
                "text_en": "And may the blessing of almighty God, the Father, and the Son, ✠ and the Holy Spirit, come down on you and remain with you for ever.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:pentecost:ending:2:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "Amen.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:pentecost:ending:1:text"
                },
                "sp_en": "ALL"
              }
            ]
          },
          "solemn_ordinary_1": {
            "label": {
              "en": "Solemn Blessing - Ordinary Time I"
            },
            "lines": [
              {
                "text_en": "The Lord be with you.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "B."
              },
              {
                "text_en": "And with your spirit.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                },
                "sp_en": "ALL"
              },
              {
                "rubric_en": "Bow your heads and pray for God's blessing.",
                "__massEditorPairKeys": {
                  "rubric_en": "2:rubric"
                },
                "rubricInset_en": true
              },
              {
                "text_en": "May the Lord bless you and keep you.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:ordinary_1:petition:0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "Amen.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:ordinary_1:petition:1:text"
                },
                "sp_en": "ALL"
              },
              {
                "text_en": "May he let his face shine upon you and show you his mercy.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:ordinary_1:petition:2:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "Amen.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:ordinary_1:petition:3:text"
                },
                "sp_en": "ALL"
              },
              {
                "text_en": "May he turn his countenance towards you and give you his peace.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:ordinary_1:petition:4:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "Amen.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:ordinary_1:petition:5:text"
                },
                "sp_en": "ALL"
              },
              {
                "text_en": "And may the blessing of almighty God, the Father, and the Son, ✠ and the Holy Spirit, come down on you and remain with you for ever.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:ordinary_1:ending:2:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "Amen.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:ordinary_1:ending:1:text"
                },
                "sp_en": "ALL"
              }
            ]
          },
          "solemn_ordinary_2": {
            "label": {
              "en": "Solemn Blessing - Ordinary Time II"
            },
            "lines": [
              {
                "text_en": "The Lord be with you.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "B."
              },
              {
                "text_en": "And with your spirit.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                },
                "sp_en": "ALL"
              },
              {
                "rubric_en": "Bow your heads and pray for God's blessing.",
                "__massEditorPairKeys": {
                  "rubric_en": "2:rubric"
                },
                "rubricInset_en": true
              },
              {
                "text_en": "May the peace of God, which surpasses all understanding, keep your hearts and minds in the knowledge and love of God, and of his Son, our Lord Jesus Christ.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:ordinary_2:petition:0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "Amen.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:ordinary_2:petition:1:text"
                },
                "sp_en": "ALL"
              },
              {
                "text_en": "And may the blessing of almighty God, the Father, and the Son, ✠ and the Holy Spirit, come down on you and remain with you for ever.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:ordinary_2:ending:2:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "Amen.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:ordinary_2:ending:1:text"
                },
                "sp_en": "ALL"
              }
            ]
          },
          "solemn_ordinary_3": {
            "label": {
              "en": "Solemn Blessing - Ordinary Time III"
            },
            "lines": [
              {
                "text_en": "The Lord be with you.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "B."
              },
              {
                "text_en": "And with your spirit.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                },
                "sp_en": "ALL"
              },
              {
                "rubric_en": "Bow your heads and pray for God's blessing.",
                "__massEditorPairKeys": {
                  "rubric_en": "2:rubric"
                },
                "rubricInset_en": true
              },
              {
                "text_en": "May almighty God bless you in his kindness and pour out saving wisdom upon you.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:ordinary_3:petition:0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "Amen.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:ordinary_3:petition:1:text"
                },
                "sp_en": "ALL"
              },
              {
                "text_en": "May he nourish you always with the teachings of the faith and make you persevere in holy deeds.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:ordinary_3:petition:2:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "Amen.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:ordinary_3:petition:3:text"
                },
                "sp_en": "ALL"
              },
              {
                "text_en": "May he turn your steps towards himself and show you the path of charity and peace.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:ordinary_3:petition:4:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "Amen.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:ordinary_3:petition:5:text"
                },
                "sp_en": "ALL"
              },
              {
                "text_en": "And may the blessing of almighty God, the Father, and the Son, ✠ and the Holy Spirit, come down on you and remain with you for ever.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:ordinary_3:ending:2:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "Amen.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:ordinary_3:ending:1:text"
                },
                "sp_en": "ALL"
              }
            ]
          },
          "solemn_ordinary_4": {
            "label": {
              "en": "Solemn Blessing - Ordinary Time IV"
            },
            "lines": [
              {
                "text_en": "The Lord be with you.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "B."
              },
              {
                "text_en": "And with your spirit.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                },
                "sp_en": "ALL"
              },
              {
                "rubric_en": "Bow your heads and pray for God's blessing.",
                "__massEditorPairKeys": {
                  "rubric_en": "2:rubric"
                },
                "rubricInset_en": true
              },
              {
                "text_en": "May the God of all consolation order your days in his peace and grant you the gifts of his blessing.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:ordinary_4:petition:0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "Amen.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:ordinary_4:petition:1:text"
                },
                "sp_en": "ALL"
              },
              {
                "text_en": "May he free you always from every distress and confirm your hearts in his love.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:ordinary_4:petition:2:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "Amen.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:ordinary_4:petition:3:text"
                },
                "sp_en": "ALL"
              },
              {
                "text_en": "So that on this life’s journey you may be effective in good works, rich in the gifts of hope, faith and charity, and may come happily to eternal life.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:ordinary_4:petition:4:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "Amen.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:ordinary_4:petition:5:text"
                },
                "sp_en": "ALL"
              },
              {
                "text_en": "And may the blessing of almighty God, the Father, and the Son, ✠ and the Holy Spirit, come down on you and remain with you for ever.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:ordinary_4:ending:2:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "Amen.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:ordinary_4:ending:1:text"
                },
                "sp_en": "ALL"
              }
            ]
          },
          "solemn_ordinary_5": {
            "label": {
              "en": "Solemn Blessing - Ordinary Time V"
            },
            "lines": [
              {
                "text_en": "The Lord be with you.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "B."
              },
              {
                "text_en": "And with your spirit.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                },
                "sp_en": "ALL"
              },
              {
                "rubric_en": "Bow your heads and pray for God's blessing.",
                "__massEditorPairKeys": {
                  "rubric_en": "2:rubric"
                },
                "rubricInset_en": true
              },
              {
                "text_en": "May almighty God always keep every adversity far from you and in his kindness pour out upon you the gifts of his blessing.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:ordinary_5:petition:0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "Amen.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:ordinary_5:petition:1:text"
                },
                "sp_en": "ALL"
              },
              {
                "text_en": "May God keep your hearts attentive to his words, that they may be filled with everlasting gladness.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:ordinary_5:petition:2:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "Amen.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:ordinary_5:petition:3:text"
                },
                "sp_en": "ALL"
              },
              {
                "text_en": "And so, may you always understand what is good and right, and be found ever hastening along in the path of God’s commands, made coheirs with the citizens of heaven.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:ordinary_5:petition:4:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "Amen.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:ordinary_5:petition:5:text"
                },
                "sp_en": "ALL"
              },
              {
                "text_en": "And may the blessing of almighty God, the Father, and the Son, ✠ and the Holy Spirit, come down on you and remain with you for ever.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:ordinary_5:ending:2:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "Amen.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:ordinary_5:ending:1:text"
                },
                "sp_en": "ALL"
              }
            ]
          },
          "solemn_ordinary_6": {
            "label": {
              "en": "Solemn Blessing - Ordinary Time VI"
            },
            "lines": [
              {
                "text_en": "The Lord be with you.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "B."
              },
              {
                "text_en": "And with your spirit.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                },
                "sp_en": "ALL"
              },
              {
                "rubric_en": "Bow your heads and pray for God's blessing.",
                "__massEditorPairKeys": {
                  "rubric_en": "2:rubric"
                },
                "rubricInset_en": true
              },
              {
                "text_en": "May God bless you with every heavenly blessing, make you always holy and pure in his sight, pour out in abundance upon you the riches of his glory, and teach you with the words of truth; may he instruct you in the Gospel of salvation, and ever endow you with fraternal charity. Through Christ our Lord.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:ordinary_6:petition:0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "Amen.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:ordinary_6:petition:1:text"
                },
                "sp_en": "ALL"
              },
              {
                "text_en": "And may the blessing of almighty God, the Father, and the Son, ✠ and the Holy Spirit, come down on you and remain with you for ever.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:ordinary_6:ending:2:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "Amen.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:ordinary_6:ending:1:text"
                },
                "sp_en": "ALL"
              }
            ]
          },
          "solemn_blessed_virgin_mary": {
            "label": {
              "en": "Solemn Blessing - The Blessed Virgin Mary"
            },
            "lines": [
              {
                "text_en": "The Lord be with you.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "B."
              },
              {
                "text_en": "And with your spirit.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                },
                "sp_en": "ALL"
              },
              {
                "rubric_en": "Bow your heads and pray for God's blessing.",
                "__massEditorPairKeys": {
                  "rubric_en": "2:rubric"
                },
                "rubricInset_en": true
              },
              {
                "text_en": "May God, who through the childbearing of the Blessed Virgin Mary willed in his great kindness to redeem the human race, be pleased to enrich you with his blessing.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:blessed_virgin_mary:petition:0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "Amen.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:blessed_virgin_mary:petition:1:text"
                },
                "sp_en": "ALL"
              },
              {
                "text_en": "May you know always and everywhere the protection of her, through whom you have been found worthy to receive the author of life.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:blessed_virgin_mary:petition:2:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "Amen.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:blessed_virgin_mary:petition:3:text"
                },
                "sp_en": "ALL"
              },
              {
                "text_en": "May you, who have devoutly gathered on this day, carry away with you the gifts of spiritual joys and heavenly rewards.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:blessed_virgin_mary:petition:4:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "Amen.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:blessed_virgin_mary:petition:5:text"
                },
                "sp_en": "ALL"
              },
              {
                "text_en": "And may the blessing of almighty God, the Father, and the Son, ✠ and the Holy Spirit, come down on you and remain with you for ever.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:blessed_virgin_mary:ending:2:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "Amen.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:blessed_virgin_mary:ending:1:text"
                },
                "sp_en": "ALL"
              }
            ]
          },
          "solemn_peter_and_paul": {
            "label": {
              "en": "Solemn Blessing - Saints Peter and Paul, Apostles"
            },
            "lines": [
              {
                "text_en": "The Lord be with you.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "B."
              },
              {
                "text_en": "And with your spirit.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                },
                "sp_en": "ALL"
              },
              {
                "rubric_en": "Bow your heads and pray for God's blessing.",
                "__massEditorPairKeys": {
                  "rubric_en": "2:rubric"
                },
                "rubricInset_en": true
              },
              {
                "text_en": "May almighty God bless you, for he has made you steadfast in Saint Peter’s saving confession and through it has set you on the solid rock of the Church’s faith.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:peter_and_paul:petition:0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "Amen.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:peter_and_paul:petition:1:text"
                },
                "sp_en": "ALL"
              },
              {
                "text_en": "And having instructed you by the tireless preaching of Saint Paul, may God teach you constantly by his example to win brothers and sisters for Christ.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:peter_and_paul:petition:2:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "Amen.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:peter_and_paul:petition:3:text"
                },
                "sp_en": "ALL"
              },
              {
                "text_en": "So that by the keys of St Peter and the words of St Paul, and by the support of their intercession, God may bring us happily to that homeland that Peter attained on a cross and Paul by the blade of a sword.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:peter_and_paul:petition:4:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "Amen.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:peter_and_paul:petition:5:text"
                },
                "sp_en": "ALL"
              },
              {
                "text_en": "And may the blessing of almighty God, the Father, and the Son, ✠ and the Holy Spirit, come down on you and remain with you for ever.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:peter_and_paul:ending:2:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "Amen.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:peter_and_paul:ending:1:text"
                },
                "sp_en": "ALL"
              }
            ]
          },
          "solemn_apostles": {
            "label": {
              "en": "Solemn Blessing - The Apostles"
            },
            "lines": [
              {
                "text_en": "The Lord be with you.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "B."
              },
              {
                "text_en": "And with your spirit.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                },
                "sp_en": "ALL"
              },
              {
                "rubric_en": "Bow your heads and pray for God's blessing.",
                "__massEditorPairKeys": {
                  "rubric_en": "2:rubric"
                },
                "rubricInset_en": true
              },
              {
                "text_en": "May God, who has granted you to stand firm on apostolic foundations, graciously bless you through the glorious merits of the holy Apostles N. and N. (the holy Apostle N.).",
                "__massEditorPairKeys": {
                  "text_en": "blessing:apostles:petition:0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "Amen.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:apostles:petition:1:text"
                },
                "sp_en": "ALL"
              },
              {
                "text_en": "And may he who endowed you with the teaching and example of the Apostles, make you, under their protection, witnesses to the truth before all.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:apostles:petition:2:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "Amen.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:apostles:petition:3:text"
                },
                "sp_en": "ALL"
              },
              {
                "text_en": "So that through the intercession of the Apostles, you may inherit the eternal homeland, for by their teaching you possess firmness of faith.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:apostles:petition:4:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "Amen.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:apostles:petition:5:text"
                },
                "sp_en": "ALL"
              },
              {
                "text_en": "And may the blessing of almighty God, the Father, and the Son, ✠ and the Holy Spirit, come down on you and remain with you for ever.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:apostles:ending:2:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "Amen.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:apostles:ending:1:text"
                },
                "sp_en": "ALL"
              }
            ]
          },
          "solemn_all_saints": {
            "label": {
              "en": "Solemn Blessing - All Saints"
            },
            "lines": [
              {
                "text_en": "The Lord be with you.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "B."
              },
              {
                "text_en": "And with your spirit.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                },
                "sp_en": "ALL"
              },
              {
                "rubric_en": "Bow your heads and pray for God's blessing.",
                "__massEditorPairKeys": {
                  "rubric_en": "2:rubric"
                },
                "rubricInset_en": true
              },
              {
                "text_en": "May God, the glory and joy of the Saints, who has caused you to be strengthened by means of their outstanding prayers, bless you with unending blessings.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:all_saints:petition:0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "Amen.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:all_saints:petition:1:text"
                },
                "sp_en": "ALL"
              },
              {
                "text_en": "Freed through their intercession from present ills and formed by the example of their holy way of life, may you be ever devoted to serving God and your neighbor.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:all_saints:petition:2:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "Amen.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:all_saints:petition:3:text"
                },
                "sp_en": "ALL"
              },
              {
                "text_en": "So that, together with all, you may possess the joys of the homeland, where Holy Church rejoices that her children are admitted in perpetual peace to the company of the citizens of heaven.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:all_saints:petition:4:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "Amen.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:all_saints:petition:5:text"
                },
                "sp_en": "ALL"
              },
              {
                "text_en": "And may the blessing of almighty God, the Father, and the Son, ✠ and the Holy Spirit, come down on you and remain with you for ever.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:all_saints:ending:2:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "Amen.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:all_saints:ending:1:text"
                },
                "sp_en": "ALL"
              }
            ]
          },
          "solemn_church_dedication": {
            "label": {
              "en": "Solemn Blessing - For the Dedication of a Church"
            },
            "lines": [
              {
                "text_en": "The Lord be with you.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "B."
              },
              {
                "text_en": "And with your spirit.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                },
                "sp_en": "ALL"
              },
              {
                "rubric_en": "Bow your heads and pray for God's blessing.",
                "__massEditorPairKeys": {
                  "rubric_en": "2:rubric"
                },
                "rubricInset_en": true
              },
              {
                "text_en": "May God, the Lord of heaven and earth, who has gathered you today for the dedication of this church, make you abound in heavenly blessings.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:church_dedication:petition:0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "Amen.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:church_dedication:petition:1:text"
                },
                "sp_en": "ALL"
              },
              {
                "text_en": "And may he who has willed that all his scattered children should be gathered together in his Son, grant that you may become his temple and the dwelling place of the Holy Spirit.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:church_dedication:petition:2:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "Amen.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:church_dedication:petition:3:text"
                },
                "sp_en": "ALL"
              },
              {
                "text_en": "And so, when you are thoroughly cleansed, may God dwell within you and grant you to possess with all the Saints the inheritance of eternal happiness.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:church_dedication:petition:4:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "Amen.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:church_dedication:petition:5:text"
                },
                "sp_en": "ALL"
              },
              {
                "text_en": "And may the blessing of almighty God, the Father, ✠ and the Son, ✠ and the Holy ✠ Spirit, come down on you and remain with you for ever.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:church_dedication:ending:2:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "Amen.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:church_dedication:ending:1:text"
                },
                "sp_en": "ALL"
              }
            ]
          },
          "solemn_for_the_dead": {
            "label": {
              "en": "Solemn Blessing - In Celebrations for the Dead"
            },
            "lines": [
              {
                "text_en": "The Lord be with you.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "B."
              },
              {
                "text_en": "And with your spirit.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                },
                "sp_en": "ALL"
              },
              {
                "rubric_en": "Bow your heads and pray for God's blessing.",
                "__massEditorPairKeys": {
                  "rubric_en": "2:rubric"
                },
                "rubricInset_en": true
              },
              {
                "text_en": "May the God of all consolation bless you, for in his unfathomable goodness he created the human race, and in the Resurrection of his Only Begotten Son he has given believers the hope of rising again.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:for_the_dead:petition:0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "Amen.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:for_the_dead:petition:1:text"
                },
                "sp_en": "ALL"
              },
              {
                "text_en": "To us who are alive, may God grant pardon for our sins, and to all the dead, a place of light and peace.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:for_the_dead:petition:2:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "Amen.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:for_the_dead:petition:3:text"
                },
                "sp_en": "ALL"
              },
              {
                "text_en": "So may we all live happily for ever with Christ, whom we believe truly rose from the dead.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:for_the_dead:petition:4:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "Amen.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:for_the_dead:petition:5:text"
                },
                "sp_en": "ALL"
              },
              {
                "text_en": "And may the blessing of almighty God, the Father, and the Son, ✠ and the Holy Spirit, come down on you and remain with you for ever.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:for_the_dead:ending:2:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "Amen.",
                "__massEditorPairKeys": {
                  "text_en": "blessing:for_the_dead:ending:1:text"
                },
                "sp_en": "ALL"
              }
            ]
          }
        }
      }
    },
    {
      "path": [
        30
      ],
      "value": {
        "id": "4.3 dismissal",
        "type": "selectable",
        "header": {
          "en": "Dismissal"
        },
        "variants": {
          "A": {
            "label": {
              "en": "Form I"
            },
            "lines": [
              {
                "text_en": "Go and announce the Gospel of the Lord.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "Thanks be to God.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                },
                "sp_en": "ALL"
              }
            ]
          },
          "B": {
            "label": {
              "en": "Form II"
            },
            "lines": [
              {
                "text_en": "Thanks be to God.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "ALL"
              }
            ]
          },
          "C": {
            "label": {
              "en": "Form III"
            },
            "lines": [
              {
                "text_en": "Go in peace, glorifying the Lord by your life.",
                "__massEditorPairKeys": {
                  "text_en": "0:text"
                },
                "sp_en": "P."
              },
              {
                "text_en": "Thanks be to God.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                },
                "sp_en": "ALL"
              }
            ]
          },
          "D": {
            "label": {
              "en": "Form IV"
            },
            "lines": [
              {
                "text_en": "Go forth, the Mass is ended. ",
                "__massEditorPairKeys": {
                  "text_en": "0:text:segment:0"
                },
                "sp_en": "P."
              },
              {
                "rubric_en": "Or ",
                "__massEditorPairKeys": {
                  "rubric_en": "0:rubric"
                },
                "rubricInset_en": true
              },
              {
                "text_en": " Go in peace.",
                "__massEditorPairKeys": {
                  "text_en": "0:text:segment:1"
                }
              },
              {
                "text_en": "Thanks be to God.",
                "__massEditorPairKeys": {
                  "text_en": "1:text"
                },
                "sp_en": "ALL"
              }
            ]
          }
        }
      }
    },
    {
      "path": [
        31
      ],
      "value": {
        "id": "4.4 final_song",
        "type": "part",
        "header": {
          "en": "The Recessional Hymn"
        },
        "lines": [
          {
            "rubric_en": "Singing a Recessional Hymn.",
            "__massEditorPairKeys": {
              "rubric_en": "0:rubric"
            }
          },
          {
            "rubric_en": "If any liturgical action follows immediately, the rites of dismissal are omitted.",
            "__massEditorPairKeys": {
              "rubric_en": "1:rubric"
            }
          }
        ]
      }
    }
  ];
  // MASS_DATA_EDITOR_OVERRIDES_END
  function applyOrdinaryEditorOverrides(target) {
    ordinaryEditorOverrides.forEach(override => {
      if (override.layout) {
        let row = target.find(item => item && item.id === override.layout.entryId);
        for (const part of override.layout.path) row = row && row[part];
        if (!row) throw new Error('Mass editor layout path is stale');
        if (override.value) row[override.layout.field] = JSON.parse(JSON.stringify(override.value));
        else delete row[override.layout.field];
        return;
      }
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
        if (!entry) throw new Error(`Australia Mass editor entry is missing: ${override.create.entryId}`);
        let rows = entry;
        for (const part of override.create.relativePath) {
          if (rows[part] === undefined) rows[part] = part === 'lines' || part === 'content' ? [] : {};
          rows = rows[part];
        }
        if (!Array.isArray(rows)) throw new Error(`Australia Mass editor block is invalid: ${override.create.entryId}`);
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
        if (!row || typeof row !== 'object') throw new Error(`Australia Mass editor rename path is stale: ${JSON.stringify(override.rename.rowPath)}`);
        const fromField = override.rename.fromField;
        const toField = override.rename.toField;
        if (!Object.prototype.hasOwnProperty.call(row, fromField) && !Object.prototype.hasOwnProperty.call(row, toField)) throw new Error(`Australia Mass editor rename field is stale: ${fromField}`);
        if (fromField !== toField) delete row[fromField];
        row[toField] = String(override.value ?? '');
        const keys = Object.assign({}, row.__massEditorPairKeys);
        delete keys[fromField];
        keys[toField] = override.rename.rowKey;
        row.__massEditorPairKeys = keys;
        return;
      }
      if (override.path?.length === 1 && override.value && typeof override.value === 'object' && !Array.isArray(override.value)) {
        const entry = target[override.path[0]];
        if (!entry || entry.id !== override.value.id) throw new Error('Mass editor entry snapshot is stale');
        Object.keys(entry).forEach(key => { delete entry[key]; });
        Object.assign(entry, JSON.parse(JSON.stringify(override.value)));
        return;
      }
      const editPath = Array.isArray(override.path) ? override.path : [];
      let parent = target;
      for (const part of editPath.slice(0, -1)) parent = parent && parent[part];
      const field = editPath[editPath.length - 1];
      if (!parent || !Object.prototype.hasOwnProperty.call(parent, field)) {
        throw new Error(`Australia Mass editor override path is stale: ${JSON.stringify(editPath)}`);
      }
      parent[field] = String(override.value ?? '');
    });
    return target;
  }
  const ordinary = cloneFrozen(applyOrdinaryEditorOverrides(structureEnglishOrdinary(englishMissal.ordinary)));
  const romanMissalProperData = cloneFrozen(englishMissal.romanMissalProperData);
  const SOURCE = Object.freeze({
    ordinary: 'https://www.icelweb.org/RomanMissal.htm',
    calendar: 'https://universalis.com/australia/-700/calendar.htm',
    readings: 'https://universalis.com/australia/calendar.htm',
    liturgyBrisbane: 'https://www.liturgia.com.au/for-parishes',
    australiaDay: 'https://www.liturgybrisbane.net.au/resources/liturgy-lines/new-mass-prayers-for-australia-day/',
    anzacDay: 'https://litedliturgybrisbane.weebly.com/anzac-day-and-easter.html',
    maryMacKillop: 'https://www.liturgybrisbane.net.au/media/1174/mary-of-the-cross-texts-for-mass-and-liturgy-of-hours.pdf',
    ourLadyHelp: 'https://responsorialpsalmcatholic.wordpress.com/2022/01/01/24th-of-may-solemnity-of-our-lady-help-of-christians-australia-gospel-reading-john-1925-27-or-alternative-gospel-reading-luke-139-56/',
    ourLadyHelpCollect: 'https://stmaryscathedral.org.au/wp-content/uploads/2020/05/Our-Lady-Help-of-Christians-2020.pdf'
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
  const ourLadyHelpOfChristians = proper('Our Lady, Help of Christians, Patroness of Australia', '오스트레일리아의 수호자, 도움이신 마리아', 'solemnity', 'white', {
    entrance: `Hail, holy Mother, who gave birth to the King,
who rules heaven and earth for ever.`,
    collect: `Almighty ever-living God,
who placed the love of Our Lady, Help of Christians
in the hearts of those who brought the Catholic faith to these shores,
grant, through her intercession,
wisdom to our leaders and integrity to our citizens,
so that, under her protection,
Australia may know harmony, justice and peace.
Through our Lord Jesus Christ, your Son,
who lives and reigns with you in the unity of the Holy Spirit,
one God, for ever and ever.`,
    prayer_offerings: `Look, O Lord, upon the prayers and offerings of your faithful,
presented in commemoration of Blessed Mary, the Mother of God,
that they may be pleasing to you
and may confer on us your help and forgiveness.
Through Christ our Lord.`,
    preface: `It is truly right and just, our duty and our salvation,
always and everywhere to give you thanks,
Lord, holy Father, almighty and eternal God,
and to praise, bless, and glorify your name
on the feast day of the Blessed ever-Virgin Mary.
For by the overshadowing of the Holy Spirit
she conceived your Only Begotten Son,
and without losing the glory of virginity,
brought forth into the world the eternal Light,
Jesus Christ our Lord.
Through him the Angels praise your majesty,
Dominions adore and Powers tremble before you.
Heaven and the Virtues of heaven
and the blessed Seraphim worship together with exultation.
May our voices, we pray, join with theirs in humble praise,
as we acclaim:`,
    communion: `Blessed are you, O Virgin Mary,
by the Lord God Most High,
above all women on the earth;
for he has so exalted your name,
that your praise shall be undying on our lips.`,
    prayer_after: `Refreshed by this heavenly sacrament,
Lord God, we pray for Australia, our earthly home,
that, with the help of the Virgin Mary,
we may become a new creation in Jesus Christ,
who lives and reigns for ever and ever.`
  }, {
    sourceUrl: SOURCE.ourLadyHelp,
    collectSourceUrl: SOURCE.ourLadyHelpCollect
  });
  const australiaDay = proper('Australia Day', '오스트레일리아의 날', 'optional', 'white', {
    collect: `Grant, we pray, O Lord our God,
that as the Cross shines in our southern skies,
so may Christ bring light to our nation, to its peoples old and new,
and by saving grace, transform our lives.`,
    prayer_offerings: `As we come before you with the fruits of the earth,
tended by our hands, O Lord,
we pray that these offerings may bring a blessing on our land
and peace to all who dwell here.`,
    preface: `For from ancient times you made this land a home for many peoples,
and became their rock of strength;
when they were hungry, you gave them food,
and when thirsty, water even in the desert.
To all, your providence has proclaimed the Good News
of Jesus Christ, your Son,
sent by you to be the Saviour of all the world,
who has brought peace by his sacrifice on the Cross.`,
    prayer_after: `May our partaking of this sacrificial meal, O Lord,
grant us strength to walk together in the ways of justice,
and behold one day the new heavens and new earth
you prepare for us in Christ your Son.`
  }, {
    sourceUrl: SOURCE.australiaDay
  });
  const anzacDay = proper('ANZAC Day', '앤잭 데이', 'optional', 'white', {
    collect: `Almighty everlasting God,
who sent your Son to die that we might live,
grant, we pray, eternal rest
to those who gave themselves
in service and sacrifice for their country.
Through our Lord Jesus Christ, your Son,
who lives and reigns with you in the unity of the Holy Spirit,
one God, for ever and ever.`,
    prayer_offerings: `Grant, O heavenly Father,
that the sacrifice of Christ,
who laid down his life for his friends,
may raise all those who have died in war
to the victory of eternal life.
Through Christ our Lord.`,
    communion: `Greater love has no one
than to lay down his life for his friends, says the Lord.`,
    prayer_after: `By our communion with this Sacrament, O Lord,
grant us, we pray, fortitude in the cause of right,
and may our remembrance of those who have died in war
make us ardent defenders of your peace.
Through Christ our Lord.`
  }, {
    sourceUrl: SOURCE.anzacDay
  });
  const maryMacKillop = proper('Saint Mary of the Cross (MacKillop), Virgin', '십자가의 성녀 마리아 매킬롭 동정', 'solemnity', 'white', {
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
  const calendar = Object.freeze({
    '01-26': Object.freeze([australiaDay]),
    '03-17': Object.freeze([proper('Saint Patrick, Bishop and Missionary', '성 파트리치오 주교 선교사', 'solemnity', 'white', {}, {
      sourceUrl: SOURCE.calendar
    })]),
    '04-25': Object.freeze([anzacDay]),
    '04-28': Object.freeze([proper('Saint Peter Chanel, Priest and Martyr', '성 베드로 샤넬 사제 순교자', 'memorial', 'red', {}, {
      sourceUrl: SOURCE.calendar
    })]),
    '07-07': Object.freeze([proper('Saint Peter To Rot, Martyr', '성 베드로 토 로트 순교자', 'optional', 'red', {}, {
      sourceUrl: SOURCE.calendar
    })]),
    '08-08': Object.freeze([maryMacKillop])
  });
  function sameDay(left, right) {
    return left && right && left.getFullYear() === right.getFullYear() && left.getMonth() === right.getMonth() && left.getDate() === right.getDate();
  }
  function dynamicCalendar(date, context = {}) {
    const nominal = new Date(date.getFullYear(), 4, 24, 12);
    const pentecost = context.easter ? new Date(context.easter.getFullYear(), context.easter.getMonth(), context.easter.getDate() + 49, 12) : null;
    const observed = nominal.getDay() === 0 || sameDay(nominal, pentecost) ? new Date(date.getFullYear(), 4, 25, 12) : nominal;
    if (sameDay(date, observed)) return [ourLadyHelpOfChristians];
    if (!sameDay(observed, nominal) && sameDay(date, nominal)) return [{
      suppressUniversalFixed: true
    }];
    return [];
  }
  global.countryMassData.AU = Object.freeze({
    schemaVersion: 2,
    jurisdiction: 'AU',
    jurisdictions: Object.freeze(['AU']),
    jurisdictionName: 'Australia',
    conferenceCalendar: 'Australian Catholic Bishops Conference',
    ordinaryLanguage: 'EN',
    ordinary,
    ordinaryStructure: 'paragraph-rubric-choices-v1',
    romanMissalProperData,
    ordinaryEdition: 'Roman Missal, Third Edition — approved English text for Australia',
    ordinarySource: Object.freeze({
      authority: 'ICEL / Australian Catholic Bishops Conference',
      url: SOURCE.ordinary
    }),
    beta: true,
    source: SOURCE,
    dailyReadings: Object.freeze({
      provider: 'Universalis',
      calendar: 'Australia',
      translation: 'Jerusalem Bible / Grail Psalms',
      parser: 'strict-english-daily-mass',
      officialCalendarUrl: SOURCE.calendar,
      url: dateKey => `https://universalis.com/australia/${dateKey}/mass.htm`
    }),
    properSources: Object.freeze({
      generalRomanMissal: englishMissal.romanMissalProperData.source,
      nationalCalendar: SOURCE.calendar,
      completeDailyMissalReference: SOURCE.liturgyBrisbane,
      australiaDay: SOURCE.australiaDay,
      anzacDay: SOURCE.anzacDay,
      maryMacKillop: SOURCE.maryMacKillop,
      ourLadyHelpOfChristians: SOURCE.ourLadyHelp
    }),
    calendar,
    dynamicCalendar
  });
})(globalThis);
