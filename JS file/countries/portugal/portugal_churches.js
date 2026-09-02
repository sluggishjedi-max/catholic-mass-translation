// Portugal CEP (Beta) — cathedral seed directory for all 20 territorial dioceses.
(function registerPortugalChurches(global) {
  'use strict';
  global.countryChurchData = global.countryChurchData || {};
  const directoryUrl = 'https://www.conferenciaepiscopal.pt/v1/dioceses/';
  const source = Object.freeze({
    title: 'CEP — Províncias Eclesiásticas e Dioceses',
    authority: 'Conferência Episcopal Portuguesa',
    url: directoryUrl,
    coverage: 'Cathedral seed for the 20 territorial dioceses listed by the CEP.'
  });
  const entries = Object.freeze([
    { name: 'Sé Catedral de Faro', diocese: 'Diocese do Algarve', address: 'Largo da Sé, Faro', lat: 37.0132964, lng: -7.9346581 },
    { name: 'Sé Catedral de Angra', diocese: 'Diocese de Angra', address: 'Rua da Sé, Angra do Heroísmo', lat: 38.6554167, lng: -27.2210184 },
    { name: 'Sé Catedral de Aveiro', diocese: 'Diocese de Aveiro', address: 'Rua Batalhão Caçadores 10, Aveiro', lat: 40.6410, lng: -8.6530 },
    { name: 'Sé Catedral de Beja', diocese: 'Diocese de Beja', address: 'Largo do Lidador, Beja', lat: 38.0149, lng: -7.8633 },
    { name: 'Sé Primacial de Braga', diocese: 'Arquidiocese de Braga', address: 'Rua Dom Paio Mendes, Braga', lat: 41.5496, lng: -8.4271 },
    { name: 'Sé Catedral de Bragança', diocese: 'Diocese de Bragança-Miranda', address: 'Praça da Sé, Bragança', lat: 41.8050, lng: -6.7560 },
    { name: 'Sé Nova de Coimbra', diocese: 'Diocese de Coimbra', address: 'Largo Feira dos Estudantes, Coimbra', lat: 40.2098904, lng: -8.4245597 },
    { name: 'Sé Catedral de Évora', diocese: 'Arquidiocese de Évora', address: 'Largo do Marquês de Marialva, Évora', lat: 38.5717381, lng: -7.9067208 },
    { name: 'Sé Catedral do Funchal', diocese: 'Diocese do Funchal', address: 'Rua do Aljube, Funchal', lat: 32.6485, lng: -16.9084 },
    { name: 'Sé Catedral da Guarda', diocese: 'Diocese da Guarda', address: 'Praça Luís de Camões, Guarda', lat: 40.5373, lng: -7.2670 },
    { name: 'Sé Catedral de Lamego', diocese: 'Diocese de Lamego', address: 'Largo da Sé, Lamego', lat: 41.0975, lng: -7.8090 },
    { name: 'Sé Catedral de Leiria', diocese: 'Diocese de Leiria-Fátima', address: 'Largo Cónego Maia, Leiria', lat: 39.7445, lng: -8.8072 },
    { name: 'Sé Patriarcal de Lisboa', diocese: 'Patriarcado de Lisboa', address: 'Largo da Sé, Lisboa', lat: 38.7098185, lng: -9.1328001 },
    { name: 'Sé Catedral de Portalegre', diocese: 'Diocese de Portalegre-Castelo Branco', address: 'Praça do Município, Portalegre', lat: 39.2905, lng: -7.4310 },
    { name: 'Sé Catedral do Porto', diocese: 'Diocese do Porto', address: 'Terreiro da Sé, Porto', lat: 41.1427992, lng: -8.6112059 },
    { name: 'Sé Catedral de Santarém', diocese: 'Diocese de Santarém', address: 'Praça Sá da Bandeira, Santarém', lat: 39.2369, lng: -8.6870 },
    { name: 'Sé Catedral de Setúbal', diocese: 'Diocese de Setúbal', address: 'Praça Teófilo Braga, Setúbal', lat: 38.5243, lng: -8.8927 },
    { name: 'Sé Catedral de Viana do Castelo', diocese: 'Diocese de Viana do Castelo', address: 'Largo Instituto Histórico do Minho, Viana do Castelo', lat: 41.6936, lng: -8.8288 },
    { name: 'Sé Catedral de Vila Real', diocese: 'Diocese de Vila Real', address: 'Avenida Carvalho Araújo, Vila Real', lat: 41.2963268, lng: -7.7465163 },
    { name: 'Sé Catedral de Viseu', diocese: 'Diocese de Viseu', address: 'Adro da Sé, Viseu', lat: 40.6573, lng: -7.9103 }
  ].map((entry, index) => Object.freeze(Object.assign({
    country: 'PT', churchId: `PT-CEP-CATHEDRAL-${String(index + 1).padStart(2, '0')}`,
    sourceUrl: directoryUrl, sourceName: source.title, sourceAuthority: source.authority
  }, entry))));
  global.countryChurchData.PT = Object.freeze({
    schemaVersion: 2, jurisdiction: 'PT', jurisdictions: Object.freeze(['PT']),
    conference: 'Conferência Episcopal Portuguesa (CEP)', beta: true, exhaustive: false, source, entries
  });
})(globalThis);
