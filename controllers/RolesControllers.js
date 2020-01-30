const {validationResult} = require('express-validator');
const RolesModel = require('./../network/model/RolesModel');
const Response = require('./../helpers/responses');
let roles = new RolesModel();

/**
 * create handler controller create roles
 */
exports.createRolesControllers = (req, res, next) =>  {

   // get validationResult from middleware router
   const errorValidation = validationResult(req);

   //checking error validation and return response error
   if(!errorValidation.isEmpty()) return Response.ErrorResponseRequest(res, errorValidation.array());

   const data = {
      body: req.body,
      userId: req.userId
   }

   // processing create roles in roles model
   roles.createRoles(data, (err, result) => {
      
      //check if callback have errors
      if(err !== null) return Response.ErrorResponseInternal(res, err);

      return Response.SuccessResponseRequest(res);
   })   
}


exports.updateRolesControllers = (req, res, next) => {

   const data = {
      id: req.params.id,
      userId: req.userId,
      body: req.body
   }
   
   roles.updateRoles(data, (err, result) => {
      
      if(err !== null) return Response.ErrorResponseInternal(res, err);

      return Response.SuccessResponseRequest(res, result);
   });
}

exports.indexRolesControllers = (req, res, next) => {

   roles.getRoles(req.query, (err, result) => {
      
      if(err !== null ) return Response.ErrorResponseInternal(res, err);

      return Response.SuccessResponseRequest(res, result);
   })

} 

exports.showRolesControllers = (req, res, next) => {

   roles.getRolesById(req.params.id, (err, result) => {
      
      if(err !== null) return Response.ErrorResponseInternal(res, err);

      return Response.SuccessResponseRequest(res, result);
   })
}

exports.deleteRolesControllers = (req, res, next) => {

   const data = {
      userId: req.userId,
      id: req.params.id
   }

   roles.deleteRolesById(data, (err, result) => {

      if(err !== null) return Response.ErrorResponseInternal(res, err);

      return Response.SuccessResponseRequest(res);
   })
}