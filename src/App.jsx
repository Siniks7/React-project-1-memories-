import './App.css';
import CardButton from './components/CardButton/CardButton';
import Header from './components/Header/Header';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalForm from './components/JournalForm/JournalForm';
import JournalItem from './components/JournalItem/JournalItem';
import JournalList from './components/JournalList/JournalList';
import Body from './layouts/Body/Body';
import LeftPanel from './layouts/LeftPanel/LeftPanel';

function App() {
	
	const data = [
		{
			title: 'Подготовка к обновлению курсов',
			date: new Date().toLocaleDateString(),
			text: 'Сегодня провёл весь день за...'
		},
		{
			title: 'Поход в годы',
			date: new Date(2025, 5, 25).toLocaleDateString(),
			text: 'Думал, что очень много време...'
		}
	];
	return (	
		<div className='app'>
			<LeftPanel>
				<Header/>
				<JournalAddButton/>
				<JournalList>
					<CardButton>
						<JournalItem  
							title = {data[0].title}
							date = {data[0].date}
							text = {data[0].text}
						/>
					</CardButton>
					<CardButton>
						<JournalItem  
							title = {data[1].title}
							date = {data[1].date}
							text = {data[1].text}
						/>
					</CardButton>
				</JournalList>
			</LeftPanel>
			<Body>
				<JournalForm/>
			</Body>
		</div>
	);
}

export default App;
