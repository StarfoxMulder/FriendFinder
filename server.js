// Dependencies
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var friends = require('./app/data/friends.js');
// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

//static assets
app.use(express.static('app/public'))
// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));


// Routes
// =============================================================
require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app);
// Basic route that sends the user home page
		// app.get("/", function (req, res) {
		// 	res.sendFile(path.join(__dirname, "/app/public/index.html"));
		// });

		// app.get("/survey", function (req, res) {
		// 	res.sendFile(path.join(__dirname, "/app/public/survey.html"));
		// });

		// app.get("/register", function (req, res) {
		// 	res.sendFile(path.join(__dirname, "/app/public/register.html"));
		// });


		// app.get("/home", function (req, res) {
		// 	res.sendFile(path.join(__dirname, "/app/public/home.html"));
		// });

		// // View all users - provides JSON
		// app.get("/home/all", function (req, res) {
		// 	res.json(users);
		// });

		// // Create new users - takes in JSON input
		// app.post("/register/new", function (req, res) {
		// 	var newUser = req.body;
		// 	newUser.name = newUser.name.replace(/\s+/g, "").toLowerCase();
		// 	newUser.pic = newUser.

		// 	// console.log(newReservation);

		// 	users.push(newUser);

		// 	console.log(users);

		// 	// res.json(newReservation);
		// });

// app.post("/survey/new", function(req, res) {
// 	var newSurvey = req.body;
// 	newSurvey.
// });

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
	console.log('App listening on PORT ' + PORT);
});
