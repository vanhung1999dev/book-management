const jwt = require('jsonwebtoken');
require('dotenv').config();
const url = require('url');
const list_permision = require('../constant/path');
const Permision = require('../model/user_permision');

module.exports.verifyToken_authorization = async (req, res, next) => {
    try {
        console.log(req.headers);
        const path_name = url.parse(req.url).pathname;
        const login_pattern = new RegExp('/login');

        //path login don't need authenticate
        console.log("login", login_pattern.test(path_name));
        if (login_pattern.test(path_name)) {
            next();
        }
        else {
            
            // authenticate user
            let bearerHeader = req.headers['authorization'];
            console.log('bearerHeader:',bearerHeader);
            if (bearerHeader) {
                const token = bearerHeader.split(" ")[1];
                req.token = token

                jwt.verify(req.token, process.env.secret_key, (err, data) => {
                    if (err) res.json('Token is not verify');
                })
            }else{
                console.log('do not have token');
            }

            //check authorization of user
            const payload = jwt.decode(req.token);
            console.log('payload', payload);
            req.id = payload.id;
            console.log('req.id:', req.id);

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
                    console.log('permision_id:', id);
                    const isPermision = await Permision.findOne({ where: { permision_id: id, Userid: payload.id } });
                    console.log('permision', isPermision);
                    if (isPermision)
                        count++;
                }
            }

            //check user have this permision
            console.log('count', count);
            if (count > 0)
                next();
            else
                res.send('you don not have permision with action');
        }

    } catch (error) {
        console.log(error);
    }
};