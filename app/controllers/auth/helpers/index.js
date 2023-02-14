// register
const {  emailExists } = require('./emailExists');
const {  registerUser } = require('./registerUser');
const {  setUserInfo } = require('./setUserInfo');
const {  returnRegisterToken } = require('./returnRegisterToken');
// verify
const {  verificationExists } = require('./verificationExists');
const {  verifyUser } = require('./verifyUser');
// reset password
const {  findForgotPassword } = require('./findForgotPassword');
const {  findUserToResetPassword } = require('./findUserToResetPassword');
const {  updatePassword } = require('./updatePassword');
const {  markResetPasswordAsUsed } = require('./markResetPasswordAsUsed');
// refresh token
const {  checkPermissions } = require('./checkPermissions');
const {  getUserIdFromToken } = require('./getUserIdFromToken');
const {  findUserById } = require('./findUserById');
// user login
const {  findUser } = require('./findUser');
const {  userIsBlocked } = require('./userIsBlocked');
const {  checkLoginAttemptsAndBlockExpires } = require('./checkLoginAttemptsAndBlockExpires');
const {  passwordsDoNotMatch } = require('./passwordsDoNotMatch');
const {  saveLoginAttemptsToDB } = require('./saveLoginAttemptsToDB');
const {  blockUser } = require('./blockUser');
const {  saveUserAccessAndReturnToken } = require('./saveUserAccessAndReturnToken');

module.exports = {
    // register
    emailExists,
    registerUser,
    setUserInfo,
    returnRegisterToken,
    // verify
    verificationExists,
    verifyUser,
    // reset password
    findForgotPassword,
    findUserToResetPassword,
    updatePassword,
    markResetPasswordAsUsed,
    // refresh token
    checkPermissions,
    getUserIdFromToken,
    findUserById,
    // login
    findUser,
    userIsBlocked,
    blockUser,
    checkLoginAttemptsAndBlockExpires,
    passwordsDoNotMatch,
    saveLoginAttemptsToDB,
    saveUserAccessAndReturnToken,
}