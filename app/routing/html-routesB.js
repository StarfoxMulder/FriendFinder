//Path npm package
var path = require('path');

//Routing
module.exports = function(app) {
	app.get("/", function (req, res) {
		res.sendFile(path.join(__dirname, "/app/public/index.html"));
	});

	app.get("/survey", function (req, res) {
		res.sendFile(path.join(__dirname, "/app/public/survey.html"));
	});

	//For separate Registration Page
	// app.get("/register", function (req, res) {
	// 	res.sendFile(path.join(__dirname, "/app/public/register.html"));
	// });

	//For separate 'home'/display all available friends page
	// app.get("/home", function (req, res) {
	// 	res.sendFile(path.join(__dirname, "/app/public/home.html"));
	// });

	// // View all users - provides JSON
	// app.get("/home/all", function (req, res) {
	// 	res.json(users);
	// });

	//defaulting to index if not matching route
	app.use(function (req, res) {
		res.sendFile(path.join(__dirname + "/app/public/index.html"));
	});	
};