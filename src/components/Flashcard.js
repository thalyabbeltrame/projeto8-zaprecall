import { useState } from 'react';
import { IoPlayOutline } from 'react-icons/io5';
import { TiArrowLoop } from 'react-icons/ti';
import IconAnswer from './IconAnswer';

export default function Flashcard({ question, answer, numQuestion, answersList, setAnswersList }) {
	const [cardSide, setCardSide] = useState('front-card');
	const [questionState, setQuestionState] = useState('');

	const buttons = [
		{ color: 'red', content: 'Não lembrei' },
		{ color: 'yellow', content: 'Quase não lembrei' },
		{ color: 'green', content: 'Zap!' },
	];

	const frontOfCard = (
		<div className='front-card'>
			<h2>{`Pergunta ${numQuestion}`}</h2>
			<IoPlayOutline className='icon' onClick={() => setCardSide('card-question')} />
		</div>
	);

	const cardQuestion = (
		<div className='card-question'>
			<h2>{question}</h2>
			<TiArrowLoop className='icon' onClick={() => setCardSide('card-answer')} />
		</div>
	);

	const cardAnswer = (
		<div className='card-answer'>
			<h2>{answer}</h2>
			<div className='buttons'>
				{buttons.map((button, index) => (
					<button key={index} className={`btn-${button.color}`} onClick={() => showCardResult(button.color)}>
						{button.content}
					</button>
				))}
			</div>
		</div>
	);

	const frontOfAnsweredCard = (
		<div className={`front-answered-card ${questionState}`}>
			<h2>{`Pergunta ${numQuestion}`}</h2>
			<IconAnswer buttonType={questionState} />
		</div>
	);

	function showCardResult(color) {
		setCardSide('front-answered-card');
		setAnswersList([...answersList, color]);
		setQuestionState(color);
	}

	function renderCardSide() {
		let side = '';
		switch (cardSide) {
			case 'front-card':
				side = frontOfCard;
				break;
			case 'card-question':
				side = cardQuestion;
				break;
			case 'card-answer':
				side = cardAnswer;
				break;
			case 'front-answered-card':
				side = frontOfAnsweredCard;
				break;
			default:
				break;
		}
		return side;
	}

	return renderCardSide();
}
