import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Flashcards from './Flashcards';
import '../assets/styles/reset.css';
import '../assets/styles/style.css';

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/home-page' element={<HomePage />} />
				<Route path='/flashcards' element={<Flashcards />} />
			</Routes>
		</BrowserRouter>
	);
}
