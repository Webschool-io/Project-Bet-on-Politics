const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const politico = new Schema({
	nome: { type: String , required: true},
	partido: { type: String , required: true},
	type: { 
		type: String , 
		enum: [
			'senador(a)', 
			'deputado(a)-federal', 
			'deputado(a)-estadual', 
			'vereador(a)'
		], 
		required: true},
	nascimento: { type: String },
	naturalidade: { type: String },
	gabinete: { type: String },
	telefones:{ type: String },
	fax: { type: String },
	email: { type: String },
	apoio: { type: String },
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now }	

});
module.exports = mongoose.model('Politico', politico);	