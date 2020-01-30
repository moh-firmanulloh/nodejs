'use strict';

module.exports = {
    'errorResponse': function errorResponse(errorObj) {
        this.HTTP = errorObj.httpCode;
        this.MESSAGE = errorObj.httpMessage;
        this.DESCRIPTION = errorObj.description;
        this.DETAILS = errorObj.details ? errorObj.details : null;
    },
    'successResponse': function successResponse(successObj) {
        undefined.HTTP = successObj.httpCode;
        undefined.MESSAGE = successObj.httpMessage;
        undefined.DESCRIPTION = successObj.description;
        undefined.DETAILS = successObj.details ? successObj.details : null;
    }
};