import React from 'react';

export default function Props({ name = 'alex', hobby }) {
	return (
		<div>
			<h1 className="envy">{name}</h1>
			<ul style={{ color: 'red' }}>{hobby.map((h) => <li>{h}</li>)}</ul>
		</div>
	);
}

// import React, { Component } from 'react';

// export default class Props extends Component {
// 	render() {
// 		return (
// 			<div>
// 				<p>Hello {this.props.to}</p>
// 			</div>
// 		);
// 	}
// }

// {props.dob.month} {props.dob.year}
