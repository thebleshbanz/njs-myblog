const City = require('../../models/city');
const { isIDGood, handleError } = require('../../middleware/utils');
const { deleteItem } = require('../../middleware/db');

/**
 * Delete item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */

const deleteCity = async (req, res) => {
    try {
        const id = await isIDGood(req.body.id);
        res.status(200).json(await deleteItem(id, City) );
    } catch (error) {
        handleError(res, error);
    }
}

module.exports =  { deleteCity };