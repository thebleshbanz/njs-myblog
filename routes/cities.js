const express = require('express');
const router = express.Router();
const trimRequest = require('trim-request');

const {
    getAllCities,
    getCities,
    getCity,
    createCity,
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
    '/:id',
    getCity
)

/**
 * Create new item  route
 */
router.post(
    '/',
    createCity
)

module.exports = router;