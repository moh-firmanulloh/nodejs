const {check} = require('express-validator'); 

exports.validationRegister = [
    check('name').not().isEmpty(),
    check('email').isEmail(),
    check('phone').isNumeric(),
    check('password').not().isEmpty(),
    check('address')
]


exports.validationLogin = [
    check('email').not().isEmpty(),
    check('email').isEmail(),
    check('password').not().isEmpty(),
]

exports.validationRolesCreate = [
    check('name').notEmpty()
]