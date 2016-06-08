module.exports = (app)=>{
	var mongoose = require('mongoose')
	,	Schema = mongoose.Schema;

	var politico = new Schema({

		nome: 		  	{ type: String , required: true},
		nascimento:   	{ type: String },
		naturalidade: 	{ type: String },
		gabinete: 		{ type: String },
		telefones: 		{ type: String },
		fax: 			{ type: String },
		email: 			{ type: String },
		apoio: 			{ type: String },
		created_at: 	{ type: Date, default: Date.now },
		updated_at: 	{ type: Date, default: Date.now }	

	});
	// Referência site https://www25.senado.leg.br/web/senadores/senador/-/perfil/70
	return mongoose.model('Politico', politico);	
}