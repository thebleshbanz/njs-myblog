const express = require('express');
const router = express.Router();
const trimRequest = require('trim-request');

const {
    getAllCities,
    getCities,
    getCity,
    createCity,
    updateCity
} = require('../app/controllers/cities');

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
    '/getCityById',
    getCity
)

/**
 * Create new item  route
 */
router.post(
    '/',
    trimRequest.all,
    createCity
)

/**
 * Update item route
 */
router.patch(
    ':/id',
    trimRequest.all,
    updateCity
)

module.exports = router;