import { useState } from 'react';
import { IoPlayOutline } from 'react-icons/io5';
import { TiArrowLoop } from 'react-icons/ti';
import IconAnswer from './IconAnswer';

export default function Flashcard({
	question,
	answer,
	numQuestion,
	answersArray,
	setAnswersArray,
}) {
	const [cardState, setCardState] = useState('front-card');
	const [questionState, setQuestionState] = useState('');

	function showCardResult(color) {
		setCardState('front-card-answered');
    setAnswersArray([...answersArray, color]);
		setQuestionState(color);
	}

	const frontCard = (
		<div className='front-card'>
			<h2>{`Pergunta ${numQuestion}`}</h2>
			<IoPlayOutline className='icon' onClick={() => setCardState('question-card')} />
		</div>
	);

	const questionCard = (
		<div className='question-card'>
			<h2>{question}</h2>
			<TiArrowLoop className='icon' onClick={() => setCardState('answer-card')} />
		</div>
	);

	const answerCard = (
		<div className='answer-card'>
			<h2>{answer}</h2>
			<div className='buttons'>
				<button className='btn-red' onClick={() => showCardResult('red')}>
					Não lembrei
				</button>
				<button className='btn-yellow' onClick={() => showCardResult('yellow')}>
					Quase não lembrei
				</button>
				<button className='btn-green' onClick={() => showCardResult('green')}>
					Zap!
				</button>
			</div>
		</div>
	);

	const frontCardAnswered = (
		<div className={`front-card-answered ${questionState}`}>
			<h2>{`Pergunta ${numQuestion}`}</h2>
			<IconAnswer buttonType={questionState} />
		</div>
	);

	return cardState === 'front-card'
		? frontCard
		: cardState === 'question-card'
		? questionCard
		: cardState === 'answer-card'
		? answerCard
		: frontCardAnswered;
}
