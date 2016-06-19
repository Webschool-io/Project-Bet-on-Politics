require('./../config/db.js')
const fs = require('fs');
const xml2js = require('xml2js');
const parser = new xml2js.Parser();

const	Politico = require('./../models/politicos');
// console.log('Politico',Politico)
const _URL = 'http://www.camara.leg.br/SitCamaraWS/Deputados.asmx/ObterDeputados';
let politicos = [];

fs.readFile(__dirname + '/deputadosFederais.xml', (err, data) => {
  parser.parseString(data, function (err, result) {
  	const deputados = result.deputados.deputado
    // console.dir(result.deputados.deputado[0]);
    console.log('Done');
    let _politico = {};
    // deputados.forEach( (dep, index) => {
   //  	_politico.type = 'deputado(a)-federal';
			// _politico.partido 	= dep.partido[0];
			// _politico.nome 			= dep.nomeParlamentar[0];
			// _politico.nascimento 	= dep.uf[0];
			// _politico.naturalidade 	= dep.uf[0];
			// _politico.gabinete 		= dep.gabinete[0];
			// _politico.email 			= dep.email[0];
			// console.log('Cadastrando: '+_politico);
    	_politico.type = 'deputado(a)-federal';
			_politico.partido 	= 'teste PARTIDO';
			_politico.nome 			= 'teste nome';
			_politico.nascimento 	= 'teste nascimento';
			_politico.naturalidade 	= 'teste naturalidade';
			_politico.gabinete 		= 'teste gabinete';
			_politico.email 			= 'teste email';
			politicos.push(_politico);
    // });

		Politico.create(politicos, (err, data)=>{
			if(err) throw new Error(err);
			else {
				// console.log('Cadastrados: '+_politico.nome);
				console.log('RETORNOU: ', data)
			}
		});
  });
});


/*
{ ideCadastro: [ '74784' ],
  codOrcamento: [ '3611' ],
  condicao: [ 'Titular' ],
  matricula: [ '371' ],
  idParlamentar: [ '5830288' ],
  nome: [ 'LUIZA ERUNDINA DE SOUSA' ],
  nomeParlamentar: [ 'LUIZA ERUNDINA' ],
  urlFoto: [ 'http://www.camara.gov.br/internet/deputado/bandep/74784.jpg' ],
  sexo: [ 'feminino' ],
  uf: [ 'SP' ],
  partido: [ 'PSOL' ],
  gabinete: [ '620' ],
  anexo: [ '4' ],
  fone: [ '3215-5620' ],
  email: [ 'dep.luizaerundina@camara.gov.br' ],
  comissoes: [ { titular: [Object], suplente: [Object] } ] }
*/





