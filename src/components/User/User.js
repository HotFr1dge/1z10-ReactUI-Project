import React from 'react';
import './User.css';
import { Step } from '../Step/Step';

export class User extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			playerNumebr: 8,
			playerNick: 'Mateusz',
			playerChances: 3,
		}
	}

	createChances() {
		if (this.state?.playerChances > 3 || this.state?.playerChances < 0) return null;
		return Array(this.state.playerChances).fill(<div className='Chance'></div>);
	}

	render() {
		return (
			<div className='UserInfo'>
				<div className='UserNumber'>{this.state?.playerNumebr}</div>
				<div className='UserNick'>{this.state?.playerNick}</div>
				<div className='UserChance'>{this.createChances()}</div>
				<Step />
			</div>
		)
	}
}