const User = require('../model/user');
const Seneca = require('seneca')();
Seneca.quiet().use(require('../service/user'));
const Promise = require('bluebird');
const act = Promise.promisify(Seneca.act, { context: Seneca });

module.exports.Insert = async (req, res) => {
    try {
        const data = req.body;
        const user = await act({ role: 'user', cmd: 'insert', data: data });
        res.send(user);
    } catch (error) {
        console.log(error);
    }
};

module.exports.Get = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await act({ role: 'user', cmd: 'get', id: id });
        res.send(user);
    } catch (error) {
        console.log(error);
    }
};

module.exports.GetAll = async (req, res) => {
    try {
        const users = await act({ role: 'user', cmd: 'getAll' });
        res.send(users);
    } catch (error) {
        console.log(error);
    }
};

module.exports.Update = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await act({ role: 'user', cmd: 'update', id: id });
        res.send(result);
    } catch (error) {
        console.log(error);
    }
};

module.exports.Delete = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await act({ role: 'user', cmd: 'delete', id: id });
        res.status(200).json(result);
    } catch (error) {
        console.log(err)
    }
};