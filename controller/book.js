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
    try {
        if (Object.keys(req.query).length === 0) {
            try {
                const books = await act({ role: 'book', cmd: 'getAll' });
                res.send(books);
            } catch (error) {
                console.log(error);
            }
        } else if (req.query.isbn && req.query.name && req.query.title) {
            try {
                console.log('final work');
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
        } else if (req.query.title && req.query.name) {
            try {
                console.log('get by name and author work')
                console.log('title', req.query.title);
                console.log('name', req.query.name)
                const title = req.query.title;
                const name = req.query.name;
                const book = await act({ role: 'book', cmd: 'getByNameAndAuthor', title: title, name: name });
                res.send(book);
            } catch (error) {
                console.log(error);
            }
        } else if (req.query.title && req.query.isbn) {
            try {
                console.log('get by name and isbn work');
                const title = req.query.title;
                const isbn = req.query.isbn;
                const book = await act({ role: 'book', cmd: 'getByNameAndISBN', title: title, isbn: isbn });
                res.send(book);
            } catch (error) {
                console.log(error);
            }
        } else if (req.query.isbn && req.query.name) {
            try {
                console.log('get by isbn and author work');
                const isbn = req.query.isbn;
                const name = req.query.name;
                const book = await act({ role: 'book', cmd: 'getByISBNandAuthor', isbn: isbn, name: name });
                res.send(book);
            } catch (error) {
                console.log(error);
            }
        } else if (req.query.title) {
            try {
                console.log('get by name work')
                const title = req.query.title;
                const book = await act({ role: 'book', cmd: 'getByName', title: title });
                res.send(book);
            } catch (error) {
                console.log(error);
            }
        } else if (req.query.name) {
            try {
                console.log('get by author work')
                const name = req.query.name;
                const book = await act({ role: 'book', cmd: 'getByAuthor', name: name });
                res.send(book);
            } catch (error) {
                console.log(error);
            }
        } else if (req.query.isbn) {
            try {
                console.log('get by isbn work')
                const isbn = req.query.isbn;
                const book = await act({ role: 'book', cmd: 'getByISBN', isbn: isbn });
                res.send(book);
            } catch (error) {
                console.log(error);
            }
        }
    } catch (error) {
        console.log(error);
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