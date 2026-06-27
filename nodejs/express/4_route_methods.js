var express = require('express');
var app = express();
//get contact
app.get("/contact", function (request, response) {
    response.send("i will return contacts");
});

app.post("/contact", function (request, response) {
    response.send("i will insert new contacts");
});

app.put("/contact", function (request, response) {
    response.send("i will update contacts");
});

app.delete("/contact", function (request, response) {
    response.send("i will delete contacts");
});

app.listen(5000);
console.log('ready to accept request.');