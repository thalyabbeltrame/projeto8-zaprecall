import Flashcards from './Flashcards';
import Footer from './Footer';
import logo from '../assets/images/logo.png';

export default function GamePage() {

	return (
		<section className='game-page'>
			<header>
        <img src={logo} alt="Logo ZapRecall" />
        <h1>ZapRecall</h1>
      </header>
			<Flashcards />
			<Footer />
		</section>
	);
}
