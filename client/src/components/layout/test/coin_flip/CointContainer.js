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
					'http://www.pcgscoinfacts.com/UserImages/71009269r.jpg?__cf_chl_jschl_tk__=30210f1877e8767f8b50e8dfb382d0b7dcbb9618-1592021830-0-Adg2Hc2_oJOxI0vwMuAkwd5q3O2VV0nbB4nXvRgRh9ev22URoPX5sRTRbyKtDWPVPvEnqMGl4dN5BlX1XMpir23AX-CTT_YIY2KUWVLN4wcFrEzMOwcwMbtUqbgUpQCb1aOvBbBVQNexs-_R-gKnBz4oJMAGNH_P_PTtQrh3KZqqX1Xu9PXFZuxgkd4QOjgHzQs2ujJRxFf-QMNBzkDMX6PkEc7Lnw6pfBSsWk333lP9Mwy3wmk4X_03m7NTCDsxJenIhO_DUirikHWXxGlBb4B5ISdTimlQQUjvZHTPBhVhpgft7JkOCpDrY1uAlU4_PA'
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
