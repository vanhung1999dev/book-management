const User = require('../model/user');
const Permision = require('../model/user_permision');
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = function account_service() {
    try {
        this.add({ role: 'account', cmd: 'insert' }, async (msg, reply) => {
            const username = msg.data.username;
            const { create_by, create_time } = msg.data;
            let hashPassword = await bcrypt.hash(msg.data.password, saltRounds);
            const account = await User.create({ username, password: hashPassword, status: 1, create_by, create_time });
            reply(null, account);
        })
    } catch (error) {
        console.log('error');
    }
    try {
        this.add({ role: 'account', cmd: 'get' }, async (msg, reply) => {
            const id = msg.id;
            const account = User.findOne({ where: { id } });
            reply(null, account);
        });
    } catch (error) {
        console.log(error);
    }

    try {
        this.add({ role: 'account', cmd: 'getAll' }, async (msg, reply) => {
            const accounts = User.findAll();
            reply(null, accounts);
        });
    } catch (error) {
        console.log(error);
    }

    try {
        this.add({ role: 'account', cmd: 'update' }, async (msg, reply) => {
            const id = msg.id;
            const username = msg.data.username;
            const password = await bcrypt.hash(msg.data.password, saltRounds);
            const result = await User.update({ username, password }, { where: { id } });
            reply(null, { fieldAffected: result });
        })
    } catch (error) {
        console.log(error);
    }

    try {
        this.add({ role: 'account', cmd: 'block' }, async (msg, reply) => {
            const id = msg.id;
            let { block_massage } = msg.data
            const result = await User.update({ status: 0, block_massage }, { where: { id } });
            reply(null, { fieldAffected: result })
        })
    } catch (error) {
        console.log(error);
    }
}
