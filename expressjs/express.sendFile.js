
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;
console.log("Resolved Path:", path.resolve(__dirname, '../public/images/1.jpg'));

app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname, '../public/images/1.jpg'));
});

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);
//ERROR