var express = require('express');
var router = express.Router();
require('../config/passport');
const passport = require('passport')
const requireAuth = passport.authenticate('jwt', {
  session:false,
});

const trimRequest = require('trim-request');
const { roleAuthorization } = require('../app/controllers/auth');

const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require('../app/controllers/users');

const {
  validateGetUser,
  validateCreateUser,
  validateUpdateUser,
  validateDeleteUser,
} = require('../app/controllers/users/validators');

/**
 * Users routes
 */

/**
 * Get items route
 */
router.get(
  '/',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  getUsers
);

/**
 * Create  new item route
 */
router.post(
  '/',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  validateCreateUser,
  createUser
);

/**
 * Get item route
 */
router.get(
  '/:id',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  validateGetUser,
  getUser
);

/**
 * Update item route
 */
router.patch(
  '/:id',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  validateUpdateUser,
  updateUser
);

/**
 * Delete item route
 */
router.delete(
  '/:id',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  validateDeleteUser,
  deleteUser
)

module.exports = router;
