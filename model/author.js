const Connect = require('./connect');
const Sequelize = require('sequelize');

const Author = Connect.define('Author',{
    name: {type: Sequelize.STRING(255)},
    description: {type: Sequelize.TEXT},
    email: {type: Sequelize.STRING(255)},
},{
    timestamps: false
});

module.exports = Author;