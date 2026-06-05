 var http = require('http');
var server = http.createServer(function (request, response) {

    console.log(request.url); 
    response.writeHead(200, { 'content-type': 'html' });

    if (request.url === '/') {
        response.write("<html><body><h1>Hello i am home page</h1></body></html>");
    }
    else if (request.url === '/fruits') {
        response.write("<html><body><ul><li>Apple</li><li>banana</li><li>mango</li><li>pineapple</li><li>graps</li></ul></body></html>");
    }
    else if (request.url === '/vegetables') {
        response.write("<html><body><ul><li>potato</li><li>tomato</li><li>lady-finger</li><li>garlic</li></ul></body></html>");
    }
    else if (request.url === '/grains') {
        response.write("<html><body><ul><li>wheat</li><li>rise</li><li>corn</li></ul></body></html>");
    }
    else {
        response.write("<html><body><h1>sorry, we dont have any web page</h1></body></html>");
    }
    response.end(); //compulsory
});
 
const portno = 5000; 
server.listen(portno);
console.log('ready to accept request on ', portno);