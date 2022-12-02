/**
 * Builds error object
 * @param {number} code - error code
 * @param {string} message - error code
 */

const buildErrObject = function(code = '', message = '') {
    return {
        code,
        message
    }
}

module.exports = { buildErrObject }