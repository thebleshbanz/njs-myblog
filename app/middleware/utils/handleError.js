/**
 * Handles error by printing to console in development env and builds and sends an error response
 * @param {Object} res - response object
 * @param {Object} err - error object
 */

const handleError = (res = {}, error = {}) => {
    // prints error in console
    if(process.env.NODE_ENV === 'development') {
        console.log(error);
    }

    // sends error to user
    res.status(error.code).json({
        errors : {
            msg: error.message,
        }
    });
}

module.exports = { handleError }