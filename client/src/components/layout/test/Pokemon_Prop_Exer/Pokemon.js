import React, { Component } from 'react';
import Pokedex from './Pokedex';

function getNum() {
	return Math.floor(Math.random() * 10) + 1;
}

export default class Test extends Component {
	render() {
		return (
			<div>
				<Pokedex />
			</div>
		);
	}
}

// import React from 'react';

// export default function Test() {
// 	return (
// 		<div>
// 			<p>Hello</p>
// 		</div>
// 	);
// }
