var assert = require('assert');
var sum = require('./sum');
var request = require('supertest');
var fakeRepository = require('../testStockRepository')();
var app = require('../app')(fakeRepository);

describe('Math in JS', function () {

	it('respond with json', function (done) {
		request(app)
			.post('/stock')
			.set('Accept', 'application/json')
			.send({"isbn": "1234"})
			.expect({"isbn": "1234"})
			.end(done)
	});

	/*it('allows to check book availability', function (done) {
		var repository = require('../testStockRepository')();
		repository._items([{"isbn": "1290", "count": "11"}]);
		var app = require('../app.js')(repository);
		request(app)
			.get('/stock/1290')
			.expect(200, {count: 11}, done)
	});*/
});