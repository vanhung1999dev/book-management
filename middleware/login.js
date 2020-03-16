const User = require('../model/user');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;

module.exports.Login = async (req, res) => {
    passport.use(new LocalStrategy({ session: false }, async (username, password, done) => {
        console.log("username:", username);
        console.log('password:', password)
        const user = await User.findOne({ where: { username: username, password: password } });
        console.log("user", user);
        if (user) {
            const token = jwt.sign({ id: user.id, name: user.name }, process.env.secret_key);
            req.token = token;
            res.send(token);
        }
        throw new Error('invalid username or password');
    }));
};