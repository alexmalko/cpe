import React from 'react';

export default function Box({ height, width, color }) {
	return (
		<div>
			<div
				style={{
					height: `${height}em`,
					width: `${width}em`,
					backgroundColor: color
				}}
			/>
		</div>
	);
}
