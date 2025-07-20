const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/', function (req, res) {
    console.log(req.body.name);
    res.end();
});

app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});

//Sử dụng postman để post với header: Content-Type: application/json và body ở phần raw: { "name": "John" }. terminal sẽ console ra "John". 