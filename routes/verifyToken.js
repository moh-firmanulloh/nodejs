var jwt = require('jsonwebtoken');
var config = require('./../config/Config');
const Response = require('./../helpers/responses');


function verifyToken(req, res, next) {
  var token = req.headers['x-access-token'];

  if (!token) {
    console.log('no token provided');

    return Response.ErrorResponseRequest(res, "no token provided");
  }
    
  jwt.verify(token, config.secretToken, function(err, decoded) {

    console.log(decoded);
    if (err)
    return Response.ErrorResponseInternal(res, "Failed to authenticate token.");
      
    // if everything good, save to request for use in other routes
    req.userId = decoded.userId;
    next();
  });
}

module.exports = verifyToken;