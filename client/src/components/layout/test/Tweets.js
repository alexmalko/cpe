import React, { useState } from 'react';

function Tweet({ name, message }) {
	const [ fruit, setFruit ] = useState({ text: 'Learn Hooks' });

	return (
		<div className="tweet">
			<h3>{name}</h3>
			<p>{message}</p>
			<h3>Number of like</h3>
			<h3>{fruit.text}</h3>
		</div>
	);
}

export default Tweet;
