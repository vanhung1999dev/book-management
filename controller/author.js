const Author = require('../model/author');
const Seneca = require('seneca')();
Seneca.quiet().use(require('../service/author'));
const Promise = require('bluebird');
const act = Promise.promisify(Seneca.act, { context: Seneca });//make seneca to promise to handle 

module.exports.Insert = async (req, res) => {
    try {
        const data = req.body
        const author = await act({ role: 'author', cmd: 'insert', data: data });
        res.send(author);
    } catch (error) {
        console.log(error);
    }
};

module.exports.Get = async (req, res) => {
    try {
        const id = req.params.id;
        const author = await act({ role: 'author', cmd: 'get', id: id });
        res.send(author);
    } catch (error) {
        console.log(error);
    }
};

module.exports.GetAll = async (req, res) => {
    try {
        const authors = await act({ role: 'author', cmd: 'getAll' });
        res.send(authors);
    } catch (error) {
        console.log(error);
    }
};

module.exports.Update = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await act({ role: 'author', cmd: 'update', id: id });
        res.send(result)
    } catch (error) {
        console.log(error);
    }
};

module.exports.Delete = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await act({ role: 'author', cmd: 'delete', id: id });
        res.send(result)
    } catch (error) {
        console.log(error);
    }
}