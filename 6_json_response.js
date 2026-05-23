const { verify } = require('crypto');
const { response } = require('express');
var http =require('http')

const jay={name: "jay Bhai", gender: "male", weight:75, mobile:"9322334455"};
const lalji={name: "lalji Bhai", gender: "male", weight:70, mobile:"8852036458"};
const mahi ={name: "mahi ", gender: "female", weight: 65, mobile:"8933556688"};
const karan={name: "karan patel", gender: "male", weight:68, mobile:"9856293564"};


var server = http.createServer(function (request, response) {
    response.writeHead(200, { "content-type": "application/JSON" })
    let data;
    if (request.url === '/jay') {
        data = JSON.stringify(jay);
    }
    else if (request.url === '/lalji') {
        data = JSON.stringify(lalji);
    }
    else if (request.url === '/mahi') {
        data = JSON.stringify(mahi);
    }
    else if (request.url === '/karan') {
        data = JSON.stringify(karan);
    }
    else {
        data = JSON.stringify({ message: 'not found' });
    }
    response.write(data);
    response.end();
});

const PORT = 5000;
server.listen(PORT);
console.log('ready to accept request')