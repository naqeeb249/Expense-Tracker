const express = require('express');
const router = express.Router();
const controller = require('../controllers/login-controller');


router.get('/login',controller.getLogin);
router.post('/login',controller.postLogin);



module.exports = router;