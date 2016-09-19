var express = require('express');
var app = express();

app.get('/500', function(req, res) {
	throw new Error('5xx');
});

app.use(function(req, res, next) {
	console.log("incoming request " + new Date());
	next();
});

app.get('/', function(req, res, next) {
	console.log("incoming request " + new Date());
	next();
}, function (req, res) {
	res.send('Hello World!');
});

app.use(function(err, req, res, next) {
	if(err) {
		res.send('Error: ' + err);
	}
});

app.use(function(req, res, next) {
	res.send('404');
});

app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});