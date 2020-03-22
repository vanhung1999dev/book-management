const Connect = require('./connect');
const Sequelize = require('sequelize');

const User_Permision = Connect.define('Permision', {
    permision_id: { type: Sequelize.INTEGER },
    create_by: { type: Sequelize.INTEGER },
    create_time: { type: Sequelize.INTEGER }
}, { timestamps: false });

Connect.sync({ force: false });

module.exports = User_Permision;