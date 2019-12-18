const { enableCronRequest } = require('./cron');
const { QUEUE_NAME, CRON_SCHEDULE } = require('./const');
const { listenToRabbitMq } = require('./rabbit-mq');
const { sendEmail } = require('./send-to-email');

// Listen to rabbit-mq and send messages to email
listenToRabbitMq(QUEUE_NAME, sendEmail);

// enables CRON to call AzureFunction every 10 minutes
enableCronRequest(CRON_SCHEDULE);
