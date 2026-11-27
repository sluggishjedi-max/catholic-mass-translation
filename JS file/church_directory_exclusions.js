(function (root) {
  'use strict';

  // Sources for scope: DDF decree (2 July 2026), Gwangju archdiocesan
  // directives on Naju, and the Brooklyn diocesan declaration on Bayside.
  // Match specific affiliations and locations. A saint's dedication alone
  // is common to diocesan parishes and independent chapels.
  const operatorName = /\b(?:f?sspx|mcspx|(?:priestly\s+)?(?:society|fraternity)\s+of\s+(?:st\.?|saint)\s+pius\s+(?:x|10)|(?:fraternit[aàée]|fraternidad|fraternidade)\s+(?:sacerdotal[e]?\s+)?(?:(?:san|saint|sao|de\s+sao)\s*[- ]?\s*(?:pio|pie))\s*[- ]?\s*x|priesterbruderschaft\s+(?:st\.?\s+)?pius\s*x)\b|성?\s*비오\s*(?:10|십|x)\s*세\s*(?:회|사제\s*형제회|마리아\s*군단)|聖?ピオ\s*(?:十|10)\s*世会|聖(?:庇護|比約)\s*(?:十|10)\s*世(?:會|司鐸兄弟會)|huynh\s+doan\s+(?:linh\s+muc\s+)?(?:thanh\s+)?pio\s*(?:x|10)\b/u;
  const najuName = /마리아의\s*구원\s*방주|(?:나주\s*(?:윤\s*)?율리아|윤\s*율리아)|\bnaju\s+(?:mary(?:\s+shrine)?|(?:our lady|blessed mother)(?:s)?\s+(?:shrine|mountain|house|chapel))\b|\bour lady of naju\b|\bmarys?\s+ark\s+of\s+salvation\b/u;
  const najuFacility = /성모(?:님)?\s*(?:경당|동산|의\s*집)|(?:our lady|blessed mother)(?:s)?\s+(?:shrine|mountain|house|chapel)/u;
  const baysideFacility = /\bour lady of the roses(?: shrine)?\b|베이\s*사이드\s*발현/u;
  const operatorDomain = /(?:^|\.)(?:f?sspx\.[a-z]{2,}(?:\.[a-z]{2})?|fsspx-sudamerica\.org|immaculata\.jp|najumary\.(?:or\.kr|org|com)|marysarkofsalvation\.org)$/iu;

  // Published permanent locations or recurring Mass venues from the US
  // district's own directory. Match the street plus city/state or ZIP.
  // https://sspx.org/en/list-of-sspx-chapels
  const usAddresses = [
    ["100 Boulevard","Hudson Falls","NY","12839"],
    ["1001 Foster Street Extension","South Windsor","CT","06074"],
    ["103 Gould Avenue","North Caldwell","NJ","07006"],
    ["10540 Collierville Rd","Collierville","TN","38017"],
    ["108 Horseshoe Bend Beach Road","Mount Holly","NC","28120"],
    ["1090 W Laurel Street","Colton","CA","92324"],
    ["11 West Sycamore","Arcadia","CA","91006"],
    ["1100 W. Duarte Road","Arcadia","CA","91007"],
    ["112 S. Van Buren Street","Bay City","MI","48708"],
    ["1126 Dolman Street","Saint Louis","MO","63104"],
    ["11352 Brown Street","Allendale","MI","49401"],
    ["11485 N. Farley Road","Platte City","MO","64079"],
    ["1200 N. Clark Street","Mexico","MO","65265"],
    ["12028 E. Turquoise Circle","Dewey","AZ","86327"],
    ["12120 Mc Coy's Fork Road","Walton","KY","41094"],
    ["12371 Keno Worden Road","Keno","OR","97627"],
    ["1240 Matha Avenue","Louisville","KY","40215"],
    ["130 Old Liberty Pike","Franklin","TN","37064"],
    ["13400 NE 28th St","Vancouver","WA","98682"],
    ["1401 W. Yandell Drive","El Paso","TX","79902"],
    ["1402 E. 10th Street","Eddystone","PA","19022"],
    ["1409 E. Meyer Boulevard","Kansas City","MO","64131"],
    ["142 Joseph Blane Road","Silver City","NM","88061"],
    ["1460 5th Ave E","Dickinson","ND","58601"],
    ["1505 W. Atlantic Street","Springfield","MO","65803"],
    ["1565 S. White Road","San Jose","CA","95127"],
    ["1575 E. Windmill Lane","Las Vegas","NV","89123"],
    ["16-291 Maile St.","Keaau","HI","96749"],
    ["1749 Spruce Avenue","Chico","CA","95926"],
    ["1781 190th Street","Bremer","IA","50677"],
    ["1782 Chapelle Rue","De Pere","WI","54115"],
    ["18 Cherokee Trail","Silver City","NM","88061"],
    ["1800 South Washington Ave.","Wichita","KS","67211"],
    ["1841 N. White Street","Youngsville","NC","27587"],
    ["18910 Ellipse Loop","Long Prairie","MN","56347"],
    ["19101 Bear Creek Road","Los Gatos","CA","95033"],
    ["1950 Bartram Rd.","Jacksonville","FL","32207"],
    ["200 E. Mission Street","St. Marys","KS","66536"],
    ["20274 W. Riverview Drive","Post Falls","ID","83854"],
    ["204 6th Avenue N.","Edmonds","WA","98020"],
    ["20418 Hwy 54","Louisiana","MO","63353"],
    ["209 Tackora Trail","Ridgefield","CT","06877"],
    ["215 East Mulberry St.","Goldsboro","NC","27530"],
    ["221 W. Elm Street","New Plymouth","ID","83655"],
    ["231 McKinley Parkway","Buffalo","NY","14220"],
    ["2342 Valley Road","Mancelona","MI","49659"],
    ["23511 Armada Center Road","Armada","MI","48005"],
    ["24001 Aldine Westfield Road","Spring","TX","77373"],
    ["245 W Broadway Street","Greenwood","IN","46142"],
    ["25 Chapel Road","Bethlehem","WV","26003"],
    ["25269 E Bolton Road","Veneta","OR","97487"],
    ["2552 Kentucky Avenue","Kenner","LA","70062"],
    ["2656 Warners Road","Warners","NY","13164"],
    ["2730 Mall View Road","Bakersfield","CA","93306"],
    ["277 South Watkins Road","Watkins","CO","80137"],
    ["290 E. County Road 56","Fort Collins","CO","80524"],
    ["2935 Chenoweth Road","Akron","OH","44312"],
    ["3001 W. Golf Course Road","Midland","TX","79701"],
    ["3086 W Streetsboro Rd","Richfield","OH","44286"],
    ["3106 Flora Avenue","Kansas City","MO","64109"],
    ["316 Hoffman Way","Grants Pass","OR","97526"],
    ["32100 E. Colfax Service Road","Watkins","CO","80137"],
    ["326 S. Main St.","Pittsburgh","PA","15220"],
    ["337 Trippany Road","Massena","NY","13662"],
    ["3427 State Hwy 11B","Nicholville","NY","12965"],
    ["3475 N. Sherwood Forest Boulevard","Baton Rouge","LA","70814"],
    ["349 Third Street NE","Cass Lake","MN","56633"],
    ["3600 S. Gaffey Street","San Pedro","CA","90731"],
    ["376 Prospect Avenue","Fort Myers","FL","33905"],
    ["37745 Church Ave","Dade City","FL","33525"],
    ["38100 Five Mile Road","Livonia","MI","48154"],
    ["3900 Scruggs Drive","North Richland Hills","TX","76180"],
    ["3945 Fairview Drive","Carson City","NV","89701"],
    ["4027 S. Wilbur Road","Spokane","WA","99206"],
    ["406 Shady Drive","Endwell","NY","13760"],
    ["410 Washington Boulevard","Oak Park","IL","60302"],
    ["4100 Highway 3","Dickinson","TX","77539"],
    ["425 Grand Avenue","Mukwonago","WI","53149"],
    ["426 County Road 152","Clayton","TX","75633"],
    ["430 8th Avenue S.","Saint Cloud","MN","56301"],
    ["438 Hobron Lane","Honolulu","HI","96815"],
    ["439 Boston Post Rd","Weston","MA","02493"],
    ["4524 Garfield Avenue","Carmichael","CA","95608"],
    ["4580 SW 65th Avenue","Davie","FL","33314"],
    ["4701 N. McMillan Avenue","Bethany","OK","73008"],
    ["472 Beaver Road","Walton","KY","41094"],
    ["4800 S Calhoun St","Fort Wayne","IN","46807"],
    ["4805 Mercury St. Suite J","San Diego","CA","92111"],
    ["4911 Dodge St","Omaha","NE","68132"],
    ["495 N Lincoln Street","Post Falls","ID","83854"],
    ["500 Morrill Street","Gilford","NH","03249"],
    ["501 Wayland Rd","Kingsford Heights","IN","46346"],
    ["5065 Olivet Rd","Georgetown","IL","61846"],
    ["509 21st Street","West Palm Beach","FL","33407"],
    ["5217 Futura Avenue","Richmond","VA","23231"],
    ["525 Lawrence Avenue","Girard","OH","44420"],
    ["5267 John Marshall Hwy","Linden","VA","22642"],
    ["540 W. 8th Street","Browerville","MN","56438"],
    ["550 Riverview Avenue","Sanford","FL","32771"],
    ["5549 Leopard Street","Corpus Christi","TX","78408"],
    ["57575 Romeo Plank Rd.","Ray Township","MI","48096"],
    ["5800 Ouray Road NW","Albuquerque","NM","87120"],
    ["5801 Mt. Carmel Drive","Arlington","TX","76017"],
    ["5820 57th Ave NE","Bismarck","ND","58503"],
    ["600 E. Roberts Street","Crookston","MN","56716"],
    ["6039 Baltes Road","Waunakee (Springfield Twnshp)","WI","53597"],
    ["62 Broad Street","Pittston","PA","18640"],
    ["6401 Boone Road,  2nd Floor Purple Rm","Bryant","AR","72022"],
    ["66110 Vortisch Rd","Lacombe","LA","70445"],
    ["68 County Route 55","Nicholville","NY","12965"],
    ["686 Scenic Gulf Drive","Miramar Beach","FL","32550"],
    ["7011 W. Addison Street","Chicago","IL","60634"],
    ["715 Hardscrabble Road","Roswell","GA","30075"],
    ["750 E. Baseline Road","Phoenix","AZ","85042"],
    ["7604 S Osborne Road","Upper Marlboro","MD","20772"],
    ["7653 Cranberry Road","Anchorage","AK","99502"],
    ["777 221st Avenue N.W.","Oak Grove","MN","55011"],
    ["7815 Orland Park","San Antonio","TX","78213"],
    ["81525 Hwy 3","St Maries","ID","83861"],
    ["820 Saint John's Avenue","Browerville","MN","56438"],
    ["8616 N Dixie Dr","Dayton","OH","45414"],
    ["875 Manomin Avenue S.","Saint Paul","MN","55107"],
    ["890 Foy's Canyon Road","Kalispell","MT","59901"],
    ["900 Horseblock Road","Farmingville","NY","11738"],
    ["9621 Bixby Ave","Garden Grove","CA","92841"],
    ["N11190 17th Ave","Necedah","WI","54646"]
  ];

  const districtAddresses = [
    // https://fsspx.uk/en/chapels-directory
    ["10-14 Union Terrace","AB10 1WE"],
    ["Connaught Gardens","N37 E671","Corpus Christi Church"],
    ["78 Andersonstown Road","Belfast"],
    ["Market Street","BD16 2HP","The Little House"],
    ["Saint Agnes Avenue","BS4 2DU","Saint Saviour's Chapel & Retreat House"],
    ["Harts Lane","RG20 9JW","Saint Michael Archangel Church"],
    ["31","ML8 4HE"],
    ["Shanakiel Road","T23 T389","Our Lady of the Rosary Church"],
    ["Colleton Manor Chapel","EX18 7JS","Colleton Manor Chapel"],
    ["Mounttown Road Lower","A96 P793","Saint John the Evangelist Church"],
    ["110 Saint Leonard's Street","EH8 9RD"],
    ["Gladstone Terrace West","NE8 4DR","Church of the Holy Name of Jesus"],
    ["202 Renfrew Street","G3 6TX"],
    ["Station Road","TN3 9QX","Church of Saint Pius V"],
    ["Herne Street","CT6 7HR","Church of Saints John Fisher and Thomas More"],
    ["Ness Walk","IV3 5SF","Royal Northern Infirmary Chapel"],
    ["Waterford Rd","R95 RR27","St Joseph's Chapel"],
    ["29 Abingdon Road","LE2 1HA"],
    ["35 Upper Parliament Street","L8 7LA"],
    ["Salterton Road","N7 6BB","Church of Saints Joseph and Padarn"],
    ["125 Arthur Road","SW19 7DR"],
    ["16 Deer Park Road","M16 8FR"],
    ["Main Street","Co. Monaghan","Monaghan Mass Centre"],
    ["Unit 5 Richbrook Business Park","Newry","Our Lady of Knock & St Patrick Chapel"],
    ["East Cliff","PR1 3JH","Church of Our Lady of Victories"],
    ["12 Ribblesdale Place","PR1 3NA"],
    ["259 Conway Road","LL28 5AA"],
    ["Court Devenish","N37 NF77","Saint Joseph’s House"],
    ["King Harald Street","ZE1 0EQ","Shetland Mass Centre"],
    ["12 Tivoli Terrace South","A96 KV65"],
    ["Stronsay","KW17 2AS","Saint Columba's House"],
    ["17 South Street","TA1 3AA"],
    ["Sandy Lane","GU22 8BA","Church of the Holy Cross"],
    // https://fsspx.de/de/priorate-und-messzentren
    ["Pannesheiderstraat 71","6462 EB"],
    ["Keltenstraße 9","86343"],
    ["Ulmenweg 4","74177"],
    ["Friedrichstr. 13","96047"],
    ["Dillenburger Straße 4","14199"],
    ["Bundesstraße 309","87477"],
    ["Kaiser-Karl-Ring 32 a","53111"],
    ["Kesselsdorfer Str. 90a","01159"],
    ["Bottroper Straße 295","45356"],
    ["Pappelweg 75-77","76275"],
    ["Wiecherstraße 2b","79114"],
    ["Horaser Weg 99","36039"],
    ["Biberacher Str. 2","88527"],
    ["Hagstedt 142","49429"],
    ["Alsterdorfer Str. 210","22297"],
    ["Lange Feld Str. 63","30926"],
    ["Schulstraße 7","65795"],
    ["Friedegasse 9","99428"],
    ["Dr. Hiemer Straße 3","84503"],
    ["Brettbuschgasse 4","87600"],
    ["St.-Judas-Thaddäus-Weg 1","63839"],
    ["Bahnhofsweg 6","56073"],
    ["Th.-Fontane-Str. 7","83059"],
    ["Steinmetzstr. 34","51103"],
    ["Tannenäckerle 1","78730"],
    ["Am Nordbahnhof 20","59555"],
    ["Teramostr. 2a","87700"],
    ["Johann-Clanze-Straße 100","81369"],
    ["Mandelring 36","67433"],
    ["Angerzeile, 14","90513"],
    ["Werderstraße 2","77654"],
    ["Zaitzkofen 15","84069"],
    ["Maienfeld 5","88477"],
    ["Im Staudfuss 9","72770"],
    ["Kronenstraße 2","79365"],
    ["Julius-Kiefer-Straße 11","66119"],
    ["St. Vinzenzstrasse 2","53809"],
    ["Lienberg 61","78713"],
    ["Fischergasse 12","73525"],
    ["Stuttgarter-Straße 24","70469"],
    ["Neunkircherstr. 71","66780"],
    ["Robert-Bosch-Str. 58","83374"],
    ["Ruwerer Str. 25 a","54292"],
    ["Litscherweg 2","88662"],
    ["Bürgermeister-Neff-Str. 15","68519"],
    // https://fsspx.asia/en/list-sspx-chapels-1
    ["286 Upper Thomson Road","Singapore"],
    ["1-3A","Selangor","Chapel of the Sacred Heart of Jesus"],
    ["Suria Inanam Commercial Center","Sabah","Immaculate Conception Chapel"],
    ["2nd floor","Sarawak","Chapel of St. Peter"],
    ["525 Colombo Main Road","Negombo","Our Lady of Guadalupe Church"],
    ["Azumacho 2−256-8","Saitama City","Holy Japanese Martyrs Chapel"],
    ["11-5 Sakuragaoka Minamimachi","569-0818","Immaculate Heart of Mary Chapel"],
    ["2-chōme-3 Iwatsukachō","453-0862","St. Francis Xavier Chapel"],
    ["Tsim Sha Tsui","Kowloon","Immaculata Mission"],
    ["Seocho-dong 1697-12","Seoul","Immaculate Conception Chapel"],
    ["2 Cannon Road","Quezon City"],
    ["230 Lower Pinget","Baguio City","Saint Anthony's Mission"],
    ["Brgy. Alejos","Leyte","Saint Joseph Chapel"],
    ["The President Hotel","Lingayen","Saint Therese of the Child Jesus Mission"],
    ["San Vincente Street","Southern Leyte","Holy Rosary Chapel"],
    ["Ormoc","Leyte","Saint Marcellus Chapel"],
    ["Brgy Zone 2","Southern Leyte","San Isidro Labrador Chapel"],
    ["Sagkahan","Tacloban City","Holy Family Chapel"],
    ["Sampaloc Brgy","Rizal","Saint Philomena Chapel"],
    ["Purok 7","Iloilo","St. Bernard Novitiate - Church of the Immaculate Heart of Mary"],
    ["Purok Baglaum","Bacolod City","Immaculada Concepcion Church"],
    ["Brgy. Balit","Capiz","Saint Anthony Chapel"],
    ["San Jose Village Opao","Mandaue City","Saint Pius V Chapel"],
    ["N. Valencia","Guimaras","Chapel of the Sacred Heart"],
    ["By Pass Road","Iloilo City","Our Lady of Consolation & Saint Joseph Ch."],
    ["BPSTEA Building","Tagbilaran City","Our Lady Guardian of the Faith Chapel"],
    ["4J9F+X3V","Davao City","Saint Joseph Priory"],
    ["Brgy Mahogany","Butuan City","Santa Lucia Chapel"],
    ["3rd floor - Vamenta Bldg","Cagayan de Oro City","Our Lady Help of Christians Chapel"],
    ["Lao Reception Bldg.","Camiguin","Saint Pius X Mission"],
    ["Rosary Street","General Santos City","Our Lady of Rosa Mystica and Saint Joseph Church"],
    ["Saint Michael's Memorial Park","Iligan City","Saint Pius X Mission"],
    ["Upper Paredez","Koronadal City","Saint Michael's Chapel"],
    ["Ceniza Heights","Surigao City","Our Lady of Sorrows Mission"],
    ["Lenueva Village","Tagum City","Saint Anthony de Padua Chapel"],
    ["Phase 1 Block 5 Lot 3","Zamboanga City","Saint Pius X Mission"],
    ["8A/3 Seevalaperi Rd.","Tamil Nadu","Priory of the Most Sacred Heart"],
    ["6/128","Tamil Nadu","Society of Servi Domini"],
    ["Near Parish Church","Tamil Nadu","Saint Anthony's Chapel"],
    ["Christurajapuram","Tamil Nadu","Christ the King Church"],
    ["Annai Illam","Tamil Nadu","Coonoor"],
    ["H/N 524","Goa","Our Lady of Guadalupe Chapel"],
    ["Pudhu Girama Street","Tamil Nadu","Saint Anthony's Chapel"],
    ["33 Cathedral Road","Tamil Nadu","Saint Anthony's Shrine"],
    ["Bassein","Maharashtra","Saint Bartholomew's Mission"],
    ["88 B Vettivelpuram","Tamil Nadu","Saint Francis Xavier Chapel"],
    ["No. 3rd Street","Tamil Nadu","Saint Joseph's Chapel"],
    ["Near SP Camp Office","Tamil Nadu","Saint Thomas the Apostle Chapel"]
  ];

  function normalize(value) {
    return String(value ?? '').normalize('NFKD').replace(/[\u0300-\u036f]/gu, '')
      .replace(/[’']/gu, '').replace(/ß/gu, 'ss').toLowerCase().normalize('NFC');
  }

  function addressWords(value) {
    const abbreviations = {
      street: 'st', avenue: 'ave', road: 'rd', boulevard: 'blvd', drive: 'dr',
      highway: 'hwy', court: 'ct', lane: 'ln', circle: 'cir', trail: 'trl',
      parkway: 'pkwy', place: 'pl', mount: 'mt', north: 'n', south: 's',
      saint: 'st', saints: 'st', str: 'strasse', east: 'e', west: 'w', northeast: 'ne', northwest: 'nw', southeast: 'se', southwest: 'sw'
    };
    return ' ' + normalize(value).replace(/[^a-z0-9]+/gu, ' ').trim()
      .split(/\s+/u).map(word => abbreviations[word] || word).join(' ') + ' ';
  }

  const usStreets = new Map();
  for (const [street, city, state, zip] of usAddresses) {
    const key = addressWords(street).trim().split(' ')[0];
    if (!usStreets.has(key)) usStreets.set(key, []);
    usStreets.get(key).push({ street: addressWords(street), locality: addressWords(city + ' ' + state), zip: ' ' + zip + ' ' });
  }

  const districtLocations = districtAddresses.map(([street, locality, name]) => ({
    street: addressWords(street), locality: addressWords(locality), name: name ? addressWords(name) : ''
  }));

  function matches(place) {
    if (!place) return false;
    const name = normalize([place.name, place.displayName, place.directoryName, place.officialDirectoryName,
      ...(place.aliases || [])].filter(Boolean).join(' '));
    const address = normalize([place.address, place.formattedAddress, place.formatted_address, place.vicinity]
      .filter(Boolean).join(' '));
    const operator = normalize([place.operator, place.affiliation, place.sourceAuthority, place.diocese].filter(Boolean).join(' '));
    if ([name, address, operator].some(value => operatorName.test(value))) return true;
    if ([place.website, place.websiteURI, place.sourceUrl, place.officialDioceseUrl].some(value => {
      if (!value) return false;
      try { return operatorDomain.test(new URL(value).hostname); } catch { return false; }
    })) return true;
    if (najuName.test(name) || (najuFacility.test(name) && /나주|\bnaju\b/u.test(name + ' ' + address))) return true;
    if (/나주|\bnaju(?:-si)?\b/u.test(address) && /나주천\s*2\s*길[,\s]*12(?:\D|$)|신광로[,\s]*425(?:\D|$)|\b12[,\s]+najucheon[ -]*2[ -]*gil\b|\b425[,\s]+singwang[ -]*ro\b/u.test(address)) return true;
    if (baysideFacility.test(name) && /bayside|flushing|new york|베이\s*사이드/u.test(name + ' ' + address)) return true;

    // Public SSPX district locators for Korea and Japan. Use the address with
    // a church name where the same building can contain unrelated listings.
    if (/성모\s*무염\s*시태|immaculate conception|無原罪の御やどり/u.test(name)
        && /서초대로\s*55\s*길[,\s]*17(?:\D|$)|서초동\s*1697[- ]12(?:\D|$)|\b17[,\s]+seocho[ -]*daero\s*55[ -]*gil\b/u.test(address)) return true;
    if (/聖なる日本の殉教者聖堂|holy japanese martyrs chapel/u.test(name)) return true;
    if (/聖母の汚れなき御心聖堂|immaculate heart of mary chapel/u.test(name)
        && /高槻|takatsuki|桜ケ丘南町|sakuragaoka minamimachi/u.test(address)) return true;
    if (/\bstella matutina priory\b/u.test(name) && /埼玉|さいたま|saitama/u.test(address)) return true;

    if (!address) return false;
    const words = addressWords(address);
    const title = addressWords(name);
    if (districtLocations.some(row => words.includes(row.street) && words.includes(row.locality) &&
        (!row.name || title.includes(row.name)))) return true;
    for (const number of new Set(words.match(/\b[a-z]*\d+[a-z]*\b/gu) || [])) {
      if (usStreets.get(number)?.some(row => words.includes(row.street) &&
          (words.includes(row.locality) || words.includes(row.zip)))) return true;
    }
    return false;
  }

  root.ordoChurchDirectoryExclusions = Object.freeze({ matches });
})(globalThis);
