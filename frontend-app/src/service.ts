export const sendMessageToServer = (msg: string) => {
	return fetch('http://localhost:3001/sendMessage', {
		method: 'POST', // *GET, POST, PUT, DELETE
		// mode: 'cors', // no-cors, cors, *same-origin
		// cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
		// credentials: 'same-origin', // include, *same-origin, omit
		headers: {
			'Content-Type': 'application/json',
			// 'Content-Type': 'application/x-www-form-urlencoded',
		},
		body: JSON.stringify({ msg }),
	});
};
