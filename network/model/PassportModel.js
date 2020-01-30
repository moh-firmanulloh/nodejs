const  mongoose  = require('mongoose');
const Schema = mongoose.Schema;
const { setTrackingUser } = require('./../helperFunc');

var passportSchema = new Schema({

    users_id: {
        type: Schema.Types.ObjectId,
        ref: 'users',
    },
    token_string: {
        type: String, 
        required: true,
        unique: true,
    },
    expired_date: {
        type: Number,
        required: true,
    },
    revoke: {
        type: Boolean, 
        required: true,
        default: false,
    },
});


const Model =  mongoose.model("passport", passportSchema);


module.exports = Model;




