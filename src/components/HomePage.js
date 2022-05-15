import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

export default function HomePage({ startGame, flashcards, goal, setGoal }) {
	function changeInput(event) {
		setGoal(event.target.value);
	}

	return (
		<section className='home-page'>
			<img src={logo} alt='Logo ZapRecall' />
			<h1>ZapRecall</h1>
			<input type='text' placeholder='Digite sua meta de zaps...' onKeyUp={changeInput} />
			{!isNaN(Number(goal)) && Number(goal) % 1 === 0 && goal > 0 && goal <= flashcards.length ? (
				<Link className='btn-homepage active' to='/game-page' onClick={startGame}>
					Iniciar Recall
				</Link>
			) : (
				<Link className='btn-homepage inactive' to='/' onClick={startGame}>
					Iniciar Recall
				</Link>
			)}
		</section>
	);
}
