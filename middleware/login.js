const User = require('../model/user');
const jwt = require('jsonwebtoken');
require('dotenv').config();


module.exports.Login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ where: { username, password } });
        if (user) {
            const token = jwt.sign({ id: user.id, name: user.username }, process.env.secret_key);
            res.send(token);
        } else res.send('invalid username or password,,please check again');
    } catch (error) {
        console.log(error);
    }
};