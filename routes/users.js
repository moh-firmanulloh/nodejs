var express = require('express');
var router = express.Router();
const {
  CreateUsersControllers, 
  IndexUsersControllers,
  UpdateUsersControllers,
  DeleteUsersControllers,
  ShowUsersControllers
} = require('../controllers/UsersControllers');
const VerifyToken = require('./verifyToken');

/* GET users listing. */
router.post('/', VerifyToken, CreateUsersControllers)
router.get('/:id', VerifyToken, ShowUsersControllers);
router.get('/', VerifyToken, IndexUsersControllers);
router.patch('/:id', VerifyToken, UpdateUsersControllers);
router.delete('/:id', VerifyToken, DeleteUsersControllers);




module.exports = router;
