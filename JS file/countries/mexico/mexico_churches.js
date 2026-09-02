// Mexico CEM (Beta) — metropolitan cathedral seed directory.
(function registerMexicoChurches(global) {
  'use strict';
  global.countryChurchData = global.countryChurchData || {};
  const directoryUrl = 'https://cem.org.mx/Controller/Directorio_CEM/directorio_CEM.pdf';
  const source = Object.freeze({
    title: 'Directorio CEM — Circunscripciones Eclesiásticas en la República Mexicana',
    authority: 'Conferencia del Episcopado Mexicano',
    url: directoryUrl,
    edition: '05-febrero-2026',
    coverage: 'Metropolitan cathedral seed; Appostolica remains the CEM parish-map source.'
  });
  const entries = Object.freeze([
    { name: 'Catedral de Nuestra Señora de la Soledad', diocese: 'Arquidiócesis de Acapulco', address: 'Centro, Acapulco de Juárez, Guerrero', lat: 16.881491, lng: -99.821327 },
    { name: 'Catedral Metropolitana de Nuestra Señora de la Asunción', diocese: 'Arquidiócesis de Antequera Oaxaca', address: 'Centro, Oaxaca de Juárez, Oaxaca', lat: 17.061495, lng: -96.725081 },
    { name: 'Catedral Metropolitana de Chihuahua', diocese: 'Arquidiócesis de Chihuahua', address: 'Centro, Chihuahua, Chihuahua', lat: 28.636635, lng: -106.076534 },
    { name: 'Catedral Basílica Menor de la Inmaculada Concepción', diocese: 'Arquidiócesis de Durango', address: 'Zona Centro, Durango, Durango', lat: 24.025129, lng: -104.670335 },
    { name: 'Catedral Basílica de la Asunción de María Santísima', diocese: 'Arquidiócesis de Guadalajara', address: 'Guadalajara Centro, Jalisco', lat: 20.677133, lng: -103.346969 },
    { name: 'Catedral Metropolitana de Hermosillo', diocese: 'Arquidiócesis de Hermosillo', address: 'Centro, Hermosillo, Sonora', lat: 29.075039, lng: -110.959452 },
    { name: 'Catedral Basílica de la Madre Santísima de la Luz', diocese: 'Arquidiócesis de León', address: 'Zona Centro, León, Guanajuato', lat: 21.123996, lng: -101.682009 },
    { name: 'Catedral Metropolitana de la Asunción de la Santísima Virgen María', diocese: 'Arquidiócesis Primada de México', address: 'Plaza de la Constitución, Centro Histórico, Ciudad de México', lat: 19.434482, lng: -99.13305 },
    { name: 'Catedral Metropolitana de Nuestra Señora de Monterrey', diocese: 'Arquidiócesis de Monterrey', address: 'Centro, Monterrey, Nuevo León', lat: 25.665515, lng: -100.309641 },
    { name: 'Catedral de la Transfiguración del Señor', diocese: 'Arquidiócesis de Morelia', address: 'Centro Histórico, Morelia, Michoacán', lat: 19.70225, lng: -101.192314 },
    { name: 'Catedral Basílica de la Inmaculada Concepción', diocese: 'Arquidiócesis de Puebla', address: 'Centro Histórico, Puebla, Puebla', lat: 19.04377, lng: -98.199054 },
    { name: 'Catedral Metropolitana de San Luis Rey', diocese: 'Arquidiócesis de San Luis Potosí', address: 'Plaza de Armas, Centro Histórico, San Luis Potosí', lat: 22.151047, lng: -100.976305 },
    { name: 'Catedral de Nuestra Señora de Guadalupe', diocese: 'Arquidiócesis de Tijuana', address: 'Zona Centro, Tijuana, Baja California', lat: 32.53464, lng: -117.03616 },
    { name: 'Santa Iglesia Catedral de Corpus Christi', diocese: 'Arquidiócesis de Tlalnepantla', address: 'Centro, Tlalnepantla de Baz, Estado de México', lat: 19.537768, lng: -99.194899 },
    { name: 'Catedral de San José', diocese: 'Arquidiócesis de Toluca', address: 'Centro, Toluca, Estado de México', lat: 19.291532, lng: -99.65727 },
    { name: 'Catedral Metropolitana de San Juan Bautista', diocese: 'Arquidiócesis de Tulancingo', address: 'Centro, Tulancingo de Bravo, Hidalgo', lat: 20.080655, lng: -98.367817 },
    { name: 'Catedral Metropolitana de San Marcos', diocese: 'Arquidiócesis de Tuxtla Gutiérrez', address: 'Centro, Tuxtla Gutiérrez, Chiapas', lat: 16.753056, lng: -93.115661 },
    { name: 'Catedral Metropolitana de la Inmaculada Concepción', diocese: 'Arquidiócesis de Xalapa', address: 'Zona Centro, Xalapa, Veracruz', lat: 19.527782, lng: -96.922975 },
    { name: 'Catedral de San Ildefonso', diocese: 'Arquidiócesis de Yucatán', address: 'Centro, Mérida, Yucatán', lat: 20.96713, lng: -89.622541 }
  ].map((entry, index) => Object.freeze(Object.assign({
    country: 'MX',
    churchId: `MX-CEM-CATHEDRAL-${String(index + 1).padStart(2, '0')}`,
    sourceUrl: directoryUrl,
    sourceName: source.title,
    sourceAuthority: source.authority
  }, entry))));
  global.countryChurchData.MX = Object.freeze({
    schemaVersion: 2,
    jurisdiction: 'MX',
    jurisdictions: Object.freeze(['MX']),
    conference: 'Conferencia del Episcopado Mexicano (CEM)',
    beta: true,
    exhaustive: false,
    source,
    entries
  });
})(globalThis);
