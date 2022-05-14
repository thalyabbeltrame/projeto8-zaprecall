import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

export default function HomePage({ startGame }) {
	return (
		<section className='home-page'>
			<img src={logo} alt='Logo ZapRecall' />
			<h1>ZapRecall</h1>
			<Link className='btn-homepage' to='/game-page' onClick={startGame}>
				Iniciar Recall
			</Link>
		</section>
	);
}
