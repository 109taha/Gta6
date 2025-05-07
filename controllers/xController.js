const config = require('../config/config');
const https = require('https');

/**
 * Get follower count from X (formerly Twitter)
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
exports.getFollowerCount = async (req, res) => {
  try {
    const { username } = req.params;
    
    if (!username) {
      return res.status(400).json({
        success: false,
        message: 'Username is required'
      });
    }

    // Check if X API credentials are configured
    if (!config.xBearerToken) {
      return res.status(500).json({
        success: false,
        message: 'X API credentials are not configured'
      });
    }

    // Make request to X API
    const options = {
      hostname: 'api.twitter.com',
      path: `/2/users/by/username/${username}?user.fields=public_metrics`,
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${config.xBearerToken}`,
        'Content-Type': 'application/json'
      }
    };

    const xRequest = https.request(options, (xResponse) => {
      let data = '';

      xResponse.on('data', (chunk) => {
        data += chunk;
      });

      xResponse.on('end', () => {
        if (xResponse.statusCode !== 200) {
          return res.status(xResponse.statusCode).json({
            success: false,
            message: 'Error fetching data from X API',
            error: data
          });
        }

        const parsedData = JSON.parse(data);
        
        if (!parsedData.data || !parsedData.data.public_metrics) {
          return res.status(404).json({
            success: false,
            message: 'User not found or metrics not available'
          });
        }

        const { followers_count, following_count, tweet_count } = parsedData.data.public_metrics;

        return res.status(200).json({
          success: true,
          username,
          followers_count,
          following_count,
          tweet_count
        });
      });
    });

    xRequest.on('error', (error) => {
      return res.status(500).json({
        success: false,
        message: 'Error connecting to X API',
        error: error.message
      });
    });

    xRequest.end();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message
    });
  }
};
