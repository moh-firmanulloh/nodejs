const  mongoose  = require('mongoose');
const Schema = mongoose.Schema;
const { setTrackingUser, UPDATE, CREATE, DELETE } = require('./../helperFunc');
const MODEL = 'roles';

var RolesModel = new Schema({

    name: {
        type: String, 
        required: true,
        unique: true,
        dropDups: true,
    },
    updated_by: {type: String},
    created_by: {type: String},
    deleted_at: {type: String, default: null},
    deleted_by: {type: String, default: null}
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

RolesModel.methods.createRoles = async function (data, callback){
    
    // return setTrackingUser(data, CREATE);
  this.model(MODEL).create(setTrackingUser(data, CREATE), (err, doc) => {
      if(err !== null) return callback(err, null);

      return callback(null, doc);
  });
        
}

RolesModel.methods.updateRoles = function (data, callback) {
    
    this.model(MODEL).findByIdAndUpdate(data.id, {$set: setTrackingUser(data, UPDATE)}, (err, doc) => {

        if(err !== null ) return callback(err, null);

        return callback(null, doc);

    }).where({deleted_at: null});
}

RolesModel.methods.getRoles = function (query, callback) {
    this.model(MODEL).find(query, (err, doc) => {
        if(err !== null) return callback(err, null);

        return callback(null, doc);

    }).where({deleted_at: null})
}

RolesModel.methods.getRolesById = function (id, callback) {
    this.model(MODEL).findById(id, (err, doc) => {
        if(err !== null) return callback(err, null);

        return callback(null, doc);
    }).where({deleted_at: null});
}

RolesModel.methods.deleteRolesById = function (data, callback) {

    this.model(MODEL).findByIdAndUpdate({_id: data.id}, {$set: setTrackingUser(data, DELETE)}, (err, result) => {
        
        if(err !== null) return callback(err, null);

        return callback(null, result);
    })
}
    
const Model =  mongoose.model(MODEL, RolesModel);

module.exports = Model;




