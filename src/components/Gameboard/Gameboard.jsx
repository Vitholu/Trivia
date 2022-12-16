import React, { useState, useMemo } from 'react';
import Card from '../Card/Card';
import { TriviaData } from '../../services/fetchTrivia.js';
import './gameboard.css';

const Gameboard = () => {
	const [questionsArray, setQuestionsArray] = useState([]);
	const useTriviaData = () => useMemo(() => TriviaData({ setQuestionsArray }), []);

	useTriviaData();

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
