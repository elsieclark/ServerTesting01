var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = 80;



var sequenceFromPi = ""
var sequenceFromPhone = "[8, 8, 8, 8]"

var toLatinQueue = []

var fromLatinQueue = []
var toMorseQueue = []

app.get('/', function(req, res){
  res.sendfile('index.html');
});

app.use(express.static(__dirname + '/public'));

io.on('connection', function(socket){
    
  console.log('a user connected');

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
    
  socket.on('sequencePi', function(msg){
      if (sequenceFromPi != msg && msg != "") {
          console.log('sequenceFromPi: ' + msg);
          sequenceFromPi = msg;
      }
  });
    
  socket.on('sequencePhone', function(msg){
      if (sequenceFromPhone != msg && msg != "") {
          console.log('sequenceFromPhone: ' + msg);
          sequenceFromPhone = msg;
      }
  });
    
    
  socket.on('messagePi', function(msg){
      if (msg != "") {
          fromMorseQueue.push([msg, Date.now()])
      }
  });
    
  socket.on('messagePhone', function(msg){
      if (msg != "") {
          fromLatinQueue.push([msg, Date.now()])
      }
  });
    
});

http.listen(port, function(){
  console.log('listening on *:80');
});

var translateToLatin = function(msg){
    
    var wordArr = msg.split(" ")
    
}

var splitIntoLetters

// http://[2620:101:f000:700:c9b8:4484:a65d:df7f]:3000/

setInterval(() => io.emit('sequencePi', sequenceFromPhone), 500);
setInterval(() => io.emit('sequencePhone', sequenceFromPi), 500);
setInterval(() => io.emit('messagePhone', Date.now()), 500);

var fromMorse = {
    '.-':"a",
    '-...':"b",
    '-.-.':"c",
    '-..':"d",
    '.':"e",
    '..-.':"f",
    '--.':"g",
    '....':"h",
    '..':"i",
    '.---':"j",
    '-.-':"k",
    '.-..':"l",
    '--':"m",
    '-.':"n",
    '---':"o",
    '.--.':"p",
    '--.-':"q",
    '.-.':"r",
    '...':"s",
    '-':"t",
    '..-':"u",
    '...-':"v",
    '.--':"w",
    '-..-':"x",
    '-.--':"y",    
    '--..':"z",  
    '-----':"0",  
    '.----':"1",  
    '..---':"2",  
    '...--':"3",  
    '....-':"4",  
    '.....':"5",  
    '-....':"6",  
    '--...':"7",  
    '---..':"8",  
    '----.':"9",  
    '.-.-.-':".",  
    '--..--':",",  
    '---...':":",  
    '..--..':"?",  
    '.----.':"\'",  
    '-....-':"-",  
    '-..-.':"/",  
    '.-..-.':"\"",  
    '.--.-.':"@",  
    '-...-':"="
}


