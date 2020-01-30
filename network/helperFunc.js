
exports.CREATE = 'create';
exports.DELETE = 'delete';
exports.UPDATE = 'update';

exports.setTrackingUser = (data, type) => {

    const {body, userId} = data;

    switch(type) {
        case CREATE:
            body.created_by = userId
            return body;
        case DELETE: 
            return {
                deleted_at: Date.now(),
                deleted_by: userId
            }
        case UPDATE:
            body.updated_by = userId
            return body;
        default:
            return;        
            
    }
}