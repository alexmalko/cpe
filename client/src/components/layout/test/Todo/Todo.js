import React, { Fragment } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import useToogleState from './useToogleState';
import EditTodoForm from './editTodoForm';

export default function Todo({ task, completed, removeTodo, id, toggleTodo, editTodo }) {
	const [ isEditing, toggle ] = useToogleState();

	return (
		<div>
			<ListItem>
				{isEditing ? (
					<EditTodoForm editTodo={editTodo} id={id} task={task} toggle={toggle} />
				) : (
					<Fragment>
						<Checkbox checked={completed} onClick={() => toggleTodo(id)} />
						<ListItemText style={{ textDecoration: completed ? 'line-through' : 'none' }}>
							{task}
						</ListItemText>
						<ListItemSecondaryAction>
							<IconButton onClick={() => removeTodo(id)}>
								<DeleteIcon />
							</IconButton>
							<IconButton>
								<EditIcon onClick={toggle} />
							</IconButton>
						</ListItemSecondaryAction>
					</Fragment>
				)}
			</ListItem>
		</div>
	);
}
