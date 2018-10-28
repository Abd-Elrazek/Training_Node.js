var http = require('http');
var myfirstdate = require ('./myFirstModule');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write("The date and time are currently: " + myfirstdate.myDateTime());
    res.end();
}).listen(8080);
console.log("listen 127.1.1:8080");