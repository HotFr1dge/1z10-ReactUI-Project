import React from 'react';
import './UsersList.css';

export class UsersList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			playerList: [{ number: 2, nick: 'Mateusz'}, { number: 5, nick: 'Adam'}, { number: 1, nick: 'Tomasz'}, { number: 4, nick: 'Jan'}, { number: 3, nick: 'Maks' }],
		}
	}

	sortPlayerList() {
		return this.state.playerList.sort((a, b) =>  a.number - b.number );
	}

	createPlayerListElements() {
		const playersArr = this.sortPlayerList();
		return playersArr.map(player => <li>{player.nick}</li>);
	}

	render() {
		return (
			<div className='UsersList'>
				<ol>
					{this.createPlayerListElements()}
				</ol>
			</div>
		)
	}
}