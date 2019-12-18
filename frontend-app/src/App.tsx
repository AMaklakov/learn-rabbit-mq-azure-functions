import React, { ChangeEventHandler, MouseEventHandler, useState } from 'react';
import './App.css';
import { sendMessageToServer } from './service';

const QUEUE_NAME = 'RABBIT_MQ';

const App: React.FC = () => {
	const [text, changeText] = useState('');

	const handleChange: ChangeEventHandler<HTMLTextAreaElement> = e => changeText(e?.target?.value);

	const handleClick: MouseEventHandler<HTMLButtonElement> = e => {
		if (!text) {
			alert('There is no text in textarea!');
			return;
		}

		sendMessageToServer(text)
			.then(() => changeText(''))
			.then(() => alert('Successfully sent!'));
	};

	return (
		<div className="App">
			<label>
				Input your text here:
				<textarea rows={3} onChange={handleChange} value={text}></textarea>
			</label>

			<button onClick={handleClick}>Send to RabbitMQ</button>
		</div>
	);
};

export default App;
