const { matchedData } = require('express-validator');

const { emailExists, registerUser, setUserInfo, returnRegisterToken } = require('./helpers');

const { handleError } = require('../../middleware/utils');

/**
 * Register function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */

const register = async (req, res) => {
    try {
        // Gets  locale from header 'Accept-Language
        const locale = req.getLocale();

        req = matchedData(req);

        const doesEmailExists = await emailExists(res.email);

        if(!doesEmailExists){
            const item = await registerUser(req);
            const userInfo = await setUserInfo(item);
            const response = await returnRegisterToken(item, userInfo);
            res.status(201).json(response);
        }
    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { register }