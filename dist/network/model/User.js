"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        index: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        index: true
    },
    token: {
        type: String
    },
    token_device: {
        type: String
    },
    address: {
        type: String
    },
    updated_date: { type: Date, default: Date.now },
    created_date: { type: Date, default: Date.now },
    updated_by: { type: String },
    created_by: { type: String }
});

module.exports = mongoose.model("User", UserSchema);