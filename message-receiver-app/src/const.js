const QUEUE_NAME = 'RABBIT_MQ';

const AZURE_FN_URI =
	`https://validatemessage.azurewebsites.net/api/verifyMessage` +
	`?code=ODtrKtbaNTlsaa/Ir1PJdD8VUAreZNHqFJOUbxbL/wE/BbsjEXFkuA==`;

const CRON_SCHEDULE = '*/10 * * * *';

const EMAIL = 'artyom.test.email@gmail.com';
const EMAIL_PASSWORD = '';

module.exports = {
	QUEUE_NAME,
	AZURE_FN_URI,
	CRON_SCHEDULE,
	EMAIL,
	EMAIL_PASSWORD,
};
