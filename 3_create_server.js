var http = require('http');
var count = 0;

var server = http.createServer(function(request,response){
    count = count + 1;
    console.log('I have received request. ',count);   
});

const portno = 5000; 
server.listen(portno);
console.log('ready to accept request on ',portno);
