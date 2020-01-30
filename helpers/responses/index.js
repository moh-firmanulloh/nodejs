const {Success, SuccessManager} = require('./success');
const {Errors, ErrorsManagers} = require('./errors');
const ResponseErrorManager = {};
const ResponseSuccessManager = {};

ResponseErrorManager.validateForm = (errors) => {
    let stringErrors = '';
    errors.map((value, index) => {
        stringErrors += value.param;
        if(index !== errors.length - 1) {
            stringErrors += ", ";
        } else {
            stringErrors += " ";
        }
    })
    stringErrors += "Invalid Value";
    return stringErrors;
}

ResponseErrorManager.duplicatedValueDB = (errors) => {
    return `duplicate ${Object.keys(errors.keyPattern)}`;
}


const ErrorResponseInternal = (response, err = null) => {
    const error = new Errors(
        ErrorsManagers.STATUS_CODE_500, 
        ErrorsManagers.STATUS_MESASSAGE_INTERNAL_SERVER, 
        ErrorsManagers.STATUS_MESASSAGE_INTERNAL_SERVER
    );
    if(err !== null) error.Details(err);
    return response.status(500).send(error);
}

const ErrorResponseRequest = (response, err) => {
    const error = new Errors(
        ErrorsManagers.STATUS_CODE_422, 
        ErrorsManagers.STATUS_MESASSAGE_REQUEST_INVALID, 
        ErrorsManagers.STATUS_MESASSAGE_REQUEST_INVALID
    );
    error.Details(err);
    return response.status(422).send(error);
}

// functioon response success
const SuccessResponseRequest = (response, successData = undefined) => {
    const success = new Success(
        SuccessManager.STATUS_CODE_200, 
        SuccessManager.STATUS_SUCCESS, 
        SuccessManager.STATUS_DESCRIPTION
    );
    if(successData !== undefined) success.Details(successData);
    return response.status(200).send(success);
}

module.exports = {
    'ResponseErrorManager': ResponseErrorManager,
    'ResponseSuccessManager': ResponseSuccessManager,
    'SuccessResponseRequest': SuccessResponseRequest,
    'ErrorResponseRequest': ErrorResponseRequest,
    'ErrorResponseInternal': ErrorResponseInternal, 
};