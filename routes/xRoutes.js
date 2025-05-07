const express = require('express');
const router = express.Router();
const xController = require('../controllers/xController');
const authMiddleware = require('../middleware/authMiddleware');

// Get X follower count route (protected)
router.get('/followers/:username', authMiddleware.verifyToken, xController.getFollowerCount);

module.exports = router;
