var http = require('http');
const countries = [
    { name: "India", continent: "Asia", population: 1428000000, area: 3287263 },
    { name: "China", continent: "Asia", population: 1410000000, area: 9596961 },
    { name: "United States", continent: "North America", population: 333000000, area: 9833517 },
    { name: "Indonesia", continent: "Asia", population: 277000000, area: 1904569 },
    { name: "Pakistan", continent: "Asia", population: 240000000, area: 881913 },
    { name: "Brazil", continent: "South America", population: 214000000, area: 8515767 },
    { name: "Nigeria", continent: "Africa", population: 223000000, area: 923768 },
    { name: "Bangladesh", continent: "Asia", population: 172000000, area: 147570 },
    { name: "Russia", continent: "Europe/Asia", population: 146000000, area: 17098242 },
    { name: "Mexico", continent: "North America", population: 128000000, area: 1964375 },
    { name: "Japan", continent: "Asia", population: 125000000, area: 377975 },
    { name: "Ethiopia", continent: "Africa", population: 126000000, area: 1104300 },
    { name: "Philippines", continent: "Asia", population: 117000000, area: 300000 },
    { name: "Egypt", continent: "Africa", population: 112000000, area: 1002450 },
    { name: "Vietnam", continent: "Asia", population: 100000000, area: 331212 },
    { name: "DR Congo", continent: "Africa", population: 102000000, area: 2344858 },
    { name: "Turkey", continent: "Europe/Asia", population: 86000000, area: 783562 },
    { name: "Iran", continent: "Asia", population: 89000000, area: 1648195 },
    { name: "Germany", continent: "Europe", population: 84000000, area: 357022 },
    { name: "Thailand", continent: "Asia", population: 71000000, area: 513120 },
    { name: "United Kingdom", continent: "Europe", population: 67000000, area: 243610 },
    { name: "France", continent: "Europe", population: 65000000, area: 551695 },
    { name: "Italy", continent: "Europe", population: 59000000, area: 301340 },
    { name: "South Africa", continent: "Africa", population: 60000000, area: 1221037 },
    { name: "Kenya", continent: "Africa", population: 55000000, area: 580367 },
    { name: "Colombia", continent: "South America", population: 52000000, area: 1141748 },
    { name: "Spain", continent: "Europe", population: 48000000, area: 505992 },
    { name: "Argentina", continent: "South America", population: 46000000, area: 2780400 },
    { name: "Algeria", continent: "Africa", population: 45000000, area: 2381741 },
    { name: "Sudan", continent: "Africa", population: 48000000, area: 1861484 },
    { name: "Ukraine", continent: "Europe", population: 37000000, area: 603500 },
    { name: "Uganda", continent: "Africa", population: 49000000, area: 241038 },
    { name: "Iraq", continent: "Asia", population: 44000000, area: 438317 },
    { name: "Poland", continent: "Europe", population: 38000000, area: 312696 },
    { name: "Canada", continent: "North America", population: 40000000, area: 9984670 },
    { name: "Morocco", continent: "Africa", population: 37000000, area: 446550 },
    { name: "Saudi Arabia", continent: "Asia", population: 36000000, area: 2149690 },
    { name: "Uzbekistan", continent: "Asia", population: 35000000, area: 447400 },
    { name: "Peru", continent: "South America", population: 34000000, area: 1285216 },
    { name: "Malaysia", continent: "Asia", population: 33000000, area: 330803 },
    { name: "Angola", continent: "Africa", population: 36000000, area: 1246700 },
    { name: "Mozambique", continent: "Africa", population: 33000000, area: 801590 },
    { name: "Ghana", continent: "Africa", population: 33000000, area: 238533 },
    { name: "Yemen", continent: "Asia", population: 34000000, area: 527968 },
    { name: "Nepal", continent: "Asia", population: 30000000, area: 147516 },
    { name: "Venezuela", continent: "South America", population: 28000000, area: 916445 },
    { name: "Madagascar", continent: "Africa", population: 30000000, area: 587041 },
    { name: "Cameroon", continent: "Africa", population: 28000000, area: 475442 },
    { name: "Australia", continent: "Australia", population: 26000000, area: 7692024 },
    { name: "Netherlands", continent: "Europe", population: 18000000, area: 41543 }
];
function displayCountry(request, response) {
    response.writeHead(200,{"content-type":"application/json"});
    response.write(JSON.stringify(countries));
    response.end();
}

var server = http.createServer((request, response) => displayCountry(request, response))

const PORT = 5000;
server.listen(PORT);
console.log('ready to accept request')