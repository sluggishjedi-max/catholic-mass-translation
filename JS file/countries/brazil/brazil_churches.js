// Brazil CNBB church module (Beta): one cathedral seed for every state and the Federal District.
(function registerBrazilChurches(global) {
  'use strict';
  global.countryChurchData = global.countryChurchData || {};
  const directoryUrl = 'https://www.cnbb.org.br/a-estrutura-administrativa-e-pastoral-da-cnbb-tem-uma-matriz-e-18-unidades-regionais/';
  const source = Object.freeze({
    title: 'CNBB regionais e Igrejas particulares',
    authority: 'Conferência Nacional dos Bispos do Brasil e dioceses integrantes',
    url: directoryUrl,
    coverage: 'Cathedral coordinate seeds for the 26 states and Federal District; official diocesan sites are linked per entry. Nationwide parish coverage is not claimed.'
  });
  const entries = Object.freeze([
    ['Catedral Nossa Senhora de Nazaré','Diocese de Rio Branco','Rio Branco, AC',-9.9748,-67.8076,'https://diocese-riobranco.org.br/'],
    ['Catedral Metropolitana Nossa Senhora dos Prazeres','Arquidiocese de Maceió','Maceió, AL',-9.6658,-35.7350,'https://arquidiocesedemaceio.org.br/'],
    ['Catedral São José','Diocese de Macapá','Macapá, AP',0.0382,-51.0557,'https://diocesedemacapa.com.br/'],
    ['Catedral Metropolitana Nossa Senhora da Conceição','Arquidiocese de Manaus','Manaus, AM',-3.1346,-60.0254,'https://arquidiocesedemanaus.org.br/'],
    ['Catedral Basílica Primacial do Santíssimo Salvador','Arquidiocese de São Salvador da Bahia','Salvador, BA',-12.9730,-38.5105,'https://arquidiocesesalvador.org.br/'],
    ['Catedral Metropolitana de Fortaleza','Arquidiocese de Fortaleza','Fortaleza, CE',-3.7238,-38.5227,'https://www.arquidiocesedefortaleza.org.br/'],
    ['Catedral Metropolitana Nossa Senhora Aparecida','Arquidiocese de Brasília','Brasília, DF',-15.7983,-47.8755,'https://arqbrasilia.com.br/'],
    ['Catedral Metropolitana Nossa Senhora da Vitória','Arquidiocese de Vitória','Vitória, ES',-20.3200,-40.3373,'https://www.aves.org.br/'],
    ['Catedral Metropolitana Nossa Senhora Auxiliadora','Arquidiocese de Goiânia','Goiânia, GO',-16.6765,-49.2548,'https://arquidiocesedegoiania.org.br/'],
    ['Catedral Metropolitana Nossa Senhora da Vitória','Arquidiocese de São Luís do Maranhão','São Luís, MA',-2.5297,-44.3040,'https://arquidiocesedesaoluis.org/'],
    ['Catedral Basílica do Senhor Bom Jesus de Cuiabá','Arquidiocese de Cuiabá','Cuiabá, MT',-15.6010,-56.0967,'https://arquidiocesecuiaba.org.br/'],
    ['Catedral Nossa Senhora da Abadia e Santo Antônio','Arquidiocese de Campo Grande','Campo Grande, MS',-20.4669,-54.6207,'https://arquidiocesedecampogrande.org.br/'],
    ['Catedral Cristo Rei','Arquidiocese de Belo Horizonte','Belo Horizonte, MG',-19.9174,-43.9345,'https://arquidiocesebh.org.br/'],
    ['Catedral Metropolitana Nossa Senhora das Graças','Arquidiocese de Belém do Pará','Belém, PA',-1.4561,-48.5032,'https://arquidiocesedebelem.com.br/'],
    ['Catedral Basílica Nossa Senhora das Neves','Arquidiocese da Paraíba','João Pessoa, PB',-7.1152,-34.8829,'https://arquidiocesepb.org.br/'],
    ['Catedral Basílica Nossa Senhora da Luz dos Pinhais','Arquidiocese de Curitiba','Curitiba, PR',-25.4288,-49.2712,'https://arquidiocesedecuritiba.org.br/'],
    ['Catedral Metropolitana São Salvador do Mundo','Arquidiocese de Olinda e Recife','Olinda, PE',-8.0136,-34.8491,'https://www.arquidioceseolindarecife.org/'],
    ['Catedral Metropolitana Nossa Senhora das Dores','Arquidiocese de Teresina','Teresina, PI',-5.0917,-42.8116,'https://arquidiocesedeteresina.org.br/'],
    ['Catedral Metropolitana de São Sebastião','Arquidiocese de São Sebastião do Rio de Janeiro','Rio de Janeiro, RJ',-22.9104,-43.1807,'https://arqrio.org.br/'],
    ['Catedral Metropolitana Nossa Senhora da Apresentação','Arquidiocese de Natal','Natal, RN',-5.7845,-35.2010,'https://arquidiocesedenatal.org.br/'],
    ['Catedral Metropolitana Nossa Senhora Madre de Deus','Arquidiocese de Porto Alegre','Porto Alegre, RS',-30.0346,-51.2306,'https://www.arquipoa.com/'],
    ['Catedral Sagrado Coração de Jesus','Arquidiocese de Porto Velho','Porto Velho, RO',-8.7619,-63.9039,'https://arquidiocesedeportovelho.org.br/'],
    ['Catedral Cristo Redentor','Diocese de Roraima','Boa Vista, RR',2.8237,-60.6758,'https://diocesederoraima.org.br/'],
    ['Catedral Metropolitana Nossa Senhora do Desterro','Arquidiocese de Florianópolis','Florianópolis, SC',-27.5977,-48.5482,'https://arquifln.org.br/'],
    ['Catedral Metropolitana Nossa Senhora da Assunção e São Paulo','Arquidiocese de São Paulo','São Paulo, SP',-23.5513,-46.6340,'https://arquisp.org.br/'],
    ['Catedral Metropolitana Nossa Senhora da Conceição','Arquidiocese de Aracaju','Aracaju, SE',-10.9108,-37.0495,'https://arquidiocesedearacaju.org/'],
    ['Catedral Metropolitana do Divino Espírito Santo','Arquidiocese de Palmas','Palmas, TO',-10.1840,-48.3336,'https://arquidiocesedepalmas.org.br/']
  ].map((item, index) => Object.freeze({
    name: item[0], diocese: item[1], address: item[2], lat: item[3], lng: item[4],
    country: 'BR', churchId: `BR-CNBB-CATHEDRAL-${String(index + 1).padStart(2, '0')}`,
    sourceUrl: directoryUrl, officialDioceseUrl: item[5], sourceName: source.title, sourceAuthority: source.authority
  })));
  global.countryChurchData.BR = Object.freeze({
    schemaVersion: 2,
    jurisdiction: 'BR',
    jurisdictions: Object.freeze(['BR']),
    conference: 'Conferência Nacional dos Bispos do Brasil (CNBB)',
    beta: true,
    exhaustive: false,
    source,
    entries
  });
})(globalThis);
