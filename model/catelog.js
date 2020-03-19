const Connect = require('./connect');
const Sequelize = require('sequelize');

const Catelog = Connect.define('Catelog',{
    name: {type: Sequelize.STRING(255)},
    alias: {type: Sequelize.STRING(255)},
    create_time: {type: Sequelize.INTEGER},
    create_by:{type: Sequelize.INTEGER},
    last_update_time: {type: Sequelize.INTEGER},
    update_by: {type: Sequelize.INTEGER}
},{
    timestamps: false
});


module.exports = Catelog;