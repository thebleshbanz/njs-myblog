/**
 * loading environment variables from a .env file in a safe manner.
 *  It provides a way to store and manage configuration values that are specific to your application environment, such as API keys, database connection strings, etc.
 */
require('dotenv-safe').config()

/**
 * Express is a node js web application framework that provides broad features for building web and mobile applications.
 */
var express = require('express');

/**
 * Body-parser is a middleware module in Express, a popular Node.js framework, used to parse incoming request bodies before handling them in an endpoint. It helps extract the data from a request body and make it easily accessible in a JSON format. Body-parser supports different data types including JSON, raw text, and URL-encoded data. This module is useful for processing data sent in HTTP requests, such as POST or PUT requests, where a user submits data to the server.
 */
const bodyParser = require('body-parser')

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
 *
 * Morgan is a middleware library for Node.js and Express that is used for logging HTTP requests. It helps log request details such as the method, URL, status code, response time, and size of the response, which can be useful for debugging, monitoring, and analysis of your application.
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

// i18n
i18n.configure({
  locales: ['en', 'es'],
  directory: `${__dirname}/locales`,
  defaultLocale: 'en',
  objectNotation: true
})
app.use(i18n.init)


// Redis cache enabled by env variable
if(process.env.USE_REDIS === 'true'){
  const getExpeditiousCache = require('express-expeditious')
  const cache = getExpeditiousCache({
    namespace: 'expresscache',
    defaultTtl: '1 minute',
    engine: require('expeditious-engine-redis')({
      redis: {
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT
      }
    })
  })
  app.use(cache)
}

// for parsing json
app.use(
  bodyParser.json({
    limit:'20mb'
  })
)

/**
 * Init all other stuff
 */
app.use(cors());
app.use(passport.initialize());
app.use(compression())
app.use(logger('dev'));  // Enable only in development HTTP request logger middleware
/**
 * express.json - used to parse the incoming requests with JSON payloads and is based upon the bodyparser */
app.use(express.json());
app.use(express.static('public'))
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(helmet())
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(compression())

// app route init
app.use('/', indexRouter);


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