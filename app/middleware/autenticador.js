module.exports = {
	loginSistema: (req, res, next)=> {
		if(!req.isAuthenticated()) {
			return res.redirect('/');
		}
		return next();
	}
};
