import React, { useState } from 'react';

export default function Forms({ createTodo }) {
	const [ formData, setFormData ] = useState('');

	// always need to have onChange method to update the state based on the user inputs
	const onChange = (e) => {
		setFormData(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		createTodo(formData);
		setFormData('');
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="Text">New To-do </label>
					<input
						type="text"
						placeholder="new todo"
						name="task"
						value={formData}
						onChange={onChange}
						id="task"
					/>
				</div>
				<button>Add To-do</button>
			</form>
		</div>
	);
}
