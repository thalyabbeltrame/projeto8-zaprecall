import { Link } from 'react-router-dom';
import party from '../assets/images/party-emoji.png';
import sad from '../assets/images/sad-emoji.png';
import IconAnswer from './IconAnswer';

export default function Footer({ answersArray, numFlashcards, goal }) {
	const allAnswered = answersArray.length === numFlashcards;

	const success = (
		<>
			<div className='footer-title'>
				<img src={party} alt='Party emoji' />
				<h3>Parabéns!</h3>
			</div>
			<h4>Você não esqueceu de nenhum flashcard!</h4>
		</>
	);

	const failure = (
		<>
			<div className='footer-title'>
				<img src={sad} alt='Sad emoji' />
				<h3>Putz...</h3>
			</div>
			<h4>Ainda faltam alguns... Mas não desanime!</h4>
		</>
	);

	return (
		<footer className={allAnswered ? 'expanded' : ''}>
			{allAnswered ? (
				answersArray.filter((answer) => answer === 'yellow' || answer === 'green').length >= goal ? (
					success
				) : (
					failure
				)
			) : (
				<></>
			)}
			<h3>
				{answersArray.length}/{numFlashcards} CONCLUÍDOS
			</h3>
			<div className='footer-icons'>
				{answersArray.map((answer, index) => (
					<IconAnswer key={index} buttonType={answer} />
				))}
			</div>
			{allAnswered ? (
				<Link className='btn-restart' to='/'>
					REINICIAR RECALL
				</Link>
			) : (
				<></>
			)}
		</footer>
	);
}
