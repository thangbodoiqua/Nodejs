// app.js

const express = require('express');
const app = express();
const PORT = 3000;

const path = require('path')
console.log(path.join(__dirname, '../public'));
app.use('/static', express.static(path.join(__dirname, '../public')))
// thay vì ..../images/1.jpg thì .../static/images/1.jpg

// app.use(express.static(path.join(__dirname, 'public'))) --> .../images/1.jpg 

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);
