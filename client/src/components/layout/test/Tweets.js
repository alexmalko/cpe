import React, { useState } from 'react';
import api from '../../../utils/api'; //test passport.JS auth flow

function Tweet({ name, message }) {
	const [ fruit, setFruit ] = useState({ text: 'Learn Hooks' });

	return (
		<div className="tweet">
			<h3>{name}</h3>
			<p>{message}</p>
			<h3>Number of like</h3>
			<h3>{fruit.text}</h3>
			<a href="/auth/google">Google Sing In</a>
			<a href="http://localhost:5000/auth/facebook">Facebook Sing In</a>
		</div>
	);
}

export default Tweet;
