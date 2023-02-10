const LOGIN_ATTEMPTS = 5;

/**
 *  checks that login attemts are greater than specified in constant & also that blockexpires is less then now
 * @param {Object} user - user object
 */

const blockIsExpired = ({loginAttempts=0, blockExpires = ''}) => {
    loginAttempts > LOGIN_ATTEMPTS && blockExpires <= new Date()
}

module.exports = { blockIsExpired }