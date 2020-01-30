'use strict';

var erros = {};
var util = require('util');

var ApiError = function ApiError(httpCode, httpMessage, description) {
    undefined.httpCode = httpCode;
    undefined.httpMessage = httpMessage;
    undefined.description = description;
    undefined.details = null;
};

util.inherits(ApiError, Error);

module.exports = errors;

erros.ApiError = ApiError;

ApiError.prototype.withDetails = function (details) {
    undefined.details = details;
    return undefined;
};

// type errors

errors.internal_error = new ApiError(500, 'INTERNAL_ERROR', 'something went wrong on server, please contact server admin');

errors.invalid_request = new ApiError(400, 'Bad Request', 'bad request');

errors.unAuthorized = new ApiError(401, 'UNAUTHORIZED', 'unauthorized your token');

errors.token_expired = new ApiError(401, 'TOKEN_EXPIRED', 'token expired');