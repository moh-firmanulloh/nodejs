'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mongoose = require('mongoose');
var Config = require('./Config');
var Collection = require('./Collection');

var DBConnect = function () {
    function DBConnect() {
        _classCallCheck(this, DBConnect);

        this._connect();
    }

    _createClass(DBConnect, [{
        key: '_connect',
        value: function _connect() {
            var _this = this;

            mongoose.connect(Config.server_mongoose, { useNewUrlParser: true, useUnifiedTopology: true }, function (err) {

                if (err) console.log('error connect to database');

                console.log("conencted database");

                _this._createCollection();
            });
        }
    }, {
        key: '_createCollection',
        value: function _createCollection() {
            Collection().map(function (value) {
                return value;
            });
        }
    }]);

    return DBConnect;
}();

module.exports = new DBConnect();