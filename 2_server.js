var http = require('http');
var count = 0;

var zones = {
    north: ["Delhi", "Punjab", "Haryana", "Himachal Pradesh"],
    south: ["Tamil Nadu", "Kerala", "Karnataka", "Andhra Pradesh"],
    east: ["West Bengal", "Odisha", "Bihar", "Jharkhand"],
    west: ["Gujarat", "Rajasthan", "Maharashtra"]
};

var server = http.createServer(function(request, response) {
    count = count + 1;
    console.log('I have received request. ', count);

    var zone = request.url.substring(1).toLowerCase(); 
    if (zones[zone]) {
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.write(zones[zone].join("\n")); 
    } else {
        response.writeHead(404, { 'Content-Type': 'text/plain' });
        response.write("Zone not found. Use: north, south, east, west");
    }

    response.end();
});

const portno = 5000;
server.listen(portno);

console.log('ready to accept request on ', portno);
