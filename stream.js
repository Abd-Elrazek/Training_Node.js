var htpp = require("http");
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/readme.txt' , "utf8");

 myReadStream.on ('data', function (chunk){
	console.log("log chunk received:");
	console.log(chunk);
 });