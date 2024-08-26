const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/authenticateToken');

router.get('/dashboard', authenticateToken, (req, res) => {
    res.json({ message: 'Welcome to the protected dashboard!' });
});

module.exports = router;
