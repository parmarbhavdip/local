var express = require('express');
var fs = require('fs');
var app = express();
function ReadHTMLFile(request, response, fileName) {
    response.setHeader("Content-Type", "text/html");
    fs.readFile(fileName, function (error, FileContent) {
        response.send(FileContent);
    });
}
// create route for home 
app.get("/", (request, response) => ReadHTMLFile(request, response, '../home.html'));
app.get("/aboutus", (request, response) => ReadHTMLFile(request, response, '../aboutus.html'));
app.get("/contactus", (request, response) => ReadHTMLFile(request, response, '../contactus.html'));
app.get("/course", (request, response) => ReadHTMLFile(request, response, '../course.html'));

// 404 
// invalid route handler
app.use(function (request, response) {
    response.status(404);
    response.send("<h1>404 - Page Not Found</h1>");
});


app.listen(5000);
console.log('ready to accept request.');