const express = require('express');
const router = express.Router();
// const fs = require('fs');
// const routesPath = `${__dirname}/`;
// const { removeExtensionFromFile } = require('./../app/middleware/utils');

const usersRouter = require('./users');
const citiesRouter = require('./cities');

/**
 * Load routes statically and/or dynamically
 */

// Load User route
router.use('/users', usersRouter);

// Load Cities route
router.use('/cities', citiesRouter)


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
