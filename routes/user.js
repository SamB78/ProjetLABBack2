const express = require('express');
const router = express.Router()
const userCtrl = require('../controllers/user');

router.post('/signup', userCtrl.signup2);
router.post('/login', userCtrl.login2);

module.exports = router;