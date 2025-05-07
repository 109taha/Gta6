const jwt = require('jsonwebtoken');
const config = require('../config/config');

// Mock user database - in a real app, this would be a database
const users = [
  {
    id: 1,
    username: 'admin',
    password: 'admin', // In a real app, this would be hashed
  },
  {
    id: 2,
    username: 'superAdmin',
    password: 'superAdmin', // In a real app, this would be hashed
  }
];

/**
 * Login controller
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
exports.login = (req, res) => {
  const { username, password } = req.body;

  // Find user
  const user = users.find(u => u.username === username);
  
  // Check if user exists and password matches
  if (!user || user.password !== password) {
    return res.status(401).json({ 
      success: false, 
      message: 'Invalid username or password' 
    });
  }

  // Generate JWT token
  const token = jwt.sign(
    { id: user.id, username: user.username },
    config.jwtSecret,
    { expiresIn: '12h' }
  );

  // Return token
  return res.status(200).json({
    success: true,
    message: 'Authentication successful',
    token
  });
};

/**
 * Get current user controller
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
exports.getCurrentUser = (req, res) => {
  // User is already attached to request by auth middleware
  const { id, username } = req.user;
  
  return res.status(200).json({
    success: true,
    user: { id, username }
  });
};
