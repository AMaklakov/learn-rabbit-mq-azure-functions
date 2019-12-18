var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(
	cors({
		origin: '*',
		methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
		preflightContinue: false,
		optionsSuccessStatus: 204,
	})
);

const { createChannel, sendMessageToRabbitMQ } = require('./rabbit-mq');
createChannel();

app.post('/sendMessage', function(req, res) {
	console.log(`send message -> "${req.body.email} + ${req.body.msg}"`);

	sendMessageToRabbitMQ(
		JSON.stringify({
			msg: req.body.msg,
			email: req.body.email,
		})
	);
	res.sendStatus(200);
});

app.listen(3001, function() {
	console.log('Example app listening on port 3001!');
	console.log('POST /sendMessage body: { msg : string, email : string }');
});
