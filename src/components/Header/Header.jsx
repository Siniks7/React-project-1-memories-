
import SelectUser from '../SelectUser/SelectUser';
import './Header.css';

function Header() {

	return (
		<>
			<img className="logo" src="Personal Journal.svg" alt="Logo" />
			<SelectUser></SelectUser>
		</>
	);
}

export default Header;