const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Simple API endpoint to demonstrate server-side functionality
app.get('/api/hello', (req, res) => {
  res.json({
    message: 'Hello from your Render-deployed server!',
    timestamp: new Date().toISOString(),
  });
});

// Health check endpoint (Render uses this to verify your service is up)
app.get('/healthz', (req, res) => {
  res.status(200).send('OK');
});

// Fallback: serve index.html for any other route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
