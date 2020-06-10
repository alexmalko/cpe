import React from 'react';

const POKI_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

let padToThree = (num) => (num <= 999 ? `00${num}`.slice(-3) : num);

export default function Pokecard({ id, name, exp, type }) {
	let img = `${POKI_API}${padToThree(id)}.png`;
	return (
		<div className="Pokecard">
			<h1>{name}</h1>
			<img src={img} alt="none" />
			<div>{type}</div>
			<div>{exp}</div>
		</div>
	);
}
