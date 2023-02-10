const {validateRegister} = require('./validateRegister');
const {validateVerify} = require('./validateVerify');
const {validateResetPassword} = require('./validateResetPassword');
const {validateLogin} = require('./validateLogin');

module.exports = {
    validateRegister,
    validateVerify,
    validateResetPassword,
    validateLogin,
}