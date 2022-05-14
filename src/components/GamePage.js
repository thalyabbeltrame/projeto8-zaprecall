import { useState } from 'react';
import Flashcard from './Flashcard';
import Footer from './Footer';
import IconAnswer from './IconAnswer';
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
			<Footer>
				<h3>
					{answersArray.length}/{flashcards.length} CONCLUÍDOS
				</h3>
				<div className='footer-icons'>
					{answersArray.map((answer, index) => (
						<IconAnswer key={index} buttonType={answer} />
					))}
				</div>
			</Footer>
		</section>
	);
}
