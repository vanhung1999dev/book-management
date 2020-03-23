const User = require('../model/user');
const Seneca = require('seneca')();
Seneca.quiet().use(require('../service/account'));
const Promise = require('bluebird');
const act = Promise.promisify(Seneca.act, { context: Seneca });//make seneca to promise to handle 

module.exports.MakeAccount = async (req, res) => {
    try {
        let data = req.body;
        data.create_by = req.id;
        data.create_time = Date.now();
        const account = await act({ role: 'account', cmd: 'insert', data: data });
        res.send(account);
    } catch (error) {
        console.log(error);
    }
};

module.exports.GetAccount = async (req, res) => {
    try {
        const id = req.params.id;
        const account = await act({ role: 'account', cmd: 'get', id: id });
        res.send(account);
    } catch (error) {
        console.log(error);
    }
};

module.exports.GetAccounts = async (req, res) => {
    try {
        const accounts = await act({ role: 'account', cmd: 'getAll' });
        res.send(accounts);
    } catch (error) {
        console.log(error);
    }
};

module.exports.UpdateAccount = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const result = await act({ role: 'account', cmd: 'update', id: id, data: data });
        res.send(result);
    } catch (error) {
        console.log(error);
    }
};

module.exports.BlockAccount = async (req, res) => {
    try {
        let data = req.body;
        data.block_time = Date.now();
        const id = req.params.id;
        const result = await act({ role: 'account', cmd: 'block', id: id, data: data });
        res.send(result);
    } catch (error) {
        console.log(error);
    }
};