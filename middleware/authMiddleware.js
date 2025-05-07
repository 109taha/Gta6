const jwt = require('jsonwebtoken');
const config = require('../config/config');

/**
 * Middleware to verify JWT token
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
exports.verifyToken = (req, res, next) => {
  // Get auth header
  const authHeader = req.headers.authorization;

  // Check if auth header exists
  if (!authHeader) {
    return res.status(401).json({
      success: false,
      message: 'Access denied. No token provided.'
    });
  }

  // Check if auth header has Bearer token
  const parts = authHeader.split(' ');
  if (parts.length !== 2 || parts[0] !== 'Bearer') {
    return res.status(401).json({
      success: false,
      message: 'Invalid token format. Use Bearer {token}'
    });
  }

  const token = parts[1];

  try {
    // Verify token
    const decoded = jwt.verify(token, config.jwtSecret);
    // Attach user to request
    req.user = decoded;
    
    // Continue
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: 'Invalid token.',
      error: error.message
    });
  }
};


exports.loginRequest = (req, res, next) => {
  if (!req.body.username || !req.body.password) {
    return res.status(400).json({
      success: false,
      message: 'Email and password are required.'
    })

    next();
  }
}
