var mongoose = require('mongoose');

mongoose.connect('mongodb://allowanceappdbuser:all0wancedb@ds047075.mongolab.com:47075/allowanceapp');
var db = mongoose.connection;
 
db.on('error', function () {
	console.log('error occured from db');
});
 
db.once('open', function dbOpen() {
	console.log('successfully opened the db');
});
 
exports.mongoose = mongoose;