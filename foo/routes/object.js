var mongo = require('mongodb').MongoClient;
var collection;

mongo.connect('mongodb://127.0.0.1/foo', function(err, db){
	if (err) throw err;
	database = db
	collection = db.collection('object');
	// console.log(collection);
});

exports.request = function(req, res){

};

exports.list = function(req, res){
	collection.find().toArray(function(err, docs){
		console.log(docs)
		res.render('object', { list: docs});
		// res.send(docs);
	});
	
};

exports.create = function(req, res){
	model = req.body;
	collection.insert(model, function(err, docs){
		if(err) throw err;

		res.send(docs);
	});
};

exports.delete = function(req, res){
	_id = req.params.id;
	console.log(_id)
	collection.remove({_id: new mongodb.ObjectID(_id)}, function(err, docs){
		if(err) throw err;
		console.log(docs)
		res.send(docs);
	});
};
	// console.log(req.params.id);
	// console.log(req.query);
	// console.log(req.cookies);
	// console.log(req.body);

exports.update = function(req, res){

};