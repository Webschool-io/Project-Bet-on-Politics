module.exports = (app)=>{
	var mongoose 	= require('mongoose')
	,	Schema 		= mongoose.Schema
	,	ObjectId 	= mongoose.Schema.ObjectId;

	var votar = new Schema({
		politico: 		{ type: ObjectId, ref: 'politico'},
		usuario: 		{ type: ObjectId, ref: 'usuario'},
		created_at: 	{ type: Date, default: Date.now },
		updated_at: 	{ type: Date, default: Date.now }	
	});
	// Referência site https://www25.senado.leg.br/web/senadores/senador/-/perfil/70
	return mongoose.model('Votar', votar);	
}