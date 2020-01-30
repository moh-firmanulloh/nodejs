const express = require('express');
const router = express.Router();
const Controllers = require('../controllers/RolesControllers'); 
const {validationRolesCreate} = require('../helpers/validator');
const VerifyToken = require('./verifyToken');

router.delete('/:id', [VerifyToken], Controllers.deleteRolesControllers);
router.get('/', [VerifyToken], Controllers.indexRolesControllers);
router.get('/:id', [VerifyToken], Controllers.showRolesControllers);
router.post('/', [VerifyToken, validationRolesCreate], Controllers.createRolesControllers);
router.patch('/:id', [VerifyToken, validationRolesCreate], Controllers.updateRolesControllers);



module.exports = router;