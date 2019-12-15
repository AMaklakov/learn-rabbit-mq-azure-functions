const amqp = require('amqplib/callback_api');
const QUEUE_NAME = 'RABBIT_MQ';

let mqChannel;

const createChannel = () => {
	// @ts-ignore
	amqp.connect('amqp://localhost', (error0, connection) => {
		if (error0) {
			throw error0;
		}

		console.log('Connection created');

		// @ts-ignore
		connection.createChannel((error1, channel) => {
			if (error1) {
				throw error1;
			}

			const queue = QUEUE_NAME;

			console.log(`QUEUE ${QUEUE_NAME} created!`);

			channel.assertQueue(queue, { durable: false });
			mqChannel = channel;
		});
	});
};

const sendMessageToRabbitMQ = msg => {
	mqChannel.sendToQueue(QUEUE_NAME, Buffer.from(msg));
};

module.exports = {
	createChannel,
	sendMessageToRabbitMQ,
};
