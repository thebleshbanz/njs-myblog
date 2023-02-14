const express = require('express');
const router = express.Router();
require('../config/passport');
const passport = require('passport');
const requireAuth = passport.authenticate('jwt',{
    session:false
});
const trimRequest = require('trim-request');
const { roleAuthorization } = require('../app/controllers/auth');

const {
    getAllCities,
    getCities,
    getCity,
    createCity,
    updateCity,
    deleteCity
} = require('../app/controllers/cities');

const {
    validateGetCity,
    validateCreateCity,
    validateUpdateCity
} = require('../app/controllers/cities/validators');

/**
 * Cities routes
 */

/**
 * Get all items route
 */
router.get('/all', getAllCities)

/**
 * Get items route
 */
router.get('/', getCities);

/**
 * Get item route
 */
router.get(
    '/:id',
    requireAuth,
    roleAuthorization(['user', 'admin']),
    trimRequest.all,
    validateGetCity,
    getCity
)

/**
 * Create new item  route
 */
router.post(
    '/',
    requireAuth,
    roleAuthorization(['user', 'admin']),
    trimRequest.all,
    validateCreateCity,
    createCity
)

/**
 * Update item route
 */
router.post(
    '/update',
    requireAuth,
    roleAuthorization(['user', 'admin']),
    trimRequest.all,
    // validateUpdateCity,
    updateCity
)

/**
 * Delete item route
 */
router.post(
    '/delete',
    requireAuth,
    roleAuthorization(['user',  'admin']),
    deleteCity
);

module.exports = router;