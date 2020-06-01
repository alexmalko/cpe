import React, { useState } from 'react';
import Tweet from './Tweets';

function App() {
	const [ users ] = useState([
		{ name: 'Lilia', message: 'Hello there' },
		{ name: 'Alex', message: 'I am a tennis playes' },
		{ name: 'Alina', message: 'Awesome' },
		{ name: 'Alex', message: 'Dudes' }
	]);

	return <div className="app">{users.map((user) => <Tweet name={user.name} message={user.message} />)}</div>;
}

export default App;
