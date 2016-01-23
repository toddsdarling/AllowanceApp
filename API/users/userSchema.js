module.exports = (function userSchema () {

	var mongoose = require('../db').mongoose;

	var schema = {
		name: {type: String, required: true},
		imageUrl: {type: String, required: false}
	};

	var userSchema = new mongoose.Schema(schema);
	
	var User = mongoose.model('users', userSchema);
		
	return User;

})();


