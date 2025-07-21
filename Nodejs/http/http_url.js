var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  var q = url.parse(req.url, true).query;
  console.log( url.parse(req.url))
  // .parse() is used to parse the query string into an object
  // The second argument 'true' indicates that the query string should be parsed into an object
  // .query contains the parsed query string (eg: ?name=John&age=30 becomes { name: 'John', age: '30' })

  var contentType = 'text/html';

  if (q.json === 'true') {
    contentType = 'application/json';
  }

  res.writeHead(200, {'Content-Type': contentType});

 if (contentType === 'text/html') {
      res.write('<html><body><h1>Hello, World!</h1></body></html>');
  } else if (contentType === 'application/json') {
      res.write(JSON.stringify({ message: "Hello, World!" }));
  }
  res.end();

}).listen(200);

