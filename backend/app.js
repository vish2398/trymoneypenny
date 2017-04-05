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
	  url: 'https://usxx.api.mailchimp.com/3.0/lists/REPLACE_WITH_REAL_ID/members',
	  headers: 
	   { 'postman-token': 'REPLACE_WITH_REAL_TOKEN',
	     'cache-control': 'no-cache',
	     'content-type': 'application/json',
	     authorization: 'Basic REPLACE_WITH_REAL_API_KEY' },
	  body: { email_address: email, status: 'subscribed' },
	  json: true };

	request(options, function (error, response, body) {
	  if (error) throw new Error(error);
	  console.log(body);
	});
}