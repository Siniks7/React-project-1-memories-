
// import styles from './JournalForm.module.css';
import { useState } from 'react';
import Button from '../Button/Button';
// import Input from '../Input/Input';

function JournalForm({addItem}) {
	
	const [formValidState, setFormValidState] = useState({
		title: true,
		text: true,
		date: true
	});

	const addJournalItem = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const props = Object.fromEntries(formData);	
		let isFormValid = true;
		if (!props.title?.trim().length) {
			setFormValidState(state => ({...state, title: false}));
			
		} else {
			setFormValidState(state => ({...state, title: true}));				
		}
		if (!props.text?.trim().length) {
			setFormValidState(state => ({...state, text: false}));		
		} else {
			setFormValidState(state => ({...state, text: true}));
		}
		if (!props.date) {
			setFormValidState(state => ({...state, date: false}));			
		} else {
			setFormValidState(state => ({...state, date: true}));
		}

		if (!isFormValid) {
			return;
		}

		addItem(props);
	};


	return (
		<form className='journal-form' onSubmit={addJournalItem}>			
			<input name="title" type='text' style = {{border: formValidState.title ? undefined: '1px solid red' }} />				
			<input type='date' name='date' style = {{border: formValidState.date ? undefined: '1px solid red' }} />				
			<input type='text' id="tag" name='tag' />			
			<textarea name='text' id='' cols='30' style = {{border: formValidState.text ? undefined: '1px solid red' }} ></textarea>
			<Button text='Сохранить'></Button>
		</form>
	);
}

export default JournalForm;

