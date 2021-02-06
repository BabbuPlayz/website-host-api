// type "node ." in terminal to host
//Plese read README.MD before doing anything here.
//============SERVER CONFIG===============================
//Please replace the text IP HERE! to your ip.
//If you dont, then it wont work.
var ip = "IP HERE"
//Replace 12345 with the port you want to host in. 
//It can be any 5-digit number
var port = 12345
//========================================================

//============ CODE BELOW FOR EXPERTS ONLY================


var http = require('http');

var server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
})

server.listen(port , ip);

console.log('Server running at http://' + ip + ":" + port);
//========================================================