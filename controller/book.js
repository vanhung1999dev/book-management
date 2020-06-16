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
            // data.create_time = Date.now();
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
    const { title, name} = req.query;

    if (title && name) {
        try {
            console.log('search by name and title running');
            console.log('title',title);
            console.log('name',name);
            const book = await act({ role: 'book', cmd: 'getByCatalogAndName', title, name });
            res.send(book);
        } catch (error) {
            console.log(error);
        }
    } else if (title) {
        try {
            const book = await act({ role: 'book', cmd: 'getByName', title });
            res.send(book);
        } catch (error) {
            console.log(error);
        }
    } else if (name) {
        try {
            const book = await act({ role: 'book', cmd: 'getByCatalog', name });
            res.send(book);
        } catch (error) {
            console.log(error);
        }
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