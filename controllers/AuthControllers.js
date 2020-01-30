const Response = require('./../helpers/responses');
const encrypt = require('./../helpers/encrypt');
const UserModel = require('../network/model/UserModel');
const Jswebtoken = require('./../helpers/jswebtoken');
const { validationResult } = require('express-validator');
let user = new UserModel();
let jswebtoken = new Jswebtoken();


exports.RegisterControllers = async (req, res) => {

    const errorValidation = validationResult(req);

    console.log(errorValidation);
    if(!errorValidation.isEmpty()) return Response.ErrorResponse(res, errorValidation.array())

    const { name, email, password, phone, address} = req.body

    user.name = name;
    user.email = email;
    user.password = encrypt.EncryptPassword(password);
    user.phone = phone;
    user.address = address;

    try {
        await user.save();
        return Response.SuccessResponseRequest(res, "registered");
    } catch(err) {
        return Response.ErrorResponseInternal(res, err);
    }
    
}

exports.LoginControllers = (req, res) => {

    const errorValidation = validationResult(req);

    if(!errorValidation.isEmpty()) return Response.ErrorResponseInternal(res, errorValidation.array())

    user.checkLogin(req.body, (err, result) => {

        if(err !== null) return Response.ErrorResponseInternal(res, err);

        const token = jswebtoken.createToken(result._id, jswebtoken.EXPIRED_DATE_1HOUR);

        return Response.SuccessResponseRequest(res,{token: token});
      
    });
}

