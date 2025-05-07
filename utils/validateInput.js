/**
 * Validate username
 * @param {string} username - Username to validate
 * @returns {boolean} - True if valid, false otherwise
 */
exports.isValidUsername = (username) => {
  if (!username || typeof username !== 'string') {
    return false;
  }
  
  // Username should be at least 3 characters and alphanumeric
  const usernameRegex = /^[a-zA-Z0-9_]{3,15}$/;
  return usernameRegex.test(username);
};

/**
 * Validate password
 * @param {string} password - Password to validate
 * @returns {boolean} - True if valid, false otherwise
 */
exports.isValidPassword = (password) => {
  if (!password || typeof password !== 'string') {
    return false;
  }
  
  // Password should be at least 8 characters
  return password.length >= 8;
};

/**
 * Validate X username
 * @param {string} username - X username to validate
 * @returns {boolean} - True if valid, false otherwise
 */
exports.isValidXUsername = (username) => {
  if (!username || typeof username !== 'string') {
    return false;
  }
  
  // X username should be at least 1 character and alphanumeric
  const usernameRegex = /^[a-zA-Z0-9_]{1,15}$/;
  return usernameRegex.test(username);
};
