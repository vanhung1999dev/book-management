const Book = require('../model/book');
const Author = require('../model/author')

module.exports = function book_service() {
    this.add({ role: 'book', cmd: 'insert' }, async (msg, reply) => {
        try {
            const user = await Book.create(msg.data);
            reply(null, user);
        } catch (error) {
            console.log(error);
        }
    });

    this.add({ role: 'book', cmd: 'get' }, async (msg, reply) => {
        try {
            const book = await Book.findOne({ where: { id: msg.id } });
            reply(null, book);
        } catch (error) {
            console.log(error);
        }
    });

    this.add({ role: 'book', cmd: 'getAll' }, async (msg, reply) => {
        try {
            const book = await Book.findAll();
            reply(null, book);
        } catch (error) {
            console.log(error);
        }
    });

    this.add({ role: 'book', cmd: 'getByName' }, async (msg, reply) => {
        try {
            const book = await Book.findAll({ where: { title: msg.title } });
            reply(null, book);
        } catch (error) {
            console.log(error);
        }
    });

    this.add({ role: 'book', cmd: 'getByAuthor' }, async (msg, reply) => {
        try {
            const book = await Book.findAll({
                include: {
                    model: Author,
                    required: true,
                    where: { name: msg.name }
                }
            });
            reply(null, book);
        } catch (error) {
            console.log(error);
        }
    });

    this.add({ role: 'book', cmd: 'getByISBN' }, async (msg, reply) => {
        try {
            const book = await Book.findAll({ where: { isbn: msg.isbn } });
            reply(null,book);
        } catch (error) {
            console.log(error);
        }
    });

    this.add({ role: 'book', cmd: 'update' }, async (msg, reply) => {
        try {
            const result = await Book.update({
                title: msg.data.title,
                isbn: msg.data.isbn,
                status: msg.data.status,
                description: msg.data.description
            }, { where: { id: msg.id } });
            reply(null, { fielsAffect: result });
        } catch (error) {
            console.log(error);
        }
    });

    this.add({ role: 'book', cmd: 'delete' }, async (msg, reply) => {
        try {
            const reuslt = await Book.destroy({ where: { id: msg.id } });
            reply(null, { fielsAffect: reuslt });
        } catch (error) {
            console.log(error);
        }
    });
};