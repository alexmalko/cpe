import React, { useState } from 'react';
import Dice from './Dice';

export default function RollDice() {
	let data = {
		sides: [ 'one', 'two', 'three', 'four', 'five', 'six' ]
	};

	const [ count, setCount ] = useState({
		die1: 'one',
		die2: 'two',
		rolling: false
	});

	const roll = () => {
		const newDie1 = data.sides[Math.floor(Math.random() * data.sides.length)];
		const newDie2 = data.sides[Math.floor(Math.random() * data.sides.length)];
		setCount({ die1: newDie1, die2: newDie2, rolling: true });

		setTimeout(() => {
			setCount({ ...count, rolling: false });
		}, 1000);
	};

	return (
		<div>
			<div className="RollDice">
				<Dice face={count.die1} rolling={count.rolling} />
				<Dice face={count.die2} rolling={count.rolling} />
			</div>
			<div className="RollDice-Button">
				<button onClick={roll}>Roll Dice</button>
			</div>
		</div>
	);
}

// rolling={count.rolling}
// disabled={count.rolling}
