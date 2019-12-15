const ampq = require('amqplib/callback_api');

const QUEUE_NAME = 'RABBIT_MQ';

ampq.connect('amqp://localhost', (err, connection) => {
	if (err) throw err;

	console.log('Successfull connection');

	connection.createChannel((error1, channel) => {
		if (error1) throw error1;

		console.log('Channel created');

		channel.assertQueue(QUEUE_NAME, { durable: false });

		console.log(' [*] Waiting for messages in %s. To exit press CTRL+C', QUEUE_NAME);
		channel.consume(QUEUE_NAME, msg => console.log(' [x] Received %s', msg.content.toString()), { noAck: true });
	});
});
