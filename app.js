var express = require('express');
var path = require('path');

var app = express();

app.use('/static', express.static(path.join(__dirname, 'static')));

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, "/templates/index.html"));
});

app.get('/info', function(req, res) {
	res.sendFile(path.join(__dirname, "/static/text/info.txt"));
});

app.get('/opinion', function(req, res) {
	var num1 = req.query.number1;
	var num2 = req.query.number2;

	var primeCount = 0;

	var prime = true;

	if (num1 != 0 && num1 != 2 && num1 != -2) {

		for(var i = 2; i <= Math.sqrt(Math.abs(num1)); i++) {
	    	if(num1 % i === 0) {
	    		prime = false;
	    		break;
	    	} 
		}

	} else {
		prime = false;
	}

	if (prime) primeCount++;

	prime = true;

	if (num2 != 0 && num2 != 2 && num2 != -2) {

		for(var i = 2; i <= Math.sqrt(Math.abs(num2)); i++) {
	    	if(num2 % i === 0) {
	    		prime = false;
	    		break;
	    	} 
		}

	} else {
		prime = false;
	}

	if (prime) primeCount++;

	var message = "";

	if (primeCount == 0) {
		message = "You have good taste in numbers, Luke approves.";
	} else if (primeCount == 1) {
		message = "Well, at least one of those numbers is alright.";
	} else {
		message = "........really? Both of your favorites are prime?"
	}

	res.send(message);
});

app.listen(80, function() {
	console.log("App has been started");
});