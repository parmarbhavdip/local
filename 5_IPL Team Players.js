var http = require('http');
var count = 0;

var teams = {
    gt: ["Shubman Gill", "Rashid Khan", "~", "Mohammed Siraj"],
    mi: ["Rohit Sharma", "Hardik Pandya", "Jasprit Bumrah"],
    csk: ["MS Dhoni", "Ravindra Jadeja", "Ruturaj Gaikwad"],
    rcb: ["Virat Kohli", "Faf du Plessis", "Glenn Maxwell"]
};

var server = http.createServer(function(request, response) {
    count++;
    console.log('Request received: ', count);

    var team = request.url.substring(1).toLowerCase();

    if (teams[team]) {
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.write(teams[team].join("\n")); // line by line players
    } else {
        response.writeHead(404, { 'Content-Type': 'text/plain' });
        response.write("Team not found. Use: gt, mi, csk, rcb");
    }

    response.end();
});

const portno = 5001; 

server.listen(portno);

console.log('ready to accept request on ', portno);