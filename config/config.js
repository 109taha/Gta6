const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

module.exports = {
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || 'default_jwt_secret_key',
  xApiKey: process.env.X_API_KEY,
  xApiSecret: process.env.X_API_SECRET,
  xBearerToken: process.env.X_BEARER_TOKEN
};
