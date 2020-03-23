const seneca = require('seneca')();
const User = require('../model/user');
const Permision = require('../model/user_permision');

module.exports = function user_service(options) {
    this.add({ role: 'user', cmd: 'insert' }, async (msg, reply) => {
        try {
            const user = await User.create(msg.data);
            reply(null, user);
        } catch (error) {
            console.log(error);
        }
    });

    this.add({ role: 'user', cmd: 'get' }, async (msg, reply) => {
        try {
            const user = await User.findOne({ where: { id: msg.id } });
            reply(null, user);
        } catch (error) {
            console.log(error);
        }
    });

    this.add({ role: 'user', cmd: 'getAll' }, async (msg, reply) => {
        try {
            const users = await User.findAll();
            reply(null, users);
        } catch (error) {
            console.log(error);
        }
    });

    this.add({ role: 'user', cmd: 'update' }, async (msg, reply) => {
        try {
            const result = await User.update(
                {
                    fullname: msg.data.fullname,
                    email: msg.data.email,
                    status: msg.data.status,
                },
                { where: { id: msg.id } });
            reply(null, { fiedAffected: result });
        } catch (error) {
            console.log(error);
        }
    });

    this.add({ role: 'user', cmd: 'delete' }, async (msg, reply) => {
        try {
            const reuslt = await User.update({ status: 0 }, { where: { id: msg.id } });
            reply(null, { fielsAffect: reuslt });
        } catch (error) {
            console.log(error);
        }
    });

    this.add({ role: 'user', cmd: 'grant permision' }, async (msg, reply) => {
        try {
            const permisons = await Permision.create(msg.data);
            reply(null, permisons);
        } catch (error) {
            console.log(error);
        }
    })
};