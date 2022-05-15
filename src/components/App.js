import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import HomePage from './HomePage';
import GamePage from './GamePage';
import '../assets/styles/reset.css';
import '../assets/styles/style.css';

export default function App() {
	const cardsReact = [
		{
			question: 'O que é JSX?',
			answer: 'Uma extensão de linguagem do JavaScript',
		},
		{
			question: 'O React é __',
			answer: 'Uma biblioteca JavaScript para construção de interfaces',
		},
		{
			question: 'Componentes devem iniciar com __',
			answer: 'Letra maiúscula',
		},
		{
			question: 'Podemos colocar __ dentro do JSX',
			answer: 'Expressões',
		},
		{
			question: 'O ReactDOM nos ajuda __',
			answer: 'Interagindo com a DOM para colocar componentes React na mesma',
		},
		{
			question: 'Usamos o npm para __',
			answer: 'Gerenciar os pacotes necessários e suas dependências',
		},
		{
			question: 'Usamos props para __',
			answer: 'Passar diferentes informações para componentes',
		},
		{
			question: 'Usamos estado (state) para __',
			answer: 'Dizer para o React quais informações devem renderizar a tela novamente',
		},
	];

	const [flashcards, setFlashcards] = useState(cardsReact);
	const [goal, setGoal] = useState(0);
	const comparator = () => Math.random() - 0.5;

	function startGame() {
		setFlashcards(flashcards.sort(comparator));
	}

	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={
						<HomePage
							startGame={startGame}
							numFlashcards={flashcards.length}
							goal={goal}
							setGoal={setGoal}
						/>
					}
				/>
				<Route path='/game-page' element={<GamePage flashcards={flashcards} goal={goal} setGoal={setGoal} />} />
			</Routes>
		</BrowserRouter>
	);
}
