// Load environment variables from .env file
require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// API Key generation endpoint
app.get('/api-key', (req, res) => {
  const apiKey = process.env.API_KEY;  // Access the API_KEY from environment variable

  if (!apiKey) {
    return res.status(500).json({ error: 'API key is not set in environment variables' });
  }

  res.json({ apiKey });  // Return the API key in the response (for testing)
});

app.listen(port, () => {
  console.log(`API is running on http://localhost:${port}`);
});
