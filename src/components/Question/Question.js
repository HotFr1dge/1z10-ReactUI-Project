import './Question.css'
import React from 'react';

export class Question extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			question: 'Jakim polceniem w systemie Linux odczytasz adres IP urządzenia?',
		}
	}

	insertQuestion() {
		if (!this.state.question) return null;
		return <div className='Question'>{this.state.question}</div>;
	}

	render() {
		return this.insertQuestion();
	}
}