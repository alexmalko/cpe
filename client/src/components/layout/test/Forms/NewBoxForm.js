import React, { useState } from 'react';

export default function Forms({ createBox }) {
	const [ formData, setFormData ] = useState({
		height: '',
		width: '',
		color: ''
	});

	// always need to have onChange method to update the state based on the user inputs
	const onChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const onSubmit = (e) => {
		e.preventDefault();
		createBox(formData);
	};

	return (
		<div>
			<p>Sample Form</p>
			<form onSubmit={onSubmit}>
				<div>
					<label htmlFor="Text">Height </label>
					<input type="text" name="height" value={formData.height} onChange={onChange} id="height" />
				</div>
				<div>
					<label htmlFor="Text">Width </label>
					<input type="text" name="width" value={formData.width} onChange={onChange} id="width" />
				</div>
				<div>
					<label htmlFor="Text">Color </label>
					<input type="text" name="color" value={formData.color} onChange={onChange} id="color" />
				</div>
				<button>Add new Box</button>
			</form>
		</div>
	);
}
