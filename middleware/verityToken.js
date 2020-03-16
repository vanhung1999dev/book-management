const jwt = require('jsonwebtoken');
require('dotenv').config();
const list_unauthenticate_path = require('../constant/path');
const url = require('url');

module.exports.verifyToken = async (req,res,next) => {
    const path = url.parse(req.url).pathname;
    const regex = new RegExp(list_unauthenticate_path[0]);
    if(regex.test(path))
        next();
    else 
    throw new Error('you not permision');
};