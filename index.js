var app = require('express')();
var http = require('http').Server(app);
var port = 3000;

app.get('/', function(req, res){
  res.sendfile('index.html');
});

http.listen(port, function(){
  console.log('listening on *:3000');
});

