const nodemailer = require('nodemailer');
const { EMAIL, EMAIL_PASSWORD } = require('./const');

const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: EMAIL,
		pass: EMAIL_PASSWORD,
	},
});

const mailOptions = {
	from: EMAIL,
	to: '',
	subject: 'Sending Email using Node.js',
	text: 'Default text',
};

const sendEmail = (to, text) => {
	transporter.sendMail({ ...mailOptions, to, text }, (error, info) => {
		if (error) {
			console.log(error);

			return;
		}

		console.log('Email sent: ' + info.response);
	});
};

module.exports = {
	sendEmail,
};
