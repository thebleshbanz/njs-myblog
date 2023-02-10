const { buildErrObject } = require('./buildErrObject');
const { buildSuccObject } = require('./buildSuccObject');
const { getBrowserInfo } = require('./getBrowserInfo');
const { getCountry } = require('./getCountry');
const { getIP } = require('./getIP');
const { handleError } = require('./handleError');
const { isIDGood } = require('./isIDGood');
const { itemNotFound } = require('./itemNotFound');
const { validateResult } = require('./validateResult');
const { removeExtentionFromFile } = require('./removeExtentionFromFile');

module.exports = {
    buildErrObject,
    buildSuccObject,
    getBrowserInfo,
    getCountry,
    getIP,
    handleError,
    isIDGood,
    itemNotFound,
    removeExtentionFromFile,
    validateResult
}