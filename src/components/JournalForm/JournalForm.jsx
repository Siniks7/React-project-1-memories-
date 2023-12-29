
import styles from './JournalForm.module.css';
import { useContext, useEffect, useReducer, useRef } from 'react';
import Button from '../Button/Button';
import { INITIAL_STATE, formReducer } from './JournalForm.state';
import Input from '../input/input';
import { UserContext} from '../../context/user.context';
// import Input from '../Input/Input';


function JournalForm({addItem, data}) {
	
	// const [formValidState, setFormValidState] = useState(INITIAL_STATE);
	const { userId } = useContext(UserContext);
	const titleRef = useRef();
	const dateRef = useRef();
	const textRef = useRef();
	const [formValidState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
	const { isValid, isFormReadyToSubmit, values } = formValidState;

	useEffect(() => {
		if (!data) {
			dispatchForm({ type: 'CLEAR' });
			dispatchForm({ type: 'SET_VALUE', payload: { userId }});
		}
		dispatchForm({ type: 'SET_VALUE', payload: { ...data }});
	}, [data, userId]);

	function focusError(isValid) {
		switch(true) {
		case !isValid.title:
			titleRef.current.focus();
			break;
		case !isValid.date:
			dateRef.current.focus();
			break;
		case !isValid.text:
			textRef.current.focus();
			break;
		}
	}
	
	useEffect(() => {
		let timerId;
		if (!isValid.date || !isValid.text || !isValid.title) {
			focusError(isValid);
			timerId = setTimeout(() => {
				dispatchForm({type: 'RESET_VALIDITY'});	
			}, 2000);
		}
		return () =>
			clearTimeout(timerId);
	}, [isValid]);

	useEffect(() => {
		if (isFormReadyToSubmit) {
			addItem(values);
			dispatchForm({type: 'CLEAR'});
		}
	}, [isFormReadyToSubmit, addItem, values]);

	const onChange = (e) => {
		dispatchForm({type: 'SET_VALUE', payload: {[e.target.name]: e.target.value}});
	};

	useEffect(() => {
		dispatchForm({type: 'SET_VALUE', payload: {userId}});
	}, [userId]);

	const addJournalItem = (e) => {
		e.preventDefault();
		// const formData = new FormData(e.target);
		// const props = Object.fromEntries(formData);	
		// dispatchForm({type: 'SET_VALUE', payload: props});
		// let isFormValid = true;
		// if (!props.title?.trim().length) {
		// 	setFormValidState(state => ({...state, title: false}));
		// 	isFormValid = false;
		// } else {
		// 	setFormValidState(state => ({...state, title: true}));				
		// }
		// if (!props.text?.trim().length) {
		// 	setFormValidState(state => ({...state, text: false}));
		// 	isFormValid = false;		
		// } else {
		// 	setFormValidState(state => ({...state, text: true}));
		// }
		// if (!props.date) {
		// 	setFormValidState(state => ({...state, date: false}));
		// 	isFormValid = false;			
		// } else {
		// 	setFormValidState(state => ({...state, date: true}));
		// }
		// if (!isFormValid) {
		// 	return;
		// }
		dispatchForm({type: 'SUBMIT'});
		// addItem(props);
	};


	return (
		
		<form className={styles['journal-form']} onSubmit={addJournalItem}>
			
			<div><Input name="title" ref={titleRef} isValid = {isValid.title} onChange={onChange} value = {values.title} type='text' appearance = 'title'/></div>	
			<div className= {styles['form-row']}>
				<label htmlFor ="date" className={styles['form-label']}>
					<img src="/Calendar.svg" alt="Иконка календаря" />
					<span>Дата</span></label>
				<Input type='date' ref={dateRef} isValid = {isValid.date}  value = {values.date} onChange={onChange} name='date' id='date' appearance = 'text'/>	
			</div>						
			<div className= {styles['form-row']}>
				<label htmlFor ="tag" className={styles['form-label']}>
					<img src="/Catalog.svg" alt="Иконка каталога" />
					<span>Метки</span></label>
				<Input type='text' ref={textRef}  onChange={onChange} value = {values.tag} id="tag" name='tag' appearance = 'text'/>		
			</div>							
			<textarea name='text' id='' onChange={onChange} value = {values.text} cols='30' rows='10' className={`${styles['input']} ${isValid.text ? '' : styles['invalid']}`} ></textarea>
			<Button text='Сохранить' ></Button>		
		</form>	
	);
}

export default JournalForm;

