import React from 'react';
import Pokecard from './Pokecard';

export default function Pokedex() {
	let data = {
		pokemon: [
			{ id: 39, name: 'Jigglypuff', type: 'fire', base_experience: 23 },
			{ id: 6, name: 'Charizard', type: 'fire', base_experience: 12 },
			{ id: 2, name: 'Wartortle', type: 'fire', base_experience: 43 },
			{ id: 12, name: 'Kakuna', type: 'fire', base_experience: 98 },
			{ id: 35, name: 'Beedrill ', type: 'fire', base_experience: 45 },
			{ id: 4, name: 'Charmander', type: 'fire', base_experience: 63 },
			{ id: 21, name: 'Raticate', type: 'fire', base_experience: 56 },
			{ id: 87, name: 'Spearow', type: 'fire', base_experience: 23 },
			{ id: 25, name: 'Pikachu', type: 'fire', base_experience: 23 }
		]
	};

	return (
		<div className="Pokedex">
			<div className="Pokedex-cards">
				{data.pokemon.map((p) => <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />)}
			</div>
		</div>
	);
}
