const ampq = require('amqplib/callback_api');
const { makeRequestToAzureFunction } = require('./request');

const processMessage = (msg, callback) => {
	const data = msg.content.toString();
	const dataParsed = JSON.parse(data);

	console.log(' [x] Received %s', data);

	const onSuccess = res => {
		console.log(`[AZURE]: ${res}`);

		callback(dataParsed.email, res);
	};

	makeRequestToAzureFunction(dataParsed.msg)
		.then(res => onSuccess(res))
		.catch(err => console.log(err));
};

const listenToRabbitMq = (queueName, callback) => {
	ampq.connect('amqp://localhost', (err, connection) => {
		if (err) throw err;

		connection.createChannel((error1, channel) => {
			if (error1) throw error1;

			channel.assertQueue(queueName, { durable: false });

			console.log(' [*] Waiting for messages in %s. To exit press CTRL+C', queueName);
			channel.consume(queueName, msg => processMessage(msg, callback), { noAck: true });
		});
	});
};

module.exports = {
	listenToRabbitMq,
};
