const User = require('../model/user');
const Seneca = require('seneca')();
Seneca.quiet()
    .use(require('../service/user_service'))
    .use(require('../service/book_service'));

module.exports.GetAll = async (req, res) => {
    try {
        const book = await Seneca.act({ role: 'book', cmd: 'getAll' });
        const uesr = await Seneca.act({ role: 'user', cmd: 'getAll' });
        res.send({user: uesr,book: book});
    } catch (error) {
        console.log(error);
    }
};
