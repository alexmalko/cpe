import React, { useState } from 'react';
import Coin from './Coin';

export default function CointContainer() {
	const data = {
		coins: [
			{
				side: 'heads',
				imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg'
			},
			{
				side: 'tails',
				imgSrc:
					'http://www.pcgscoinfacts.com/UserImages/71009269r.jpg?__cf_chl_jschl_tk__=b943802e3516db9a3dded863406b6e99f2c6dd1f-1591983040-0-AVX-etopIPwB3OPBSbDihZpk3MGxWSQtu6wgQ6LqDCgcqAMXxy_FiiVL_s4oQ0ml8qZUhkht2neRiyVd1mq8_M-_m0MYFnjZvM--fB3PaCfkZ6-TVhxB-y56Rg57_xQtqfarXPtv5fR1ejW1Tx3lMEeGDGFfD23mHFohhX2pwTy6148-xmwxAEjRsYCeGXxEjX604ChmnfTwRNdBOVPpKxqCI6Q3bXEoqSbHN5wzrGG-TPQ7QTHjcZzF8RKJ-_YULGYsjl7PDV0dc2GpqvvO0H9q9I2ciazhRZtRt0Ms5VrBbI4z9Ds9l6nDRZygs7nLBA'
			}
		]
	};

	const [ coin, setCoin ] = useState({
		currCoin: null,
		nFlips: 0,
		nHeads: 0,
		nTails: 0,
		rolling: false
	});

	const flipCoin = () => {
		const newCoin = data.coins[Math.floor(Math.random() * data.coins.length)];
		setCoin((st) => {
			console.log(st);
			return {
				currCoin: newCoin,
				nFlips: st.nFlips + 1,
				rolling: true,
				nHeads: st.nHeads + (newCoin.side === 'heads' ? 1 : 0),
				nTails: st.nTails + (newCoin.side === 'tails' ? 1 : 0)
			};
		});
	};

	return (
		<div className="CoinContainer">
			<h2>Lets Flip a coin</h2>
			{coin.currCoin && <Coin info={coin.currCoin} rolling={coin.rolling} />}
			<button onClick={flipCoin}>Flip Me</button>
			<p>
				Out of {coin.nFlips} flips, there have been {coin.nHeads} heads and {coin.nTails} tails
			</p>
		</div>
	);
}
