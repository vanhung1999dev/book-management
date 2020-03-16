const seneca = require('seneca')();
const User = require('../model/user');
const Book = require('../model/book');

module.exports = function user_service() {
 
    this.add({ role: 'user_book', cmd: 'getAll' }, async (msg, reply) => {
        try {
            const users = await User.findAll();
            const books = await Book.findAll();
            reply(null, {user: users,book: books});
        } catch (error) {
            console.log(error);
        }
    });
};