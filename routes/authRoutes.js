const router = require('express').Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

// Login route
router.post('/login',authMiddleware.loginRequest, authController.login);

// Get current user route (protected)
router.get('/me', authMiddleware.verifyToken, authController.getCurrentUser);

module.exports = router;




