import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

export default function HomePage({ startGame, numFlashcards, goal, setGoal }) {
	const isInputValid = !isNaN(goal) && Number(goal) % 1 === 0 && goal >= 1 && goal <= numFlashcards;

	function changeInput(event) {
		setGoal(event.target.value);
	}

	return (
		<section className='home-page'>
			<img src={logo} alt='Logo ZapRecall' />
			<h1>ZapRecall</h1>
			<input type='text' placeholder='Digite sua meta de zaps...' onKeyUp={changeInput} />
			<Link
				className={isInputValid ? 'btn-homepage active' : 'btn-homepage inactive'}
				to={isInputValid ? '/game-page' : '/'}
				onClick={startGame}
			>
				Iniciar Recall
			</Link>
		</section>
	);
}
