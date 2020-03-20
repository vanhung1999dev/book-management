const seneca = require('seneca')();
const User = require('../model/user');

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
                    block_massage: msg.data.block_massage,
                    block_time: msg.data.block_time,
                    create_time: msg.data.create_time,
                    create_by: msg.data.create_by
                },
                { where: { id: msg.id } });
            reply(null, {fiedAffected: result});
        } catch (error) {
            console.log(error);
        }
    });

    this.add({ role: 'user', cmd: 'delete' }, async (msg, reply) => {
        try {
            const reuslt = await User.destroy({ where: { id: msg.id } });
            reply(null, { fielsAffect: reuslt });
        } catch (error) {
            console.log(error);
        }
    });
};