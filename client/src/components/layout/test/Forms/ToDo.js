import React from 'react';

export default function Todo({ todo }) {
	return (
		<div>
			<button>Edit</button>
			<button>X</button>
			<li>{todo.text}</li>
		</div>
	);
}
