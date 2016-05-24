let  express           = require('express')
,    path             = require('path')
,    favicon          = require('serve-favicon')
,    logger           = require('morgan')
,    cookieParser     = require('cookie-parser')
,    bodyParser       = require('body-parser')
,    load             = require('express-load')
,    compression      = require('compression')
,    expressSession   = require('express-session')
,    helmet           = require('helmet')
,    GithubStrategy   = require('passport-github2').Strategy
,    FacebookStrategy = require('passport-facebook').Strategy
,    passport         = require('passport')
,    app              = express();

app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'jade');
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(helmet());
app.disable('x-powered-by');
app.use(express.static(path.join(__dirname, 'public')));
app.use(compression());
app.use(cookieParser('iY}ONxQ,Y9I^Z}&y6-i}~35cS/vk/sf8+y@8c.2></>P*Z03Xhue?lzY%|dzN>S'));
app.use(expressSession({
  secret: process.env.SESSION_SECRET || '1a5H(qzO&1+!8M35tXvai3A*JF%Os]eOoG63/Oo+:1S(R[%x[js09UKDam0#85',
  saveUninitialized: false,
  resave: false,
  cookie: {
    httpOnly: true
  }
}));

app.use(passport.initialize());
app.use(passport.session());



// Facebook
passport.use(new FacebookStrategy({
    clientID: '1541293726180178',
    clientSecret: '66d673188d9c3925347096b663046ebb',
    callbackURL: "http://localhost/painel/facebook"
  },
  function(accessToken, refreshToken, profile, done) {
     // User.findOrCreate({ facebookId: profile.id }, function (err, user) {
      return done(null, profile);
    // });
  }
));


// Github
let GITHUB_CLIENT_ID = "a0ad37decfefe3d3e42f";
let GITHUB_CLIENT_SECRET = "d4f25fbf612f78dbc538cf705a4ed5465664521f";
passport.use(new GithubStrategy({
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: "http://localhost/painel/github"
  },
  function(accessToken, refreshToken, profile, done) {
    
    return done(null, profile);
  }
));


passport.serializeUser(function(user, done) {

  done(null, user);
});

passport.deserializeUser(function(user, done) {
 
  done(null, user);
});


load('models',{cwd: 'app'})
.then('controllers')
.then('routes')
.then('config')
.into(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
