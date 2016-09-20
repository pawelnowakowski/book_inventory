module.exports = function (stockRepository) {
	return {
		setStock: function (req, res, next) {
			var book = { 
				isbn: req.body.isbn, 
				count: req.body.count
			};

			stockRepository.stockUp(book)
				.then(function () {
					res.send(req.body);
				}).catch(next);
		},
		getStocks: function (req, res, next) {
			stockRepository.findAll()
				.then(function(docs) {
					res.json(docs);
				}).catch(next);
		},
		getStockByIsbn: function (req, res, next) {
			stockRepository.getCount(req.params.isbn)
				.then(function(docs) {
					if (docs == null) {
						res.status(404).send('No book with isbn ' + req.params.isbn);
					}
					res.json(docs);
				}).catch(next);
		},
		all: function (req, res, next) {
			console.log("incoming request " + new Date());
			next();
		}, function (req, res) {
			res.send('Hello World!');
		}
	}
}