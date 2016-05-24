module.exports = (app)=>{
	var painelController = {
		index: (req,res)=>{
			res.render('login/index');
		},
		erro: (req,res)=>{
			res.json(req.profile);
		},
		painel: (req,res)=>{
			res.json(req.user);
		}
	}
	return painelController;
}