const Book = require('../model/book');

module.exports = function book_service(){
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
    
        this.add({ role: 'book', cmd: 'update' }, async (msg, reply) => {
            try {
                const result = await Book.update({ name: 'nothing' }, { where: { id: msg.id } });
                reply(null, result);
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