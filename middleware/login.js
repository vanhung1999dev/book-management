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
            res.status(404).json({ err: 'not valid password' })
        }
        if (user.status == 0){
            res.status(404).json({ err: 'user was block' });
        }
        if (user) {
            const token = jwt.sign({ id: user.id, name: user.username }, process.env.secret_key);
            res.send(token);
        } else
            res.status(404).json('invalid username or password');
            
    } catch (error) {
        console.log(error);
    }
};