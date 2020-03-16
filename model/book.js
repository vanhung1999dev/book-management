const Connect = require('./connect');
const Sequelize = require('sequelize');

const Book = Connect.define('Book',{
    name: {type: Sequelize.STRING, allowNull: false},
    author: {type: Sequelize.STRING},
    page: {type: Sequelize.STRING}
},{
    timestamps: false
});

Connect.sync({force: false});

module.exports = Book;

