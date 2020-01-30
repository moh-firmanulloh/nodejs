'use strict';

var bcrypt = require('bcryptjs');
var Config = require('./../config/Config');

exports.EncryptPassword = function (password) {

    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(Config.hashPassword, salt);

    return hash;
};