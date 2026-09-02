// Germany DBK church module (Beta): cathedral seeds for the 27 dioceses and the official Bistumsatlas.
(function registerGermanyChurches(global) {
  'use strict';
  global.countryChurchData = global.countryChurchData || {};
  const directoryUrl = 'https://www.dbk.de/bistumskarte';
  const atlasUrl = 'https://www.bistumsatlas.de/';
  const source = Object.freeze({
    title: 'DBK Bistumsatlas', authority: 'Deutsche Bischofskonferenz / deutsche (Erz-)Bistümer',
    url: directoryUrl, atlasUrl,
    coverage: 'Cathedral coordinate seeds for all 27 diocesan jurisdictions; the linked Bistumsatlas contains the current nationwide diocesan facility directory.'
  });
  const entries = Object.freeze([
    ['Aachener Dom','Bistum Aachen','Domhof 1, Aachen',50.7747,6.0839],
    ['Hoher Dom zu Augsburg','Bistum Augsburg','Frauentorstraße 2, Augsburg',48.3727,10.8974],
    ['Bamberger Dom','Erzbistum Bamberg','Domplatz, Bamberg',49.8906,10.8824],
    ['St.-Hedwigs-Kathedrale','Erzbistum Berlin','Bebelplatz, Berlin',52.5157,13.3948],
    ['Kathedrale Ss. Trinitatis','Bistum Dresden-Meißen','Schloßstraße 24, Dresden',51.0542,13.7374],
    ['Dom zu Eichstätt','Bistum Eichstätt','Residenzplatz, Eichstätt',48.8916,11.1837],
    ['Erfurter Dom','Bistum Erfurt','Domstufen 1, Erfurt',50.9769,11.0237],
    ['Essener Münster','Bistum Essen','Kettwiger Straße 42, Essen',51.4558,7.0131],
    ['Freiburger Münster','Erzbistum Freiburg','Münsterplatz, Freiburg im Breisgau',47.9955,7.8522],
    ['Fuldaer Dom','Bistum Fulda','Domplatz, Fulda',50.5549,9.6725],
    ['St. Jakobus Kathedrale','Bistum Görlitz','An der Jakobuskirche 4, Görlitz',51.1467,14.9682],
    ['St. Marien-Dom Hamburg','Erzbistum Hamburg','Am Mariendom 1, Hamburg',53.5572,10.0146],
    ['Hildesheimer Dom','Bistum Hildesheim','Domhof, Hildesheim',52.1485,9.9469],
    ['Kölner Dom','Erzbistum Köln','Domkloster 4, Köln',50.9413,6.9583],
    ['Limburger Dom','Bistum Limburg','Domplatz, Limburg an der Lahn',50.3880,8.0662],
    ['Kathedrale St. Sebastian','Bistum Magdeburg','Max-Josef-Metzger-Straße 1, Magdeburg',52.1277,11.6323],
    ['Mainzer Dom','Bistum Mainz','Markt 10, Mainz',49.9989,8.2742],
    ['Frauenkirche München','Erzbistum München und Freising','Frauenplatz 12, München',48.1386,11.5735],
    ['St.-Paulus-Dom Münster','Bistum Münster','Domplatz 28, Münster',51.9630,7.6256],
    ['Dom St. Petrus Osnabrück','Bistum Osnabrück','Domhof 12, Osnabrück',52.2789,8.0431],
    ['Hoher Dom zu Paderborn','Erzbistum Paderborn','Domplatz 3, Paderborn',51.7188,8.7559],
    ['Dom St. Stephan Passau','Bistum Passau','Domplatz, Passau',48.5744,13.4657],
    ['Regensburger Dom','Bistum Regensburg','Domplatz 1, Regensburg',49.0197,12.0981],
    ['Dom St. Martin Rottenburg','Bistum Rottenburg-Stuttgart','Marktplatz, Rottenburg am Neckar',48.4760,8.9340],
    ['Speyerer Dom','Bistum Speyer','Domplatz, Speyer',49.3172,8.4420],
    ['Trierer Dom','Bistum Trier','Liebfrauenstraße 12, Trier',49.7560,6.6430],
    ['Würzburger Dom','Bistum Würzburg','Domstraße 40, Würzburg',49.7932,9.9325]
  ].map((item, index) => Object.freeze({
    name: item[0], diocese: item[1], address: item[2], lat: item[3], lng: item[4],
    country: 'DE', churchId: `DE-DBK-CATHEDRAL-${String(index + 1).padStart(2, '0')}`,
    sourceUrl: directoryUrl, officialDioceseUrl: atlasUrl, sourceName: source.title, sourceAuthority: source.authority
  })));
  global.countryChurchData.DE = Object.freeze({
    schemaVersion: 2, jurisdiction: 'DE', jurisdictions: Object.freeze(['DE']),
    conference: 'Deutsche Bischofskonferenz (DBK)', beta: true, exhaustive: false, source, entries
  });
})(globalThis);
