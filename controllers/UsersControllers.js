const Response = require('./../helpers/responses');
const encrypt = require('./../helpers/encrypt');
const UserModel = require('../network/model/UserModel');
const RolesModel = require('../network/model/RolesModel');
const Jswebtoken = require('./../helpers/jswebtoken');
let user = new UserModel();


/** 
 * creating function controller create users
 */
exports.CreateUsersControllers = async (req, res, next) => {
    /**
     * get result validation
     */
    const errorValidation = validationResult(req);

    if(!errorValidation.isEmpty()) return Response.ErrorResponseRequest(res, Response.ResponseErrorManager.validateForm(errorValidation.array()))

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

exports.ShowUsersControllers = (req, res, next) => {
    UserModel.findById(req.params.id, (err, user) => {
        console.log(user);
        if(err !== null) return Response.ErrorResponseInternal(res);
        return  Response.SuccessResponseRequest(res, user);
    }).select('-password').where({deleted_at: null});
}

exports.IndexUsersControllers = (req, res, next) => {
    UserModel.find(req.query, (err, user) => {
        if(err !== null) return Response.ErrorResponseInternal(res);
        return  Response.SuccessResponseRequest(res, user);
    }).select('-password').where({deleted_at: null});
}


exports.UpdateUsersControllers = (req, res, next) => { 

    // create object for passing to updateUsers function

    const data = {
        id: req.params.id,
        body: req.body
    }
   
    // processing data with callback (err, document)
    user.updateUsers(data, (err, document) => {

        //if error not null return response error 
        if(err !== null) return Response.ErrorResponseInternal(err);

        //return if not error
        return Response.SuccessResponseRequest(res, document);
    })
}
 
exports.DeleteUsersControllers = (req, res, next) => {

    // create object for passing to deleteUsers function

    const data = {
       userId: req.userId,
       id: req.params.id
    };

    // processing data with callback (err, document)
    user.deleteUsers(data, (err, result) => {
        
        //if error not null return response error 
        if(err !== null) return Response.ErrorResponseInternal(res);

        //return if not error
        return Response.SuccessResponseRequest(res, result)
    })
}