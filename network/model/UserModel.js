const  mongoose  = require('mongoose');
const Schema = mongoose.Schema;
const Encrypt = require('../../helpers/encrypt');
const { setTrackingUser, DELETE, CREATE, UPDATE } = require('./../helperFunc');


const MODEL = 'users';

var UserSchema = new Schema({

    name: {
        type: String, 
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String, 
        required: true,
    },
    phone: {
        type: Number,
        unique: true,
    },
    token: {
        type: String,
    },
    token_device: {
        type: String,
    },
    address: {
        type: String,
    },
    updated_by: {type: String},
    created_by: {type: String},
    deleted_at: {type: String, default: null},
    deleted_by: {type: String, default: null}
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });
    

/**
 * Create function updateUsers with filter deleted_at = null 
 */

UserSchema.methods.updateUsers = (data, cb) => {
   
    this.model(MODEL).findByIdAndUpdate({_id: data.id}, {$set: data.body}, (err, doc) => {

        /**
         * console for log error
         */ 
         console.log('update log error', err );
        
        /**
         * return null for callback if any error from mongodb
         */
        if(err !== null) return cb(null);

        /**
         * return DOC object with callback from mongodb
         */
        return cb(doc);

    }).where({deleted_at: null});
}


/**
 * Create function deleteUsers with filter deleted_at = null 
 */
UserSchema.methods.deleteUsers = function(data, cb) {
    this.model(MODEL).findByIdAndUpdate(data.id, {$set: {deleted_at: Date.now(), deleted_by: data.userId}}, (err, result) => {

        /**
         * console for log error
         */ 
        
         console.log(err);
        
        /**
         * return null for callback if any error from mongodb
         */
        
        if(err !== null) return cb(err, null)
        
        
        /**
         * return DOC object with callback from mongodb
         */

        return cb(null, true);

    }).where({deleted_at: null})
}

/**
 * Create function checkLogin with filter deleted_at = null 
 */

UserSchema.methods.checkLogin = function(data, cb) {
    this.model(MODEL).find({ email: data.email }, async (err, results) => {

        /**
         * checking result find data from  mongodb with email
         * after checking, loop result for get data user or you can use this code results[0] to get data users
         */

        if(results.length > 0) {
            let objectNew;
            for(result in results) {
                objectNew = results[result];
            }

            /**
             * checking password hashing with password string = return boolean
             * 
             * and return callback with err and object data args
             */
          
            if(await Encrypt.DecodePassword(data.password, objectNew.password)) {

                return cb(null, objectNew)
            }  
        }

        /**
         * 
         * return callback with error
         */

        return cb('email or password not correct', null);
        
    }).select('-password').where({deleted_at: null});
}

/**
 * 
 * creating model in mongodb with "uses collections"
 */

const Model =  mongoose.model("users", UserSchema);


module.exports = Model;




