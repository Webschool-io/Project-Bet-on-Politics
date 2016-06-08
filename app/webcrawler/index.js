var request = require('request')
,	cheerio = require('cheerio');


for(var i=0; i < 100; i++){
	request('https://www25.senado.leg.br/web/senadores/senador/-/perfil/'+i, (err,res,body)=>{
		if(err) console.log('error: '+ err);
		var $ = cheerio.load(body);
		var recebe = $('.dl-horizontal').text().trim();
		console.log(recebe);
	});
}

