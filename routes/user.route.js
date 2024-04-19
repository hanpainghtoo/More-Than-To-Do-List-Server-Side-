var express = require('express');
var router = express.Router();
let userController = require('../controllers/user.controller')
/* GET home page. */
// router.get('/list', userController.list);
router.get('/list', userController.list);

module.exports = router;
