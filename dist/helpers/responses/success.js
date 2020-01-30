"use strict";

var obj = {};

function Success(httpCode, httpStatus, httpMessage) {

    // Step Two: Link prototypes -- we'll cover this in greater detail shortly
    Object.setPrototypeOf(obj, Success.prototype);

    // Step Three: Set 'this' to point to our new Object
    //    Since we can't reset `this` inside of a running execution context, 
    //      we simulate Step Three by using 'obj' instead of 'this'
    obj.httpCode = httpCode;
    obj.httpMessage = httpMessage;
    obj.httpStatus = httpStatus;

    // Step Four: Return the newly created object
    return obj;
}

Success.prototype.Details = function (data) {
    obj.details = data;
    return obj;
};

module.exports = Success;