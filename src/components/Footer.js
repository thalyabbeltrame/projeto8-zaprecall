import { Link } from 'react-router-dom';
import party from '../assets/images/party-emoji.png';
import sad from '../assets/images/sad-emoji.png';
import IconAnswer from './IconAnswer';

export default function Footer({ answersList, numFlashcards, goal, setGoal }) {
	const allAnswered = answersList.length === numFlashcards;

	const success = (
		<>
			<div className='footer-title'>
				<img src={party} alt='Party emoji' />
				<h3>Parabéns!</h3>
			</div>
			<h4>Você atingiu a sua meta de {goal} flashcard(s)!</h4>
		</>
	);

	const failure = (
		<>
			<div className='footer-title'>
				<img src={sad} alt='Sad emoji' />
				<h3>Putz...</h3>
			</div>
			<h4>Ainda faltam alguns para você atingir sua meta... Mas não desanime!</h4>
		</>
	);

	return (
		<footer className={allAnswered ? 'expanded' : ''}>
			{allAnswered ? (
				answersList.filter((answer) => answer === 'yellow' || answer === 'green').length >= goal ? (
					success
				) : (
					failure
				)
			) : (
				<></>
			)}
			<h3>
				{answersList.length}/{numFlashcards} CONCLUÍDOS
			</h3>
			<div className='footer-icons'>
				{answersList.map((answer, index) => (
					<IconAnswer key={index} buttonType={answer} />
				))}
			</div>
			{allAnswered ? (
				<Link className='btn-restart' to='/' onClick={() => setGoal(0)}>
					REINICIAR RECALL
				</Link>
			) : (
				<></>
			)}
		</footer>
	);
}
