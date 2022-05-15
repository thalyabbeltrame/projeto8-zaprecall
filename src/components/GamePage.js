import { useState } from 'react';
import Flashcard from './Flashcard';
import Footer from './Footer';

import logo from '../assets/images/logo.png';

export default function GamePage({ flashcards }) {
	const [answersArray, setAnswersArray] = useState([]);

	return (
		<section className='game-page'>
			<header>
				<img src={logo} alt='Logo ZapRecall' />
				<h1>ZapRecall</h1>
			</header>
			<div className='flashcards'>
				{flashcards.map((card, index) => (
					<Flashcard
						key={index}
						question={card.question}
						answer={card.answer}
						numQuestion={index + 1}
						answersArray={answersArray}
						setAnswersArray={setAnswersArray}
					/>
				))}
			</div>
			<Footer answersArray={answersArray} numFlashcards={flashcards.length} />
		</section>
	);
}
