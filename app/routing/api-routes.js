var friends = require('../data/friends.js');

// Routes
// =============================================================
module.exports = function(app) {
	// Basic route that sends the user home page
	app.get('/api/friends', function (req, res) {
		res.json(friends);
	});

	app.post('/api/friends', function (req, res) {
		var newUser = req.body;
		var newMatch = {};
		//Median response total is 30; absolute value of the result of subtracting 30 from the survey sum
		//  should return best match under these criteria. 
		//  Making 'median' var and 'add' function for returning sum of a user's survey results
		var median = 30;
		
		function add(a,b) {

			return parseFloat(a) + parseFloat(b);
		};
		// function(previousValue, currentValue, currentIndex, array) {
		// 	return previousValue += currentValue;
		// });

		console.log("The length of friends should be 9:  "+friends.length);

		var newUserSum = 0;
		var newUserSum = newUser.answers.reduce(add, 0);
		var newUserAbs = Math.abs(newUserSum - median);
		var bestMatchIndex = 0;
		// var currentBestMatchIndex = 0;
		// var currentBestMatchResult = 20;
		var sumArray = [];

		console.log("newUserAbs from api-routes: "+newUserAbs);
		console.log("newUserSum from api-routes: "+newUserSum);

		for (var i=0; i < friends.length; i++){

			var sum = 0;
			var sum = friends[i].answers.reduce(add, 0);
			var result = Math.abs(sum - median);
			console.log("Friend "+i+" sum: "+sum);
			console.log("Friend "+i+" result: "+result);


			sumArray.push(result);
		};

		bffIndex = nearestResult(newUserAbs, sumArray);
		newBFF = friends[bffIndex];	

		console.log("sumArray: "+sumArray);
		console.log("bffIndex: "+bffIndex);

				
			// if(result <= newUserAbs) {
			// 	currentBestMatchResult = result;
			// 	currentBestMatchIndex = i;
			// }

		//Now that we have a best match index, populate and toggle the modal

		friends.push(newUser);

		res.json(newBFF);

	});

	function nearestResult (num, arr) {
		var curr = 0;
		var diff = Math.abs(num - curr);
		for(var i = 0; i <arr.length; i++){
			var newDiff = Math.abs (num - arr[i]);
			if(newDiff < diff) {
				diff = newDiff;
				curr = i;
			}
		}
		return curr;
		console.log("curr from nearestResults function: "+curr);
	};

}
// app.get("/survey", function (req, res) {
// 	res.sendFile(path.join(__dirname, "/app/public/survey.html"));
// });

// app.post("/survey/new", function(req, res) {
// 	var newSurvey
// })

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

// 	// console.log(newUser);

// 	users.push(newUser);

// 	console.log(users);

// 	// res.json(newUser);
// });

// Starts the server to begin listening
// =============================================================