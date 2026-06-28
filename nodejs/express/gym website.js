var express = require('express');
var fs = require('fs');
var path = require('path');

var app = express();

function ReadHTMLFile(request, response, fileName) {
    response.setHeader("Content-Type", "text/html");
    const filePath = path.join(__dirname, fileName);
    
    fs.readFile(filePath, function (error, FileContent) {
        if (error) {
            response.status(500).send("Error: File not found on server.");
        } else {
            response.send(FileContent);
        }
    });
}

// 1. Root route: Redirects to /home
app.get("/", (req, res) => {
    res.redirect("/home");
});

// 2. Specific routes
app.get("/home", (req, res) => ReadHTMLFile(req, res, 'home.html'));
app.get("/aboutus", (req, res) => ReadHTMLFile(req, res, 'aboutus.html'));
app.get("/contactus", (req, res) => ReadHTMLFile(req, res, 'contactus.html'));
app.get("/course", (req, res) => ReadHTMLFile(req, res, 'course.html'));
app.get("/membership", (req, res) => ReadHTMLFile(req, res, 'membership.html'));

// 3. 404 Handler
app.use((req, res) => {
    res.status(404).send("<h1 style='text-align:center; margin-top:50px;'>404 - Page Not Found</h1><p style='text-align:center'><a href='/home'>Return to Home</a></p>");
});

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});