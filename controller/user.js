const User = require('../model/user');
const Seneca = require('seneca')();
Seneca.quiet()
     .use(require('../service/user_service'));

module.exports.Insert = async (req, res) => {
    try {
        const data = req.body;
        Seneca.act({ role: 'user', cmd: 'insert', data: data }, (err, result) => {
            if (err) console.log(err);
            res.send(result);
        });
    } catch (error) {
        console.log(error);
    }
};

module.exports.Get = async (req, res) => {
    try {
        const id = req.params.id;
        Seneca.act({ role: 'user', cmd: 'get', id: id }, (err, reuslt) => {
            if (err) console.log(err);
            res.send(reuslt);
        });
    } catch (error) {
        console.log(error);
    }
};

module.exports.GetAll = async (req, res) => {
    try {
        Seneca.act({ role: 'user', cmd: 'getAll' }, (err, reuslt) => {
            if (err) console.log(err);
            res.send(reuslt);
        });
    } catch (error) {
        console.log(error);
    }
};

module.exports.Update = async (req, res) => {
    try {
        const id = req.params.id;
        Seneca.act({ role: 'user', cmd: 'update', id: id }, (err, result) => {
            if (err) console.log(err);
            res.send(result);
        });
    } catch (error) {
        console.log(error);
    }
};

module.exports.Delete = async (req, res) => {
    try {
        const id = req.params.id;
        Seneca.act({ role: 'user', cmd: 'delete', id: id }, (err, result) => {
            if (err) console.log(err);
            res.status(200).json(result);
        });
    } catch (error) {
        console.log(err)
    }
};