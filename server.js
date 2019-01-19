var app = require('express')(); //for express
var http = require('http').Server(app); //for communicaation by express
var io = require('socket.io')(http);  //for socket
var POST = 3000;
var fs = require('fs');

var mime = {
  ".html": "text/html",
  ".css":  "text/css"
};

//start when someone accecce on the root directory
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

//start when conecct on socket.io
io.on('connection', function(socket){

  //work by message event
  socket.on('message', function(msj){
    fs.readFile('./nowTemp.txt', 'utf8', function (err, text){
      temp = text;
      // console.log(temp);
      io.emit('message', temp);
    });
  });
});

//wating connection
http.listen(POST, function(){
  console.log('接続開始', POST);
});
