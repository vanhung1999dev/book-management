const User = require('../model/user');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports.Login = async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ where: { username } });
        const match = await bcrypt.compare(password, user.password);

        if (!match) {
            res.json({ msg: 'not valid password', code: 401, status: 0 })
        }
        if (user.status === 0) {
            res.json({ msg: 'user was block', code: 401, status: 0 });
        }
        if (user) {
            const token = jwt.sign({ id: user.id, name: user.username }, process.env.secret_key);
            res.end({ token, code: 200, status: 1 });
        } else
            res.json({ msg: 'invalid username or password', code: 401, status: 0 });

    } catch (error) {
        console.log(error);
    }
};