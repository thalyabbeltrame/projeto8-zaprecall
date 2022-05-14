import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import GamePage from './GamePage';
import '../assets/styles/reset.css';
import '../assets/styles/style.css';

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='' element={<HomePage />} />
				<Route path='/game-page' element={<GamePage />} />
			</Routes>
		</BrowserRouter>
	);
}
