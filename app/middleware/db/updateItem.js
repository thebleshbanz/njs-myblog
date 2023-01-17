

/**
 * Updates an item in database by id
 * @param {string} id - item id
 * @param {Object} req - request object
 */

const updateItem = (id='', model={}, req ={}) => {
    return new Promise((resolve, reject) => {
        model.findByIdAndUpdate(
            id,
            req,
            {
                new:true,
                runValidator: true,
            },
            async (err, item) => {
                try {
                    resolve(item);
                } catch (error) {
                    reject(error);
                }
            }
        );
    });
}

module.exports = { updateItem }