'use strict';

var UserModel = require('./../network/model/User');

var Model = function Model() {

    var packagesModel = [];

    packagesModel.push(UserModel);

    return packagesModel;
};

module.exports = Model;