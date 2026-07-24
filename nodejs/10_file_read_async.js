const http = require('http');
const fs = require('fs');

var server = http.createServer(function (request, response) {

    fs.readFile('myfile.html', function (error, FileContent) {

        response.writeHead(200, { 'content-type': 'text/html' });
        response.write(FileContent);
        return response.end();
    });

});
server.listen(5000);
console.log('ready to accept request');