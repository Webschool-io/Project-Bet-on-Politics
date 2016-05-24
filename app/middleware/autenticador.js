module.exports = {
	loginSistema: function(req, res, next) {
		if(!req.isAuthenticated()) {
			return res.redirect('/');
		}
		return next();
	},
	loginApi: function(req, res, next) {
		if(req.isAuthenticated()) {
			return next();
		} else {
			console.log(req);
			res.sendStatus(403);
		}
	}
};
