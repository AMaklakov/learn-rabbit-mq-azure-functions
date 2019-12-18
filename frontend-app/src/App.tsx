import React, { ChangeEventHandler, MouseEventHandler, useState } from 'react';
import './App.css';
import { sendMessageToServer } from './service';

const DEFAULT_EMAIL = 'ar.maklakov@gmail.com';

const App: React.FC = () => {
	const [text, changeText] = useState('');
	const [email, changeEmail] = useState(DEFAULT_EMAIL);

	const handleTextChange: ChangeEventHandler<HTMLTextAreaElement> = e => changeText(e?.target?.value);
	const handleEmailChange: ChangeEventHandler<HTMLInputElement> = e => changeEmail(e?.target?.value);

	const handleClick: MouseEventHandler<HTMLButtonElement> = e => {
		if (!text) {
			alert('There is no text in textarea!');
			return;
		}

		sendMessageToServer(text, email)
			.then(() => {
				changeText('');
				changeEmail(DEFAULT_EMAIL);
			})
			.then(() => alert('Successfully sent!'));
	};

	return (
		<div className="App">
			<label>
				Input your text here:
				<textarea rows={3} onChange={handleTextChange} value={text}></textarea>
			</label>

			<label>
				Email:
				<input type="text" onChange={handleEmailChange} value={email} />
			</label>

			<button onClick={handleClick}>Send to RabbitMQ</button>
		</div>
	);
};

export default App;
