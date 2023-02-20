const City = require('../../models/city');
const { updateItem } = require('../../middleware/db');
const { isIDGood, handleError } = require('../../middleware/utils');
const { matchedData } = require('express-validator')
const { cityExistsExcludingItself } = require('./helpers')

/**
 * Update item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */

const updateCity = async (req, res) => {
    try {
        req = matchedData(req);
        const id = await isIDGood(req.id);
        const doesCityExists = await cityExistsExcludingItself(id, req.name);
        const result = await updateItem(id, City, req.body);
        res.status(200).json({message:"success update"});
    } catch (error) {
        handleError(res, error);
    }
}

module.exports = { updateCity }