import React from 'react';
import Card from '../Card/Card';
import './gameboard.css';

const Gameboard = () => {
	return (
		<div className='gameboard'>
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
		</div>
	);
};

export default Gameboard;
