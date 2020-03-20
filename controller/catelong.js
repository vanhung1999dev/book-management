const Catelog = require('../model/catelog');
const Seneca = require('seneca')();
Seneca.quiet().use(require('../service/catelog'));
const Promise = require('bluebird');
const act = Promise.promisify(Seneca.act, { context: Seneca });//make seneca to promise to handle 

module.exports.Insert = async (req, res) => {
    try {
        const data = req.body;
        const catelog = await act({ role: 'catelog', cmd: 'insert', data: data });
        res.send(catelog);
    } catch (error) {
        console.log(error);
    }
};

module.exports.Get = async (req, res) => {
    try {
        const id = req.params.id;
        const catelog = await act({ role: 'catelog', cmd: 'get', id: id });
        res.send(catelog);
    } catch (error) {
        console.log(error);
    }
};

module.exports.GetAll = async (req, res) => {
    try {
        const catelogs = await act({ role: 'catelog', cmd: 'getAll' });
        res.send(catelogs);
    } catch (error) {
        console.log(error);
    }
};

module.exports.Update = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const result = await act({ role: 'catelog', cmd: 'update', data: data, id: id });
        res.send(result);
    } catch (error) {
        console.log(error);
    }
}

module.exports.Delete = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await act({ role: 'catelog', cmd: 'delete', id: id });
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
};