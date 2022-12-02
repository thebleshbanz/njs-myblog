/**
 * Removes extention from file
 * @param {string} file - filename
 */

const removeExtentionFromFile = (file) => {
    return file.split('.').slice(0, -1).join('.').toString();
}

module.exports = { removeExtentionFromFile }