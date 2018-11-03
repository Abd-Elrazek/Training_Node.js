var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
	console.log('request was made: ' + req.url);
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	var object_json = {
		name: 'abdelrazek',
		address: 'Egypt',
		age: "27"
	};
	res.end(JSON.stringify(object_json));
});

server.listen(3000, '127.0.0.1');
console.log('listening --> localhost:3000');
