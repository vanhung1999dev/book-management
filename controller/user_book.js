const User = require('../model/user');
const Seneca = require('seneca')();
Seneca.quiet().use(require('../service/user_book_service'));



module.exports.GetAll = async (req, res) => {
    try {
        Seneca.act({ role: 'user_book', cmd: 'getAll' }, (err, reuslt) => {
            if (err) console.log(err);
            res.send(reuslt);
        });
    } catch (error) {
        console.log(error);
    }
};
