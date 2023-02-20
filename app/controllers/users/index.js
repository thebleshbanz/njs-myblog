const { getUsers } = require('./getUsers');
const { getUser } = require('./getUser');
const { createUser } = require('./createUser');
const { updateUser } = require('./updateUser');
const { deleteUser } = require('./deleteUser');

module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
}