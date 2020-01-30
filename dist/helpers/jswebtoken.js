'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Config = require('./../config/Config');
var jwt = require('jsonwebtoken');
var PassportModel = require('./../network/model/PassportUser');

var JSToken = function () {
    function JSToken() {
        _classCallCheck(this, JSToken);
    }

    _createClass(JSToken, [{
        key: 'createToken',
        value: function createToken(userId, expired) {

            var token = jwt.sign({ userId: userId }, Config.secretBcrypt, {
                algorithm: 'HS256',
                expiresIn: expired
            });

            var PassportUser = new PassportModel();
            PassportUser.user_id = userId;
            PassportUser.token_passport = token;
            PassportUser.expired = expired;

            PassportUser.save();

            return token;
        }
    }]);

    return JSToken;
}();

JSToken.prototype.EXPIRED_DATE_1HOUR = 3600 * 1000;
JSToken.prototype.EXPIRED_DATE_2HOUR = 3600 * 2 * 1000;

module.exports = JSToken;