// Import required packages
const express = require('express');
const cors = require('cors');
const config = require('./config/config');

// Import routes
const authRoutes = require('./routes/authRoutes');
const xRoutes = require('./routes/xRoutes');

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.json({ 
    message: 'Welcome to the API',
    endpoints: {
      auth: '/api/auth',
      x: '/api/x'
    }
  });
});



// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/x', xRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    success: false,
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// Start the server
const PORT = config.port;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
