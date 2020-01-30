
const obj = { }; 
const ErrorsManagers = {};

function Errors(httpCode, httpStatus, httpMessage) {

    // Step Two: Link prototypes -- we'll cover this in greater detail shortly
    Object.setPrototypeOf(obj, Errors.prototype);

    // Step Three: Set 'this' to point to our new Object
    //    Since we can't reset `this` inside of a running execution context, 
    //      we simulate Step Three by using 'obj' instead of 'this'
    obj.code    = httpCode;
    obj.message = httpMessage;
    obj.status    = httpStatus;

    // Step Four: Return the newly created object
    return obj;
}

Errors.prototype.Details = (data) => {
    obj.details = data;
    return obj;
}


ErrorsManagers.STATUS_CODE_400 = 400;
ErrorsManagers.STATUS_CODE_422 = 422;
ErrorsManagers.STATUS_CODE_500 = 500;
ErrorsManagers.STATUS_MESASSAGE_REQUEST_INVALID = "Request Invalid";
ErrorsManagers.STATUS_MESASSAGE_INTERNAL_SERVER = "Internal Server Error";




module.exports = {
    Errors,
    ErrorsManagers
}




