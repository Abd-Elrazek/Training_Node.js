var express = require('express');
var app = express();

app.get('/', function (req, res){
	res.send('Home page ...')
});


app.get('/contact', function (req, res){
	res.send('Contact page ...')
});

app.get('/profile/:id', function(req, res){
	if (isNaN (req.params.id)){
	res.send('You request a profile with name --> ' + req.params.id);
	}else{
	res.send('You request a profile with id --> ' + req.params.id);
	}
});


app.listen(3000);