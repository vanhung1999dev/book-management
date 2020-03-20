const Book = require('../model/book');
const Seneca = require('seneca')();
Seneca.quiet().use(require('../service/book_service'));
const Promise = require('bluebird');
const act = Promise.promisify(Seneca.act, { context: Seneca });//make seneca to promise to handle 

module.exports.Insert = async (req, res) => {
    try {
        const data = req.body;
        const book = await act({ role: 'book', cmd: 'insert', data: data });
        res.send(book);
    } catch (error) {
        console.log(error);
    }
};

module.exports.Get = async (req, res) => {
    try {
        const id = req.params.id;
        const book = await act({ role: 'book', cmd: 'get', id: id });
        res.send(book);
    } catch (error) {
        console.log(error);
    }
};

module.exports.GetAll = async (req, res) => {
    try {
        const books = await Seneca.act({ role: 'book', cmd: 'getAll' });
        res.send(books);
    } catch (error) {
        console.log(error);
    }
};

module.exports.Update = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await act({ role: 'book', cmd: 'update', id: id });
        res.send(result);
    } catch (error) {
        console.log(error);
    }
};

module.exports.Delete = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await act({ role: 'book', cmd: 'delete', id: id });
        res.status(200).json(result);
    } catch (error) {
        console.log(err)
    }
};