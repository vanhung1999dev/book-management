const Book = require('../model/book');
const Catalog = require('../model/catelog');

module.exports = function search_service() {

    this.add({ role: 'book', cmd: 'getByName' }, async (msg, reply) => {
        try {
            const book = await Book.findAll({ where: { title: msg.title } });
            reply(null, book);
        } catch (error) {
            console.log(error);
        }
    });

    this.add({ role: 'book', cmd: 'getByCatalog' }, async (msg, reply) => {
        try {
            const book = await Book.findAll(
                {
                    include: {
                        model: Catalog,
                        require: true,
                        where: { name: msg.name }
                    }
                }
            );
            reply(null, book);
        } catch (error) {
            console.log(error);
        }
    });

    this.add({ role: 'book', cmd: 'getByCatalogAndName' }, async (msg, reply) => {
        try {
            const book = await Book.findAll(
                { where: { title: msg.title } }, {
                include: {
                    model: Catalog,
                    require: true,
                    where: { name: msg.name }
                }
            }
            );
            reply(null, book);
        } catch (error) {

        }
    })


};