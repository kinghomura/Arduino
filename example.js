var http = require('http');

var fs = require('fs');
fs.readFile('./nowTemp.txt', 'utf8', function (err, text) {
    console.log(text);
    var temp = text;
    console.log(text);
    //res.end(text);
});

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  //res.end('Hello Hosomichi!\n');
  res.end('Hello Hosomichi!\n');


}).listen(1337, '127.0.0.1');
