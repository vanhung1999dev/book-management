const Author = require('../model/author');
const Seneca = require('seneca')();
Seneca.quiet().use(require('../service/search_book'));
const Promise = require('bluebird');
const act = Promise.promisify(Seneca.act, { context: Seneca });//make seneca to promise to handle 

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

module.exports.GetByNameAndAuthor = async (req, res) => {
    try {
        const title = req.query.title;
        const name = req.query.name;
        const book = await act({ role: 'book', cmd: 'getByNameAndAuthor', title: title, name: name });
        res.send(book);
    } catch (error) {
        console.log(error);
    }
};

module.exports.GetByNameAndISBN = async (req, res) => {
    try {
        const title = req.query.title;
        const isbn = req.query.isbn;
        const book = await act({ role: 'book', cmd: 'getByNameAndISBN', title: title, isbn: isbn });
        res.send(book);
    } catch (error) {
        console.log(error);
    }
};

module.exports.GetByAuthorAndISBN = async (req, res) => {
    try {
        const isbn = req.query.isbn;
        const name = req.query.name;
        const book = await act({ role: 'book', cmd: 'getByISBNandAuthor', isbn: isbn, name: name });
        res.send(book);
    } catch (error) {
        console.log(error);
    }
};

module.exports.GetByNameAndAuthorAndIsbn = async (req, res) => {
    try {
        const isbn = req.query.isbn;
        const name = req.query.name;
        const title = req.query.title;
        const book = await act({
            role: 'book', cmd: 'get_by_name_isbn_author',
            isbn: isbn, name: name, title: title
        });
        res.send(book);
    } catch (error) {
        console.log(error);
    }
};