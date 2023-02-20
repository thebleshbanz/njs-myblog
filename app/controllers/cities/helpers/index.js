const City = require('../../../models/city');
const { buildErrObject } = require('../../../middleware/utils');


/**
 * Checks if a city already exists in database
 * @param {string} name - name of item
 */
 const cityExists = (name = '') => {
    return new Promise((resolve, reject) => {
      City.findOne(
        {
          name
        },
        (err, item) => {
          if (err) {
            return reject(buildErrObject(422, err.message))
          }

          if (item) {
            return reject(buildErrObject(422, 'CITY_ALREADY_EXISTS'))
          }
          resolve(false)
        }
      )
    })
  }

/**
 * Get All items from databse
 */

const getAllItemsFromDB = () => {
    return new Promise(function(resolve, reject){
        City.find(
            {},
            '-updatedAt -createdAt',
            {
                sort : {
                    name : 1
                }
            },
            (err, items) => {
                if (err) {
                    return reject(buildErrObject(422, err.message))
                }
                resolve(items);
            }
        );
    });
}

/**
 * Checks if a city already exists excluding itself
 * @param {string} id - id of item
 * @param {string} name - name of item
 */

const cityExistsExcludingItself = (id = '', name = '') => {
  return new Promise((resolve, reject) => {
    City.findOne(
      {
        name,
        _id: {
          $ne: id
        }
      },
      (err, item) => {
        if (err) {
          return reject(buildErrObject(422, err.message))
        }

        if (item) {
          return reject(buildErrObject(422, 'CITY_ALREADY_EXISTS'))
        }

        resolve(false)
      }
    )
  })
}


module.exports = { cityExists, getAllItemsFromDB, cityExistsExcludingItself }