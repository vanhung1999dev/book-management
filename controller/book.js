const Book = require('../model/book');
const Seneca = require('seneca')();
Seneca.quiet().use(require('../service/book'));
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
        const books = await act({ role: 'book', cmd: 'getAll' });
        res.send(books);
    } catch (error) {
        console.log(error);
    }
};

module.exports.GetByName = async (req, res) => {
    try {
        const title = req.query.title;
        const book = await act({ role: 'book', cmd: 'getByName', title: title });
        res.send(book);
    } catch (error) {
        console.log(error);
    }
};

module.exports.GetByAuthor = async (req, res) => {
    try {
        const name = req.query.name;
        const book = await act({ role: 'book', cmd: 'getByAuthor', name: name });
        res.send(book);
    } catch (error) {
        console.log(error);
    }
};

module.exports.GetByISBN = async (req, res) => {
    try {
        const isbn = req.query.isbn;
        const book = await act({ role: 'book', cmd: 'getByISBN', isbn: isbn });
        res.send(book);
    } catch (error) {
        console.log(error);
    }
};

module.exports.Update = async (req, res) => {
    try {
        const data = req.body;
        const id = req.params.id;
        const result = await act({ role: 'book', cmd: 'update', id: id, data: data });
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