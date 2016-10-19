var friends = require('../data/friends.js');

// Routes
// =============================================================

// Basic route that sends the user home page
app.get("/api/friends", function (req, res) {
	res.JSON(friends);
});

app.post('/api/friends', function (req, res) {
	var newUser = req.body;
	var newMatch = {};
	//Median response total is 30; absolute value of the result of subtracting 30 from the survey sum
	//  should return best match under these criteria. 
	//  Making 'median' var and 'add' function for returning sum of a user's survey results
	var median = 30;
	function add(a,b) {
		return a + b;
	};

	var newUserSum = req.body.userInfo.answers.reduce(add, 0);
	var newUserAbs = Math.abs(newUserSum - median);
	var currentBestMatchIndex = 0;
	var currentBestMatchResult = 20;

	for var(i=0; i < friends.length; i++){
		var sum = friends.answers.reduce(add, 0);
		var result = Math.abs(sum - median);
			
		if(result < currentBestMatchResult) {
			currentBestMatchResult = result;
			currentBestMatchIndex = i;
		}
	}

	


	}
})

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
app.listen(PORT, function () {
	console.log('App listening on PORT ' + PORT);
});
