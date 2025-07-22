const express = require('express');
const app = express();

// Routes
app.get('/', (req, res) => {
    throw new Error('Something went wrong!');
});

// Centralized error handling middleware
function errorHandler(err, req, res, next) {
    console.error(err.stack);
    res.status(500).json({ error: err.message }); // Send JSON response
}

app.use(errorHandler); // Mount the error handler

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
