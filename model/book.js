const Connect = require('./connect');
const Sequelize = require('sequelize');
const Author = require('./author');
const Catelog = require('./catelog');

const Book = Connect.define('Book', {
    title: { type: Sequelize.STRING(255) },
    isbn: { type: Sequelize.STRING(20) },
    status: { type: Sequelize.INTEGER(4) },
    description: { type: Sequelize.TEXT },
    create_time: { type: Sequelize.INTEGER },
    create_by: { type: Sequelize.INTEGER },
    approve_time: { type: Sequelize.INTEGER },
    approve_by: { type: Sequelize.INTEGER }
}, {
    timestamps: false
});

Catelog.hasMany(Book);
Book.belongsTo(Catelog);

Author.hasMany(Book);
Book.belongsTo(Author);

module.exports = Book;

