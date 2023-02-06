
const Sequelize = require("sequelize");


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