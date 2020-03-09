const Sequelize = require('sequelize');
const Connect = require('./connect');

const User = Connect.define('User', {
    username: {type: Sequelize.STRING, allowNull: false},
    fullname: {type: Sequelize.STRING},
    email: {type: Sequelize.STRING},
    salt: {type: Sequelize.STRING},
    password: {type: Sequelize.STRING,allowNull: false},
    status: {type: Sequelize.INTEGER},
    block_massage: {type: Sequelize.STRING},
    block_time: {type: Sequelize.INTEGER},
    create_time: {type: Sequelize.INTEGER},
    create_by: {type: Sequelize.INTEGER}
},{
    timestamps: false,
});

Connect.sync({force: false});

module.exports = User;