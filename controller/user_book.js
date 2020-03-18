const User = require('../model/user');
const Promise = require('bluebird');
const Seneca = require('seneca')();
const act = Promise.promisify(Seneca.act,{context: Seneca});
Seneca.quiet()
    .use(require('../service/user_service'))
    .use(require('../service/book_service'));

module.exports.GetAll = async (req, res) => {
    try {
        const book = await act({ role: 'book', cmd: 'getAll' });
        const uesr = await act({ role: 'user', cmd: 'getAll' });
        res.send({user: uesr,book: book});
    } catch (error) {
        console.log(error);
    }
};
