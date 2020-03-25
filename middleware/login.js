const User = require('../model/user');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const bcrypt = require('bcrypt');
const saltRounds = 10;


module.exports.Login = async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password)
            res.send('miss usename or password');
        else {
            const user = await User.findOne({ where: { username } });
            const match = await bcrypt.compare(password, user.password);
            if (!match)
                res.send('not valid password')
            else if (user.status == 0)
                res.send('user was blocked');
            else if (user) {
                const token = jwt.sign({ id: user.id, name: user.username }, process.env.secret_key);
                res.send(token);
            } else
                res.send('invalid username or password,,please check again');
        }

    } catch (error) {
        console.log(error);
    }
};