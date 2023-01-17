const City = require('../../models/city');
const { updateItem } = require('../../middleware/db');
const { isIDGood, handleError } = require('../../middleware/utils');
const { matchData } = require('express-validator');

/**
 * Update item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */

const updateCity = async (req, res) => {
    try {
        req = matchData(req);
        const id = await isIDGood(req.id);
        const result = await updateItem(id, City, req);
        res.status(200).json({message:"success update"});
    } catch (error) {
        handleError(res, error);
    }
}

module.exports = { updateCity }