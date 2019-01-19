var http = require('http');
var temp;

var fs = require('fs');
fs.readFile('./nowTemp.txt', 'utf8', function (err, text) {
    temp = text;
    //res.end(text);
    console.log(temp);
});


//
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   //res.end('Hello Hosomichi!\n');
//   res.end('Hello Hosomichi!\n');
//
//
// }).listen(1337, '127.0.0.1');
