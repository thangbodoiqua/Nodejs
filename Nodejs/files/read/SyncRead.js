require('http').createServer(function (req, res) {
    const fs = require('fs');
    const data = fs.readFileSync('demofile1.html');
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
}).listen(2000);

console.log('http://localhost:2000');