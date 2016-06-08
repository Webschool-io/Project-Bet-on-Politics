'use strict';

module.exports = (app)=>{
	let 	politico 	= app.controllers.politico
	,   	autenticar 	= require('../middleware/autenticador');
	app.get('/politico', politico.index);
}
	