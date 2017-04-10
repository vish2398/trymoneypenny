const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//Middleware
app.use(express.static('public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.listen(3000, function() {
	//console.log("listening on port 3000");
});

app.post('/subscribe', function(req, res) {
	addSubscriber(req.body.email);
	res.end('success post');

});

function addSubscriber(email) {
	var request = require("request");

	var options = { method: 'POST',
	  url: 'https://usxx.api.mailchimp.com/3.0/lists/id/members',
	  headers: 
	   { 'postman-token': 'tokenhere',
	     'cache-control': 'no-cache',
	     'content-type': 'application/json',
	     authorization: 'Basic token' },
	  body: { email_address: email, status: 'subscribed' },
	  json: true };

	request(options, function (error, response, body) {
	  if (error) throw new Error(error);
	  console.log(body);
	});
}