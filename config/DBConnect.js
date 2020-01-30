const mongoose = require('mongoose');
const Config = require('./Config')

class DBConnect {
    constructor() {
        this._connect();
    }


    _connect() {
        mongoose.connect(Config.server_mongoose, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, (err) => {

            if (err) console.log('error connect to database');

            console.log("conencted database", process.env.PORT_DATABASE_MONGO);


        });
    }
}

module.exports = new DBConnect();





