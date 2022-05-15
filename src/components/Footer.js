import { Link } from 'react-router-dom';
import party from '../assets/images/party-emoji.png';
import sad from '../assets/images/sad-emoji.png';
import IconAnswer from './IconAnswer';

export default function Footer({ answersArray, numFlashcards }) {
	const allAnswered = answersArray.length === numFlashcards;

	const withoutRedAnswer = (
		<>
			<div className='footer-title'>
				<img src={party} alt='Party emoji' />
				<h3>Parabéns!</h3>
			</div>
			<h4>Você não esqueceu de nenhum flashcard!</h4>
		</>
	);

	const withRedAnswer = (
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
			{allAnswered ? answersArray.some((answer) => answer === 'red') ? withRedAnswer : withoutRedAnswer : <></>}
			<h3>
				{answersArray.length}/{numFlashcards} CONCLUÍDOS
			</h3>
			<div className='footer-icons'>
				{answersArray.map((answer, index) => (
					<IconAnswer key={index} buttonType={answer} />
				))}
			</div>
			{allAnswered ? <Link className='btn-restart' to='/'>REINICIAR RECALL</Link> : <></>}
		</footer>
	);
}
