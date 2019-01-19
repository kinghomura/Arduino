var http = require('http'),
  fs = require('fs'),
  ejs = require('ejs');
var settings = require('./settings')
var server = http.createServer();
var template = fs.readFileSync(__dirname + "/hello.ejs", 'utf-8');
var n = 0;
var temp = 0;
var temp_num = document.getElementById('temp_num')



server.on('request', function(req, res){
  fs.readFile('./nowTemp.txt', 'utf8', function (err, text) {
      temp = text;
      //res.end(text);
      console.log(temp);
  });

  n++;
  var data = ejs.render(template,{
    title:  "hello",
    content: "<strong>World!</strong>",
    n:  n,
    temp: temp
  });
  // setInterval(function() {
  //   fs.readFile('./nowTemp.txt', 'utf8', function (err, text) {
  //       temp = text;
  //   });
  //   console.log(temp);
  //   data = ejs.render(template,{
  //     title:  "hello",
  //     content: "<strong>World!</strong>",
  //     n:  n,
  //     temp: temp
  //   });
  //       // res.setHeader('Content-Type', 'text/html');
  //       res.write(data);
  //       res.end();
  //
  //
  // }, 2000);

  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(data);
  res.end();
  //
  // fs.readFile(__dirname + '/hello.html','utf-8', function(err, data){
  //     if (err){
  //       res.writeHead(404, {'Content-Type': 'text/plain'});
  //       res.write("not found!!");
  //       return res.end();
  //     }
  //     n++;
  //     var data = ejs.render(template,{
  //       title:  "hello",
  //       content: "<strong>World!</strong>",
  //       n:  n,
  //       temp: temp
  //     });
  //     res.writeHead(200, {'Content-Type': 'text/html'});
  //     // res.write('hello from ' + req.url);
  //     res.write(data);
  //     res.end();
  // });
});
server.listen(settings.port, settings.host);
console.log(settings.port, settings.host)
console.log("server listening ...");

function getFromClient(request,response) {
	fs.readFile('./hello.ejs', 'UTF-8',
		(error,data)=>{
			var content = data.
				replace(/dummy_title/g, 'タイトルです').
				replace(/dummy_contnet/g, 'これがコンテンツです。');

			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(content);
			response.end();
		}
	);
}
