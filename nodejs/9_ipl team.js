var http = require('http');
var count = 0;

var teams = {
    gt: ["Shubman Gill", "Rashid Khan", "Mohammed Siraj", "David Miller", "Rahul Tewatia"],
    mi: ["Rohit Sharma", "Hardik Pandya", "Jasprit Bumrah", "Suryakumar Yadav", "Ishan Kishan"],
    csk: ["MS Dhoni", "Ravindra Jadeja", "Ruturaj Gaikwad", "Deepak Chahar", "Moeen Ali"],
    rcb: ["Virat Kohli", "Faf du Plessis", "Glenn Maxwell", "Mohammed Siraj", "Dinesh Karthik"],
    kkr: ["Shreyas Iyer", "Andre Russell", "Sunil Narine", "Rinku Singh", "Nitish Rana"],
    srh: ["Aiden Markram", "Rahul Tripathi", "Bhuvneshwar Kumar", "Heinrich Klaasen", "Abdul Samad"],
    pbks: ["Shikhar Dhawan", "Liam Livingstone", "Arshdeep Singh", "Sam Curran", "Jitesh Sharma"],
    dc: ["Rishabh Pant", "David Warner", "Axar Patel", "Prithvi Shaw", "Kuldeep Yadav"],
    rr: ["Sanju Samson", "Jos Buttler", "Yashasvi Jaiswal", "Trent Boult", "R Ashwin"],
    lsg: ["KL Rahul", "Marcus Stoinis", "Nicholas Pooran", "Ravi Bishnoi", "Quinton de Kock"]
};

var server = http.createServer(function(request, response) {
    count++;
    console.log('Request received: ', count);

    var team = request.url.substring(1).toLowerCase();

    if (teams[team]) {
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.write(teams[team].join("\n"));
    } else {
        response.writeHead(404, { 'Content-Type': 'text/plain' });
        response.write("Team not found. Use: gt, mi, csk, rcb, etc.");
    }

    response.end();
});

const portno = 5000;
server.listen(portno);

console.log('Server running on port', portno);