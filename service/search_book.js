const Book = require('../model/book');
const Author = require('../model/author')

module.exports = function search_service() {
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
            reply(null, book);
        } catch (error) {
            console.log(error);
        }
    });

    this.add({ role: 'book', cmd: 'getByNameAndAuthor' }, async (msg, reply) => {
        try {
            const book = await Book.findAll(
                { where: { title: msg.title } }
                , {
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

    this.add({ role: 'book', cmd: 'getByNameAndISBN' }, async (msg, reply) => {
        try {
            const book = await Book.findAll({ where: { title: msg.title, isbn: msg.isbn } });
            reply(null, book);
        } catch (error) {
            console.log(error);
        }
    });

    this.add({ role: 'book', cmd: 'getByISBNandAuthor' }, async (msg, reply) => {
        try {
            const book = await Book.findAll(
                { where: { isbn: msg.isbn } },
                {
                    include: {
                        model: Author,
                        required: true,
                        where: { name: msg.name }
                    }
                });
            reply(null, book);
        } catch (error) {

        }
    });
};