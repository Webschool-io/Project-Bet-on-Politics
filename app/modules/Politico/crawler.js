var request = require('request')
,	cheerio = require('cheerio')
// , 	Politico = require('../models/politico');
var pegar = [];

const _politicos = [];
const Politico = {};

module.exports = (_req, _res, next) => {
	request('https://www25.senado.leg.br/web/senadores/senador/-/perfil/70', (err,res,body)=>{
		if (!err && res.statusCode == 200) {
			var $ = cheerio.load(body);
			var recebe = $('.dl-horizontal dd').each(function(e,l){
				pegar.push($(this).text().trim());
				Politico.nome 			= pegar[0];
				Politico.nascimento 	= pegar[1];
				Politico.naturalidade 	= pegar[2];
				Politico.gabinete 		= pegar[3];
				Politico.telefones 		= pegar[4];
				Politico.fax 			= pegar[5];
				Politico.email 			= pegar[6];
				Politico.apoio 			= pegar[7];
				console.log('Politico', Politico);
				_politicos.push(Politico);
			});
			console.log('_politicos', _politicos);
			return _res.json(_politicos)
	  }
	  return _res.json(err);
	});
};






