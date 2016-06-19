const mongoose = require('mongoose')
const db = mongoose.connection;
// Abrir Conexão
mongoose.connect('mongodb://localhost/politicos-teste', function(err){
	if(err) {
		console.log("Error conectar mongo db: " + err);
	}
});

// Evento que veriricar error
db.on('error', console.error.bind(console, 'Connection error:'));

// Evento que verificar conexão está aberta.
db.once('open', function() {
	console.log('Mongodb: Conexão realizada!');
});	

// Fechando a Conexão quando o processo cair
process.on('SIGINT', function() {
	mongoose.connection.close(function () {
		console.log('Mongodb: Conexão fechada!');
		process.exit(0);
	});
});


