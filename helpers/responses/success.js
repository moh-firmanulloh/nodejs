
const obj = {}; 
const SuccessManager = {};

function Success(httpCode, httpStatus, httpMessage) {

    // Step Two: Link prototypes -- we'll cover this in greater detail shortly
    Object.setPrototypeOf(obj, Success.prototype);

    // Step Three: Set 'this' to point to our new Object
    //    Since we can't reset `this` inside of a running execution context, 
    //      we simulate Step Three by using 'obj' instead of 'this'
    obj.code    = httpCode;
    obj.message = httpStatus;
    obj.status    = httpMessage;

    // Step Four: Return the newly created object
    return obj;
}

Success.prototype.Details = (data) => {
    obj.details = data;
    return obj;
}

SuccessManager.STATUS_CODE_200 = 200;
SuccessManager.STATUS_SUCCESS = "success";
SuccessManager.STATUS_DESCRIPTION = "success";




module.exports = {
    Success,
    SuccessManager
}




