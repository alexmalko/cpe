import React, { useState } from 'react';

const State = ({ face, rolling }) => {
	return (
		<div>
			<i className={`Die fas fa-dice-${face} ${rolling ? 'rolling' : ''}`} />
		</div>
	);
};

export default State;
