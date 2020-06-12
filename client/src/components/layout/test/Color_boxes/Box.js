import React, { useState } from 'react';

export default function Box() {
	const colors = [
		'olive',
		'purple',
		'magenta',
		'violet',
		'pink',
		'red',
		'blue',
		'grey',
		'green',
		'orange',
		'green',
		'royalblue',
		'salmon',
		'peru',
		'moccasin'
	];

	const [ box, setBox ] = useState({
		color: colors[Math.floor(Math.random() * colors.length)]
	});

	const handleClick = () => {
		let newColor;
		do {
			newColor = colors[Math.floor(Math.random() * colors.length)];
		} while (newColor === box.color);
		setBox({ color: newColor });
	};

	return <div className="Box" style={{ backgroundColor: box.color }} onClick={handleClick} />;
}
