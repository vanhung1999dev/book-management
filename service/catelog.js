const Catelog = require('../model/catelog');
const Seneca = require('seneca')();

module.exports = function catelog_service(Option) {
    this.add({ role: 'catelog', cmd: 'insert' }, async (msg, reply) => {
        try {
            const catelog = await Catelog.create(msg.data);
            reply(null, catelog);
        } catch (error) {
            console.log(error);
        }
    });

    this.add({ role: 'catelog', cmd: 'get' }, async (msg, reply) => {
        try {
            const catelog = await Catelog.findOne({ where: { id: msg.id } });
            reply(null, catelog);
        } catch (error) {
            console.log(error);
        }
    });

    this.add({ role: 'catelog', cmd: 'getAll' }, async (msg, reply) => {
        try {
            const catelogs = await Catelog.findAll();
            reply(null, catelogs);
        } catch (error) {
            console.log(error);
        }
    });

    this.add({ role: 'catelog', cmd: 'update' }, async (msg, reply) => {
        try {
            const { last_update_time, last_update_by } = msg.data;
            const result = await Catelog.update({
                name: msg.data.name,
                alias: msg.data.alias,
                last_update_time,
                last_update_by
            }, { where: { id: msg.id } });
            reply(null, result);
        } catch (error) {
            console.log(error);
        }
    })

    this.add({ role: 'catelog', cmd: 'delete' }, async (msg, reply) => {
        try {
            const result = await Catelog.destroy({ where: { id: msg.id } });
            reply(null, { fielsAffect: result });
        } catch (error) {

        }
    });
};