import React from 'react';
import TextField from '@material-ui/core/TextField';
import useInputState from './useInputState';

export default function EditTodoForm({ editTodo, id, task, toggle }) {
	const [ value, handleChange, reset ] = useInputState(task);
	return (
		<div>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					editTodo(id, value);
					reset();
					toggle();
				}}
				style={{ marginLeft: '1rem', width: '100%' }}
			>
				<TextField margin="normal" value={value} onChange={handleChange} autoFocus />
			</form>
		</div>
	);
}
