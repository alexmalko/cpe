import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { v4 as uuidv4 } from 'uuid';

export default function TodoApp() {
	const initialTodo = JSON.parse(window.localStorage.getItem('todos') || '[]');
	// const initialTodo = [
	// 	{ id: 1, task: 'grown beard', completed: false },
	// 	{ id: 2, task: 'jello', completed: true },
	// 	{ id: 3, task: 'grown a pair of cohones', completed: false }
	// ];
	const [ todos, setTodos ] = useState(initialTodo);

	useEffect(
		() => {
			window.localStorage.setItem('todos', JSON.stringify(todos));
		},
		[ todos ]
	);

	const addTodo = (newTodoText) => {
		setTodos([ ...todos, { id: uuidv4(), task: newTodoText, completed: false } ]);
	};

	const removeTodo = (todoId) => {
		const updatedTodos = todos.filter((todo) => todo.id !== todoId);
		setTodos(updatedTodos);
	};

	const toggleTodo = (todoId) => {
		const updatedTodos = todos.map((todo) => (todo.id === todoId ? { ...todo, completed: !todo.completed } : todo));
		setTodos(updatedTodos);
	};

	const editTodo = (todoId, newTask) => {
		const updatedTodos = todos.map((todo) => (todo.id === todoId ? { ...todo, task: newTask } : todo));
		setTodos(updatedTodos);
	};

	return (
		<Paper
			style={{
				paddign: 0,
				margin: 0,
				height: '100vh',
				backgroundColor: '#fafafa'
			}}
		>
			<AppBar color="primary" position="static" style={{ height: '64px' }}>
				<Toolbar>
					<Typography color="inherit">TODO with HOOKS</Typography>
				</Toolbar>
			</AppBar>
			<Grid container justify="center" style={{ marginTop: '1rem' }}>
				<Grid item xs={12} md={8} lg={4}>
					<TodoForm addTodo={addTodo} />
					<TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} editTodo={editTodo} />
				</Grid>
			</Grid>
		</Paper>
	);
}
