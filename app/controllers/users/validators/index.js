const { validateGetUser } = require('./validateGetUser');
const { validateCreateUser } = require('./validateCreateUser');
const { validateUpdateUser } = require('./validateUpdateUser');
const { validateDeleteUser } = require('./validateDeleteUser');

module.exports = {
    validateGetUser,
    validateCreateUser,
    validateUpdateUser,
    validateDeleteUser,
}