const express = require('express');
const routers = express.Router();
const Controllers = require('../controllers/AuthControllers');
const {validationRegister, validationLogin} = require('../helpers/validator');

routers.post('/register', validationRegister, Controllers.RegisterControllers);
routers.post('/login', validationLogin, Controllers.LoginControllers);


module.exports = routers
