const { register } = require('./register');
const { verify } = require('./verify');
const { resetPassword } = require('./resetPassword');
const { login } = require('./login');
const { roleAuthorization } = require('./roleAuthorization');
const { getRefreshToken } = require('./getRefreshToken');

module.exports = {
    register,
    verify,
    resetPassword,
    login,
    roleAuthorization,
    getRefreshToken
}
