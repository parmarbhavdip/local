var express = require('express');
var fs = require('fs');
var path = require('path');

var app = express();

function ReadHTMLFile(request, response, fileName) {
    response.setHeader("Content-Type", "text/html");

    const filePath = path.join(__dirname, fileName);

    fs.readFile(filePath, function (error, FileContent) {
        if (error) {
            response.status(500).send("Error loading file");
        } else {
            response.send(FileContent);
        }
    });
}

// routes
app.get("/", (req, res) => ReadHTMLFile(req, res, 'home.html'));
app.get("/aboutus", (req, res) => ReadHTMLFile(req, res, 'aboutus.html'));
app.get("/contactus", (req, res) => ReadHTMLFile(req, res, 'contactus.html'));
app.get("/course", (req, res) => ReadHTMLFile(req, res, 'course.html'));

// 404
app.use((req, res) => {
    res.status(404).send("<h1>404 - Page Not Found</h1>");
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});