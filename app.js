/**
 * Express is a node js web application framework that provides broad features for building web and mobile applications.
 */
var express = require('express');


/**
 * Get a PATH containing locally installed module executables.
 */
var path = require('path');

/**
 * cookie-parser is a middleware which parses cookies attached to the client request object.
 */
var cookieParser = require('cookie-parser');

/**
 * HTTP request logger middleware for node.js.
 */
var logger = require('morgan');

/**
 * decreases the downloadable amount of data that's served to users.
 * improvement in the performance of the application.
 * reduce the payload size dramatically above 70%.
 */
const compression = require('compression')

/**
 * helmet - helps you secure your Express apps by setting various HTTP headers.
 */
const helmet = require('helmet')

/**
 * Cross-Origin Resource Sharing
 * It is a mechanism to allow or restrict requested resources on a web server depend on where the HTTP request was initiated.
 */
const cors = require('cors')

/**
 * passport - Express-compatible authentication middleware
 * Main purpose is to authenticate requests
 */
const passport = require('passport')

/**
 * Lightweight simple translation module with dynamic JSON storage
 */
const i18n = require('i18n')

const initMongo = require('./config/mongo')

/**
 * Initialize App
 */
var app = express();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// i18n
i18n.configure({
  locales: ['en', 'es'],
  directory: `${__dirname}/locales`,
  defaultLocale: 'en',
  objectNotation: true
})
app.use(i18n.init)

// Enable only in development HTTP request logger middleware
app.use(logger('dev'));
app.use(cors());
app.use(passport.initialize());
/**
 * express.json - used to parse the incoming requests with JSON payloads and is based upon the bodyparser */
app.use(express.json());
app.use(express.static('public'))
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(compression())
app.use(helmet())
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(compression())

app.use('/', indexRouter);
app.use('/users', usersRouter);


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


// Init MongoDB
initMongo()

module.exports = app;