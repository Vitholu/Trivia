import React, { useState } from 'react';
import './card.css';

const Card = ({ question, correctAnswer, incorrectAnswers }) => {
	const choiceArray = [correctAnswer, ...incorrectAnswers];
	const [correctChoice, setCorrectChoice] = useState([]);

	const handleClick = (choice) => {
		if (choice === correctAnswer) {
			setCorrectChoice(choice);
		}
	};

	return (
		<article className='card'>
			<h2 className='question'>{question}</h2>
			<ul className='answers'>
				{choiceArray
					.map((value) => ({ value, sort: Math.random() }))
					.sort((a, b) => a.sort - b.sort)
					.map(({ value }) => (
						<li key={value}>
							<button
								className={`choice ${value === correctChoice && 'correct'}`}
								onClick={() => handleClick(value)}>
								{value}
							</button>
						</li>
					))}
			</ul>
		</article>
	);
};

export default Card;
