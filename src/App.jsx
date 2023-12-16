import { useState } from 'react';
import './App.css';

import Header from './components/Header/Header';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalForm from './components/JournalForm/JournalForm';

import JournalList from './components/JournalList/JournalList';
import Body from './layouts/Body/Body';
import LeftPanel from './layouts/LeftPanel/LeftPanel';

const INITIAL_DATA = [
	{
		title: 'Подготовка к обновлению курсов',
		date: new Date().toLocaleDateString(),
		text: 'Сегодня провёл весь день за...',
		id: 1
	},
	{
		title: 'Поход в годы',
		date: new Date(2025, 5, 25).toLocaleDateString(),
		text: 'Думал, что очень много време...',
		id: 2
	}
];

function App() {
	
	const [items, setItems] = useState(INITIAL_DATA);

	const addItem = item => {
		setItems(oldItems => [...oldItems, {
			text: item.text,
			title: item.title,
			date: new Date(item.date).toLocaleDateString(),
			id: Math.max(...oldItems.map(i => i.id)) + 1
		}]);
	};

	// const deleteItem = (id) => {
	// 	setItems([...items.filter(i => i.id !== id)]);
	// };

	
	return (	
		<div className='app'>
			<LeftPanel>
				<Header/>
				<JournalAddButton/>
				<JournalList items = {items}>				 				
				</JournalList>
			</LeftPanel>
			<Body>
				<JournalForm addItem = {addItem} />
			</Body>
		</div>
	);
}

export default App;
