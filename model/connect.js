
const Sequelize = require('sequelize');

const connect = new Sequelize('Library_Book', 'root', 'vanhung1999', {
    host: 'localhost',
    dialect: 'mysql'
});

const isConnect = async () => await connect.authenticated();
if (isConnect)
    console.log('connect succesfull!!!');

module.exports = connect;