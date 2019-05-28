const express = require('express');
const router = express.Router;

const authController = require('../controllers/auth');

router.get('/signup', authController.getLogin);

module.exports = router;