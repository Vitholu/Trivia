import React from 'react';
import './card.css';

const Card = () => {
	return (
		<article className='card'>
			<h2 className='question'>Taxi Driver was released in which year?</h2>
			<ul className='answers'>
				<li>
					<button className='choice'>Answer 1</button>
				</li>
				<li>
					<button className='choice'>Answer 2</button>
				</li>
				<li>
					<button className='choice'>Answer 3</button>
				</li>
				<li>
					<button className='choice'>Answer 4</button>
				</li>
			</ul>
		</article>
	);
};

export default Card;
