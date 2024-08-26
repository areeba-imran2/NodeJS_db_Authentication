const express = require('express');
const { signup, login } = require('../controllers/authController');

const router = express.Router();

router.post('/signup', signup);  // Note that this is a POST route
router.post('/login', login);

module.exports = router;
