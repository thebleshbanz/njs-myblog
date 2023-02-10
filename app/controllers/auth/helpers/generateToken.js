const jwt = require('jsonwebtoken');
const { encrypt }= require('../../../middleware/auth');

/**
 * Generate a token
 * @param { Object } user - user object
 */

const generateToken = (user = "") => {
    try {
        //  Gets Expiration time
        const expiration =
            Math.floor(Date.now()/1000) + 60 * process.env.JWT_EXPIRATION_IN_MINUTES

        // return signed & encryped token
        return encrypt(
            jwt.sign(
                {
                    data:{
                        _id : user,
                    },
                    exp: expiration
                },
                process.env.JWT_SECRET
            )
        );
    } catch (err) {

    }
}

module.exports = {generateToken}