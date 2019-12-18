const https = require('https');
const { AZURE_FN_URI } = require('./const');

const makeRequestToAzureFunction = request => {
	return new Promise((resolve, reject) => {
		https
			.get(AZURE_FN_URI + `&msg=${request}`, resp => {
				let data = '';

				// A chunk of data has been received.
				resp.on('data', chunk => (data += chunk));

				// The whole response has been received. Print out the result.
				resp.on('end', () => resolve(data));
			})
			.on('error', err => reject(err));
	});
};

module.exports = {
	makeRequestToAzureFunction,
};
