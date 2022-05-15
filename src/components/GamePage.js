import { useState } from 'react';
import Flashcard from './Flashcard';
import Footer from './Footer';
import logo from '../assets/images/logo.png';

export default function GamePage({ flashcards, goal, setGoal }) {
	const [answersList, setAnswersList] = useState([]);

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
						answersList={answersList}
						setAnswersList={setAnswersList}
					/>
				))}
			</div>
			<Footer answersList={answersList} numFlashcards={flashcards.length} goal={goal} setGoal={setGoal} />
		</section>
	);
}
