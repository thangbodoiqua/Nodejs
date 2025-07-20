const express = require('express');
const app = express();
const PORT = 3000;

// GET route
app.get('/', (req, res) => {
  // Log the request URL
  console.log('Request URL:', req.url);
  
  // Log the request method
  console.log('Request Method:', req.method);
  
  // Log the request headers
  console.log('Request Headers:', req.headers);
  
  // Sending a response
  res.send('Hello World!');
});

// Starting the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});