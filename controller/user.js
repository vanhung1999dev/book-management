const User = require('../model/user');

module.exports.Insert = async (req, res) => {
    try {
        const user = await User.create({
            username: 'hung',
            fullname: 'nguyen van hung',
            email: 'vanhung1999dev@gmail.com',
            password: '123'
        });
        res.send(user);
    } catch (error) {
        console.log(error);
    }
};

module.exports.Get = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findOne({
            where: { id }
        });
        res.send(user);
    } catch (error) {
        console.log(error);
    }
};

module.exports.GetAll = async (req, res) => {
    try {
        const users = await User.findAll();
        res.send(users);
    } catch (error) {
        console.log(error);
    }
};

module.exports.Update = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await User.update({ email: 'game@gmail.com' }, { where: { id } });
        res.send(result);
    } catch (error) {
        console.log(error);
    }
};

module.exports.Delete = async (req, res) => {
    try {
        const id = req.params.id;
        const result = User.destroy({ where: { id } });
        res.send(result);
    } catch (error) {
        console.log(error);
    }
};