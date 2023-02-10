/**
 * Creates an object with user info
 * @param {Object} req - request object
 */

const setUserInfo = (req = {}) => {
    return new Promise( (resolve) => {
        let user = {
            _id : req.id,
            name : req.name,
            email : req.email,
            role : req.role,
            verified : req.verified
        }
        resolve(user);
    });
}

module.exports  = {setUserInfo};