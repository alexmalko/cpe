import Box from './Box';
import React from 'react';

export default function ColorBoxes() {
	const data = {
		numBoxes: 18
	};

	const boxes = Array.from({ length: data.numBoxes }).map(() => <Box />);
	return (
		<div>
			<div className="BoxContainer">{boxes}</div>
		</div>
	);
}
