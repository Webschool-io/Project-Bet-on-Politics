module.exports = (app)=>{
	var mongoose = require('mongoose')
	,	Schema = mongoose.Schema;

	var usuario = new Schema(
	{

		github: {
			githubId: 		{ type: String, unique: true, required: true  },
			login: 		{ type: String,},
			avatar_url: { type: String, required: true  },
			html_url: 	{ type: String, required: true  },
			name: 		{type: Boolean, default: false },
			company: 	{ type: String, required: true  },
			blog:  		{ type: String, required: true  },
		},
		facebook: {
			facebookId: 		{ type: String, unique: true, required: true  },
			displayName: 		{ type: String, unique: true, required: true  }
		},
		created_at: { type: Date, default: Date.now },
		updated_at: { type: Date, default: Date.now }	

	}
	);
	return mongoose.model('Usuario', usuario);
}
