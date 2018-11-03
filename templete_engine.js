var express = require('express');
var app = express();
app.set('view engine', 'ejs');

app.get('/', function (req, res){
	res.sendFile(__dirname + '/home.html');
});

app.get('/profile', function (req, res){
	res.sendFile(__dirname + '/home.html');
});

app.get('/contact', function (req, res){
	res.sendFile(__dirname + '/contact.html')
});

app.get('/profile/:id', function(req, res){
	res.render('profile', {person: req.params.id});
});


app.listen(3000);