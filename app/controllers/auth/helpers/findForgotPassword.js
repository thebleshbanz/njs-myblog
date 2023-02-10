const ForgotPassword = require('../../../models/user')
const { itemNotFound } = require('../../../middleware/utils')

/**
 * Checks if a forgot password verification exists
 * @param {string} id - verification id
 */
const findForgotPassword = (id = '') => {
  return new Promise((resolve, reject) => {
    ForgotPassword.findOne(
      {
        _id: id,
        verified: true
      },
      async (err, item) => {
        try {
          await itemNotFound(err, item, 'NOT_FOUND_OR_ALREADY_USED')
          resolve(item)
        } catch (error) {
          reject(error)
        }
      }
    )
  })
}

module.exports = { findForgotPassword }
