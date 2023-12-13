import './Button.css';


function Button({text}) {
	console.log('Button');
	return (
		<button className='button accent'>{text}</button>
	);
}

export default Button;