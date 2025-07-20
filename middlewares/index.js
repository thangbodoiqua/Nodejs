const express = require('express'); 
const app = express(); 
  
const test = require('./routing.path.js'); 
  
app.use('/test', test); 
  
app.listen(3000);