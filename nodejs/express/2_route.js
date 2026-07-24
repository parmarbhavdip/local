var express = require('express');
var fs = require('fs');
var app = express();
// create route for home 
app.get("/", function (request, response) {
    response.setHeader("Content-Type", "text/html");
    fs.readFile('../home.html', function (error, FileContent) {
        response.send(FileContent);
    });
});

// create route for aboutus
app.get("/aboutus", function (request, response) {
    response.setHeader("Content-Type", "text/html");
    fs.readFile('../aboutus.html', function (error, FileContent) {
        response.send(FileContent);
    });
});
// create route for contactus
app.get("/contactus", function (request, response) {
    response.setHeader("Content-Type", "text/html");

    fs.readFile('../contactus.html', function (error, FileContent) {
        response.send(FileContent);
    });
});

// create route for course
app.get("/course", function (request, response) {
    response.setHeader("Content-Type", "text/html");
    fs.readFile('../course.html', function (error, FileContent) {
        response.send(FileContent);
    });
});


app.listen(5000);
console.log('ready to accept request.');