'use strict';

var mongoose = require('mongoose');

var PassporUser = new mongoose.Schema({

    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    token_passport: {
        type: String
    },
    expired: {
        type: Date
    },
    revoke: {
        type: Number,
        default: 0
    },
    updated_date: {
        type: Date, default: Date.now
    },
    created_date: {
        type: Date, default: Date.now
    }
});

module.exports = mongoose.model("Passort_user", PassporUser);