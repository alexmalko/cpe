import React, { useState } from 'react';

export default function State() {
	const [ count, setCount ] = useState(10);

	return (
		<div>
			<p>Hello form the state components {count}</p>
		</div>
	);
}
