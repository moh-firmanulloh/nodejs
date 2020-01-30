'use strict';

var express = require('express');
var UserModel = require('./../../network/model/User');
var routers = express.Router();
var encrypt = require('./../../helpers/encrypt');
var ClassToken = require('./../../helpers/jswebtoken.js');
var Responses = require('./../../helpers/responses');

var _require = require('./../../helpers/responses/success'),
    Success = _require.Success,
    SuccessManager = _require.SuccessManager;

routers.post('/register', function (req, res) {

    // console.log(req.headers);

    var _req$body = req.body,
        name = _req$body.name,
        email = _req$body.email,
        password = _req$body.password,
        phone = _req$body.phone,
        address = _req$body.address;

    // console.log(encrypt.EncryptPassword(password));

    var user = new UserModel();
    user.name = name;
    user.email = email;
    user.password = encrypt.EncryptPassword(password);
    user.phone = phone;
    user.address = address;

    user.save(function (err) {
        if (err) throw err;
    });

    // console.log(new SuccessManager().STATUS_CODE_500);
    var reponses = new Success(200, 'success', 'success');
    return res.send(reponses);
});

module.exports = routers;