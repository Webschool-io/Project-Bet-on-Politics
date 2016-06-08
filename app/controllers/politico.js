module.exports = (app)=>{
	var Politico = app.models.politicos;
	var request = require('request')
	,	cheerio = require('cheerio');

	var controller = {
		index: (req,res)=>{
			var pegar = [];
			request('https://www25.senado.leg.br/web/senadores/senador/-/perfil/70', (err,res,body)=>{
				if(err) console.log('error: '+ err);
				var $ = cheerio.load(body);
				var politico = new Politico;
				var recebe = $('.dl-horizontal dd').each(function(e,l){
					pegar.push($(this).text().trim());
					politico.nome 			= pegar[0];
					politico.nascimento 	= pegar[1];
					politico.naturalidade 	= pegar[2];
					politico.gabinete 		= pegar[3];
					politico.telefones 		= pegar[4];
					politico.fax 			= pegar[5];
					politico.email 			= pegar[6];
					politico.apoio 			= pegar[7];
				});
				politico.save((err,g)=>{
					if(!err){
						console.log(g);		
					}
				});
			});
			res.end({msg: 'concluido'});
		}
	};
	return controller;
}

/*
			var pegar = [];

			request('https://www25.senado.leg.br/web/senadores/senador/-/perfil/70', (err,res,body)=>{
				if(err) console.log('error: '+ err);
				var $ = cheerio.load(body);
				var politico = new Politico();
				console.log(politico);
				var recebe = $('.dl-horizontal dd').each(function(e,l){
					pegar.push($(this).text().trim());
					Politico.nome 			= pegar[0];
					politico.nascimento 	= pegar[1];
					politico.naturalidade 	= pegar[2];
					politico.gabinete 		= pegar[3];
					politico.telefones 		= pegar[4];
					politico.fax 			= pegar[5];
					politico.email 			= pegar[6];
					politico.apoio 			= pegar[7];
					politico.save((err,g)=>{
						if(!err){
							pegar = [];
						}
					});
				});
			});
*/