var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/myproject';
var collection = MongoClient.connect(url, { 
		db: { bufferMaxEntries: 0 }
	}).then(function (db){
	return db.collection('books');
});
var StockRepository = {
	stockUp: function (book) {
		return collection.then(function (collection) {
			return collection.updateOne({isbn: book.isbn}, book,
				{ 
					upsert: true
				}
			);
		});
	},
	findAll: function () {
		return collection.then(function (collection) {
			return collection.find().toArray();
		});
	},
	getCount: function (isbn) {
		console.log(isbn);
		return collection.then(function (collection) {
			return collection.find({"isbn": isbn}, {"count": 1, "_id": 0}).limit(1).next();
		});
	}
}

module.exports = StockRepository;