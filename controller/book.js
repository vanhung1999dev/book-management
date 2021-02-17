const Book = require('../model/book');
const Seneca = require('seneca')();
Seneca.quiet().use(require('../service/book'))
    .use(require('../service/search_book'));
const Promise = require('bluebird');
const act = Promise.promisify(Seneca.act, { context: Seneca });//make seneca to promise to handle 

module.exports.Insert = async (req, res) => {
    try {
        const data = req.body;

        if (data.status == 0) {
            data.create_by = req.id;
            const book = await act({ role: 'book', cmd: 'insert', data: data });
            res.send(book);
        } else
            res.send('book was approved');
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

module.exports.FilterBook = async (req, res) => {
    try {
        const {current_page} = req.query;
        const books = await act({ role: 'book', cmd: 'getAll',current_page:current_page });
        res.send(books);
    } catch (error) {
        console.log('error', error);
    }
};

module.exports.Update = async (req, res) => {
    try {
        const id = req.params.id;
        const book = await act({ role: 'book', cmd: 'get', id: id });

        if (book.status == 0) {
            const data = req.body;
            const result = await act({ role: 'book', cmd: 'update', id: id, data: data });
            res.send(result);
        } else
            res.send('book was approve by' + book.approved_by);
    } catch (error) {
        console.log(error);
    }
};

module.exports.Approved = async (req, res) => {
    try {
        const id = req.params.id;
        let data = req.body;
        data.approved_by = req.id;
        //data.approved_time = Date.now();

        const result = await act({ role: 'book', cmd: 'approve', id: id, data: data });
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