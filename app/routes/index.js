module.exports = (app)=>{
	let 	painel 		= app.controllers.painel
	,   	autenticar 	= require('../middleware/autenticador')
	,   	passport 	= require('passport');
	app.get('/', painel.index);
	app.get('/erro', (req,res)=>{
		res.send('erro');
	});
	app.get('/github/login/',  passport.authenticate('github'));
	app.get('/facebook/login/', passport.authenticate('facebook'));
	app.get('/painel/github',passport.authenticate('github', { failureRedirect: '/erro' }), painel.painel);
	app.get('/painel/facebook',passport.authenticate('facebook', { failureRedirect: '/erro' }), painel.painel);
	app.get('/painel/', painel.nav);
	app.get('/logout', autenticar.loginSistema, painel.logout);
}