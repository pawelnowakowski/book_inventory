module.exports = function (stockRepository) {
	var express = require('express');
	var bodyParser = require('body-parser');
	var assert = require('assert');
	var middlewars = require('./lib/middlewars');
	var stockRepository = require('./stockRepository');
	var routes = require('./lib/routes')(stockRepository);
	var app = express();

	app.use(bodyParser.json());

	app.use(function(req, res, next) {
		console.log("incoming request " + new Date());
		next();
	});

	app.post('/stock', routes.setStock);

	app.get('/stock', routes.getStocks);

	app.get('/stock/:isbn', routes.getStockByIsbn);

	app.get('/', routes.all);

	app.use(middlewars.clientError);
	app.use(middlewars.serverError);

	return app;
}