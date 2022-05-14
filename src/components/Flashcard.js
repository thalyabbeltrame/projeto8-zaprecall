import { IoPlayOutline } from 'react-icons/io5';

export default function Flashcard(props) {
	return (
		<div className='flashcard'>
			<h2>{`Pergunta ${props.nQuestion}`}</h2>
			<IoPlayOutline className='icon-front'/>
		</div>
	);
}
