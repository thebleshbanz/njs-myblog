const { validateResult } = require('../../../middleware/utils');
const { check } = require('express-validator');

/**
 * Validate register request
 */
const validateRegister = [
    // check user name is required, not empty,
    check('name')
        .exists()
        .withMessage('MISSING')
        .not()
        .isEmpty()
        .withMessage('IS_EMPTY'),
    // check user email should required, not empty, valid.
    check('email')
        .exists()
        .withMessage('MISSING')
        .not()
        .isEmpty()
        .withMessage('IS_EMPTY')
        .isEmail()
        .withMessage('EMAIL_IS_NOT_VALID'),
    // check user password should required, not empty, min length 5.
    check('password')
        .exists()
        .withMessage('MISSING')
        .not()
        .isEmpty()
        .withMessage('IS_EMPTY')
        .isLength({
            min:5
        }).withMessage('PASSWORD_TOO_SHORT_MIN_5'),
        (req, res, next) => {
            validateResult(req, res, next)
        }
]

module.exports = { validateRegister }