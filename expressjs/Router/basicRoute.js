const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log(`${req.method} request for '${req.url}'`);
  next();
});
    
app.get('/hello', (req, res) => {
  res.send('<h1>Hello2, World!</h1>');
});

app.listen(8000, () => console.log('Server listening on port 8000'));