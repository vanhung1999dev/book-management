const Author = require('../model/author');

module.exports = function author_service() {
    try {
        this.add({ role: 'author', cmd: 'insert' }, async (msg, reply) => {
            const author = await Author.create(msg.data);
            reply(null, author);
        });
    } catch (error) {
        console.log(error);
    }

    try {
        this.add({ role: 'author', cmd: 'get' }, async (msg, reply) => {
            const author = await Author.findOne({ where: { id: msg.id } });
            reply(null, author);
        });
    } catch (error) {
        console.log(error);
    }

    try {
        this.add({ role: 'author', cmd: 'getAll' }, async (msg, reply) => {
            const authors = await Author.findOne();
            reply(null, authors);
        });
    } catch (error) {
        console.log(error);
    }

    try {
        this.add({ role: 'author', cmd: 'update' }, async (msg, reply) => {
            const result = await Author.update({ name: 'nothing' }, { where: { id: msg.id } });
            reply(null, { fieldAffect: result });
        });
    } catch (error) {
        console.log(error);
    }

    try {
        this.add({ role: 'author', cmd: 'delete' }, async (msg, reply) => {
            const result = await Author.destroy({ where: { id: msg.id } });
            reply(null, { fieldAffect: result });
        });
    } catch (error) {
        console.log(error);
    }
};