const Connect = require('./connect');
const Sequelize = require('sequelize');
const User_Permison = require('./user_permision');

const User = Connect.define('User', {
    username: { type: Sequelize.STRING, allowNull: false },
    fullname: { type: Sequelize.STRING },
    email: { type: Sequelize.STRING },
    password: { type: Sequelize.STRING, allowNull: false },
    status: { type: Sequelize.INTEGER },
    block_massage: { type: Sequelize.STRING },
    block_time: { type: Sequelize.INTEGER },
    create_time: { type: Sequelize.INTEGER },
    create_by: { type: Sequelize.INTEGER }
}, {
    timestamps: false
});

Connect.sync({ force: false });
User.hasMany(User_Permison);
User_Permison.belongsTo(User);

module.exports = User;