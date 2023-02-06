/**
 * Sequelize is a Node.js-based Object Relational Mapper that makes it easy to work with MySQL, MariaDB, SQLite, PostgreSQL databases, and more. An Object Relational Mapper performs functions like handling database records by representing the data as objects. 
 */

const Sequelize = require("sequelize");

module.exports = () => {

    const connect = () => {
        // sequelize.Promise = global.Promise
        const sequelize = new Sequelize(
            'njs_myblog',
            'root', // DATABASE_USERNAME
            'root', // DATABASE_PASSWORD
            {
                host: 'localhost',
                dialect: 'mysql'
            }
        );
        
        sequelize.authenticate().then(() => {
            console.log('Connection has been established successfully.');
        }).catch((error) => {
            console.error('Unable to connect to the database: ', error);
        });
    }
    connect()
}