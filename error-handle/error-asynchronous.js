const express = require('express');
const app = express();

app.get('/', async (req, res, next) => {
    try {
        await someAsyncFunction(); // Example asynchronous function
    } catch (err) {
        next(err); // Pass the error to the error handler
    }
});

// Centralized error handling middleware (same as before)
function errorHandler(err, req, res, next) {
    console.error(err.stack);
    res.status(500).json({ error: err.message });
}

app.use(errorHandler);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
