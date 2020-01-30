const Config = require('./../config/Config');
const jwt = require('jsonwebtoken');
const PassportModel = require('../network/model/PassportModel');


class JSToken {
    
    constructor(){}

    createToken(userId, expired) {
        
        const token = jwt.sign({ userId}, Config.secretToken, {
            algorithm: 'HS256',
            expiresIn: expired
        });

        const decode = jwt.verify(token, Config.secretToken);
        
        const PassportUser = new PassportModel();
        PassportUser.users_id = userId;
        PassportUser.token_string = token;
        PassportUser.expired_date = decode.exp;

        PassportUser.save();

        return token;
    }  
    
}

JSToken.prototype.EXPIRED_DATE_1HOUR = 3600 * 1000;
JSToken.prototype.EXPIRED_DATE_2HOUR = 3600 * 2 * 1000;

module.exports = JSToken;
