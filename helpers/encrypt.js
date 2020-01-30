const bcrypt = require('bcryptjs');
const Config = require('./../config/Config');


exports.EncryptPassword = (password) => {

    if(password === undefined || password === null) {
        return "";
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    console.log(hash);

    return hash;
}

exports.DecodePassword = async (password, hashPassword) => {
    return await bcrypt.compare(password, hashPassword);
}