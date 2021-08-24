//Establish the mysql db connection

const { Sequelize } = require("sequelize");

const connection = new Sequelize(process.env.DB_NAME_MYSQL, process.env.DB_USER_MYSQL, process.env.DB_PASSWORD_MYSQL, {
    host: process.env.DB_HOST_MYSQL,
    dialect: process.env.DB_DIALECT_MYSQL
});

module.exports = {connection};