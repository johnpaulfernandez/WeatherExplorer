const express = require('express')

// Create express instnace
const app = express()

// Require API routes
const forecast = require('./routes/forecast')

// Import API Routes
app.use(forecast)

// Export the server middleware
module.exports = {
  path: '/api',
  handler: app
}
