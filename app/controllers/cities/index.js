const { getAllCities } = require('./getAllCities');
const { getCities } = require('./getCities');
const { getCity } = require('./getCity');
const { createCity } = require('./createCity');
const { updateCity } = require('./updateCity');
const { deleteCity } = require('./deleteCity');

module.exports = {
    getAllCities,
    getCities,
    getCity,
    createCity,
    updateCity,
    deleteCity
}