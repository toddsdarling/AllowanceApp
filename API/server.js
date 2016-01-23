var restify = require('restify');
var server = restify.createServer();

server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

//CORS
server.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

var allowanceDB = require('./db').mongoose;

console.log(allowanceDB);

//GET USERS API ENDPOINT
server.get('/api/users', function(req, res, next) {

	var User = require('./users/userSchema');

	//IN HERE, the allowanceDB variable from above is always undefined
	User.find({}, function(err, result) {
		if (err) {
			console.log(err);
			return res.send({'error': err});
		} else {
			return res.send({'users': result});
		}
	});

    return next();

});


server.listen(3000, function () {
	console.log("Server started @ 3000");
});