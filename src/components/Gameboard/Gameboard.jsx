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
			{questionsArray.map((a) => (
				<Card
					question={a.question}
					correctAnswer={a.correctAnswer}
					incorrectAnswers={a.incorrectAnswers}
					key={a.id}
				/>
			))}
		</div>
	);
};

export default Gameboard;
