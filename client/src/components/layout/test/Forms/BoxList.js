import React, { useState } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

export default function BoxList() {
	const [ boxList, setBoxList ] = useState({
		boxes: [ { width: 10, height: 10, color: 'purple' } ]
	});

	const boxes = boxList.boxes.map((box) => <Box height={box.width} width={box.height} color={box.color} />);

	const create = (newBox) => {
		setBoxList({
			boxes: [ newBox ]
		});
	};

	return (
		<div>
			<h1>Color Box Maker</h1>
			<NewBoxForm createBox={create} />
			{boxes}
		</div>
	);
}
