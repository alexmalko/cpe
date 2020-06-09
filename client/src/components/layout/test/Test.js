import React, { Component } from 'react';
import Props from './Props';

function getNum() {
	return Math.floor(Math.random() * 10) + 1;
}

const name = {
	first: 'alex',
	last: 'malko',
	born: {
		year: '1990',
		month: 'dec'
	}
};

export default class Test extends Component {
	render() {
		return (
			<div>
				<Props hobby={[ 'soccer', 'tennis', 'swimming' ]} />
				<Props hobby={[ 'eat', 'rave', 'sleep' ]} />
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
