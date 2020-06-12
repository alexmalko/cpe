import React from 'react';

export default function Coin({ info, rolling }) {
	return (
		<div className="Coin">
			<img src={info.imgSrc} alt="" className={`${rolling ? 'rolling' : ''}`} />
		</div>
	);
}

// className={`Die fas fa-dice-${face} ${rolling ? 'rolling' : ''}`}
