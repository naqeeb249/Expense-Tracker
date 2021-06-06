const express = require('express');
const controller = require('../controllers/sign-up-controller');

const router = express.Router();
const path = require('path');
const rootDir = require('../util/path');


router.get('/sign-up',controller.getSignUp);
router.post('/sign-up',controller.postSignUp);


module.exports = router;