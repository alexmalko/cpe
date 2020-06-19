import React, { useState, useEffect } from 'react';
import Todo from './ToDo';
import NewTodoForm from './NewTodoForm';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

export default function BoxList() {
	const [ todos, setTodos ] = useState([ {} ]);
	const [ data, setData ] = useState('');

	const todo = todos.map((todo, index) => <Todo key={index} key={uuidv4()} todo={todo} />);

	const addTodo = (text) => {
		const newTodos = [ ...todos, { text } ];
		setTodos(newTodos);
	};
	// example on how to fetch data fromt the API using hooks
	useEffect(() => {
		async function fetchData() {
			const result = await axios('https://api.github.com/zen');
			setData(result.data);
		}
		fetchData();
	}, []);

	return (
		<div>
			<h1>To-Do List</h1>
			<NewTodoForm createTodo={addTodo} />
			{todo}
			{data}
		</div>
	);
}
