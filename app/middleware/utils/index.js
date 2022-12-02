const { buildErrObject } = require('./buildErrObject');
const { handleError } = require('./handleError');
const { removeExtentionFromFile } = require('./removeExtentionFromFile');
const { isIDGood } = require('./isIDGood');
const { itemNotFound } = require('./itemNotFound');

module.exports = {
    buildErrObject,
    handleError,
    isIDGood,
    itemNotFound,
    removeExtentionFromFile
}