import './JournalItem.css';

function JournalItem({ title, date, text }) {
	const formatedDate = date.toString();

	return (
		<>
			<h2 className="journal-item__header">{title}</h2>
			<h2 className="journal-item__body">
				<div className="journal-item__date">{formatedDate}</div>
				<div className="journal-item__text">{text}</div>
			</h2>
		</>
	);
}

export default JournalItem;