const User = require('../model/user');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports.Login = async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ where: { username } }, { raw: true });
        if (!user) {
            res.json({ msg: 'Không tìm thấy người dùng...', code: 401, status: 0 });
            return;
        }

        const match = await bcrypt.compare(password, user.dataValues.password);

        if (!match) {
            res.json({ msg: 'Password không đúng...Xin mời nhập lại ', code: 401, status: 0 });
            return;
        }
        if (user.status === 0) {
            res.json({ msg: 'Tài khoản đã bị khoá', code: 401, status: 0 });
            return;
        }
        if (user) {
            const token = jwt.sign({ id: user.id, name: user.username }, process.env.secret_key);
            res.json({data: user, code: 200, status: 1 });
            return;
        }
    } catch (error) {
        console.log(error);
    }
};