const Book = require('../model/book');
const Author = require('../model/author');
const Catalog = require('../model/catelog');

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
            const { current_page } = msg;
            const limit = 24;
            let offset = 0;

            if (current_page) offset = (current_page - 1) * limit;

            const books = await Book.findAndCountAll({
                limit,
                offset,
                order: [['id', 'DESC']]
            });
            reply(null, books);
        } catch (error) {
            console.log(error);
        }
    });


    this.add({ role: 'book', cmd: 'update' }, async (msg, reply) => {
        try {
            const { title, rate, description, create_time, url, CatelogId, AuthorId, pages } = msg.data;
            const result = await Book.update(
                { title, rate, description, create_time, url, CatelogId, AuthorId, pages },
                { where: { id: msg.id } }
            );
            
            reply(null, { fielsAffect: result });
        } catch (error) {
            console.log(error);
        }
    });

    this.add({ role: 'book', cmd: 'approve' }, async (msg, reply) => {
        try {
            const id = msg.id;
            const { approved_time, approved_by } = msg.data;
            const result = await Book.update({ status: 1, approved_time, approved_by }, { where: { id } });
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