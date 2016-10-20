// Dependencies
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// tables
// =============================================================
var users = [
	{
		name: "Astrid Bedastrid",
		answers: [2,5,1,2,5,2,4,2,1,4],
		picture: "../assets/images/AB.jpg",
		petType: "Cat",
		petName: "Muffy",
		email: "muffyMommy@gmail.com",
		screenName: "MuffyMommy37"
	},
	{
		name: "Kirsten Wing",
		answers: [2,2,1,4,1,4,1,3,4,5],
		picture: "../assets/images/KW.jpg",
		petType: "Dog",
		petName: "Duke",
		email: "SirDukeDog@gmail.com",
		screenName: "SirDukeDog"
	},
	{
		name: "Henry Klipsenger",
		answers: [1,1,1,2,1,2,1,2,1,4],
		picture: "../assets/images/HK.jpg",
		petType: "Lizard",
		petName: "Herbert Herbert",
		email: "newworldogre@gmail.com",
		screenName: "ProbReactSolut"
	},
	{
		name: "Charles G Koch",
		answers: [5,5,1,4,3,1,3,2,4,5],
		picture: "../assets/images/CGK.jpg",
		petType: "Dog",
		petName: "Finky",
		email: "Misesman22@gmail.com",
		screenName: "BastiatBro"
	},
	{
		name: "Isabel Paterson",
		answers: [2,5,3,5,1,2,1,4,3,2],
		picture: "../assets/images/IP.jpg",
		petType: "Dog",
		petName: "Dagney",
		email: "Individualism43@gmail.com",
		screenName: "I_Own_Me"
	},
	{
		name: "Eugene DuBois",
		answers: [2,4,2,4,2,1,4,9,4,5],
		picture: "../assets/images/ED.jpg",
		petType: "Cat",
		petName: "Steve",
		email: "RawPaw@gmail.com",
		screenName: "JavaMan"
	},
	{
		name: "Phoebe Tyers",
		answers: [2,5,4,5,2,5,5,1,4,5],
		picture: "../assets/images/PT.jpg",
		petType: "Cat",
		petName: "Claire",
		email: "MoonSister@gmail.com",
		screenName: "MoonSister"
	},
	{
		name: "BrYan Frange",
		answers: [5,3,1,3,5,1,1,2,5,3],
		picture: "../assets/images/HB.jpg",
		petType: "Dog",
		petName: "Hoagland",
		email: "FNewYork@gmail.com",
		screenName: "Hollywood"
	},
	{
		name: "Sebastian Conelli",
		answers: [1,2,5,3,4,4,3,5,2,5],
		picture: "../assets/images/SC.jpg",
		petType: "Lizard",
		petName: "LOL_IDK",
		email: "giggles@gmail.com",
		screenName: "GiggleGuy"
	}
];


// Routes
// =============================================================

// Basic route that sends the user home page
app.get("/", function (req, res) {
	res.sendFile(path.join(__dirname, "/app/public/index.html"));
});

app.get("/survey", function (req, res) {
	res.sendFile(path.join(__dirname, "/app/public/survey.html"));
});

app.get("/register", function (req, res) {
	res.sendFile(path.join(__dirname, "/app/public/register.html"));
});


app.get("/home", function (req, res) {
	res.sendFile(path.join(__dirname, "/app/public/home.html"));
});

// View all users - provides JSON
app.get("/home/all", function (req, res) {
	res.json(users);
});

// Create new users - takes in JSON input
app.post("/register/new", function (req, res) {
	var newUser = req.body;
	newUser.name = newUser.name.replace(/\s+/g, "").toLowerCase();
	newUser.pic = newUser.

	// console.log(newReservation);

	users.push(newUser);

	console.log(users);

	// res.json(newReservation);
});

// app.post("/survey/new", function(req, res) {
// 	var newSurvey = req.body;
// 	newSurvey.
// });

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
	console.log('App listening on PORT ' + PORT);
});
