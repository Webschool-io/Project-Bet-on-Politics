module.exports = (app)=>{
	var painelController = {
		index: (req,res)=>{
			res.render('login/index');
		},
		erro: (req,res)=>{
			res.json(req.profile);
		},
		painel: (req,res)=>{
			res.redirect('/painel')
		},
		nav: (req,res)=>{
			res.render('painel/index');
		},
		logout: (req,res)=>{
			req.logout();
			res.redirect('/');
		}
	}
	return painelController;
}