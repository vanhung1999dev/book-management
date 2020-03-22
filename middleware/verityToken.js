const jwt = require('jsonwebtoken');
require('dotenv').config();
const url = require('url');
const list_permision = require('../constant/path');
const Permision = require('../model/user_permision');

module.exports.verifyToken_authorization = async (req, res, next) => {
    try {
        const path_name = url.parse(req.url).pathname;
        const login_pattern = new RegExp('/login');

        //path login dont need authenticate
        if (login_pattern.test(path_name))
            next();
        else {
            // authenticate user
            var beareHeader = req.headers['authorization'];
            if (beareHeader) {
                const token = beareHeader.split(" ")[1];
                req.token = token

                jwt.verify(req.token, process.env.secret_key, (err, data) => {
                    if (err) res.json('Token is not verify');
                })
            }

            //check authorization of user
            const payload = jwt.decode(req.token);
            console.log('payload', payload);

            const http_method = req.method;
            const current_path = http_method + "," + path_name;
            console.log('current path:', current_path);
            let count = 0;

            for (i = 0; i < list_permision.length; i++) {
                const permision_pattern = new RegExp(list_permision[i].path);
                console.log('permision pattern:', permision_pattern);

                if (permision_pattern.test(current_path)) {
                    console.log('result matching:', permision_pattern.test(current_path));
                    const id = list_permision[i].id_permision;//get permision id to compare
                    const isPermision = Permision.findOne({ where: { permision_id: id, Userid: payload.id } });
                    if (isPermision)
                        count++;
                }
            }
            //check user have this permision
            console.log('count', count);
            if (count > 0)
                next();
            else
                throw new Error('you dont have permision with action');
        }
    } catch (error) {
        console.log(error);
    }
};