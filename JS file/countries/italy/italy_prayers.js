(function registerItalyPrayers(global) {
  'use strict';

  global.countryPrayerData = global.countryPrayerData || {};
  global.countryPrayerData.IT = Object.freeze({
    schemaVersion: 1,
    jurisdiction: 'IT',
    jurisdictions: Object.freeze(['IT']),
    status: 'under-development',
    statusLabels: Object.freeze({
      KR: '(제작중)',
      EN: '(Under development)',
      ZH: '(製作中)',
      IT: '(In preparazione)'
    }),
    entries: Object.freeze([
      {
        id: "335.WYD_2027",
        category: "national",
        titles: {
          IT: "Preghiera Ufficiale della GMG Seul 2027"
        },
        texts: {
          IT: "Signore che ami tutti i giovani,\nti ringraziamo per averci chiamato al tuo amore e alla tua misericordia infinita.\n\nPadre nostro, ci affidiamo a te.\nChe i giovani di tutto il mondo possano essere confortati nell’abbraccio della tua Chiesae condividere profondamente la gioia della comunione e dell’unità.\n\nSignore Gesù Cristo, tu vinci il mondo, ora e per sempre.\nPossa ogni persona scoprire la speranza che c’è nella tua chiamata ad avere coraggio,\ncomprendendo che la croce dell’amore e del perdono è la vera vittoria sul mondo.\n\nO Spirito Santo, Fiamma d’Amore,\ncon la tua mano meravigliosa\nhai seminato i semi della fede in Corea.\nAccendi nei nostri cuori la fiamma della fede dei martiri coreani,\nrendici discepoli che vivono il Vangelo della pace, \ndell’amore e della verità.\n\nSignore, ti preghiamo affinché attraverso questo pellegrinaggio della GMG\npossiamo ascoltarci l’un l’altro, discernere la tua volontà\ne diventare una Chiesa sinodale,\ncamminando insieme con tutto il popolo di Dio.\nAmen.\n\n○ Nostra Signora della misericordia e della pace,\n◎ prega per noi.\n○ Santi patroni della GMG Seul 2027,\n◎ pregate per tutti i giovani."
        },
        sourceCategory: {},
        tags: [
          "335.WYD_2027",
          "national",
          "국가별 고유 기도문",
          "Kinh Nguyện Riêng Từng Nước",
          "Local Prayers",
          "各国の祈り",
          "Preces locales",
          "Preghiera Ufficiale della GMG Seul 2027"
        ]
      }
    ])
  });
})(globalThis);
