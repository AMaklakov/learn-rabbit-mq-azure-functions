const cron = require('node-cron');
const { makeRequestToAzureFunction } = require('./request');

const processResponse = msg => console.log(`[CRON]: "${msg}"`);

const enableCronRequest = (schedule, request) => {
	cron.schedule(schedule, () => makeRequestToAzureFunction(request || Date.now()).then(processResponse));
};

module.exports = {
	enableCronRequest,
};
