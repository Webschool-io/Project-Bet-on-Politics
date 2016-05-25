module.exports = {
	loginSistema: function(req, res, next) {
		if(!req.isAuthenticated()) {
			return res.redirect('/');
		}
		return next();
	}
};
