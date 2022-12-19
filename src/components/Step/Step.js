import React from 'react';
import './Step.css';

export class Step extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			step: 1,
		}
	}

	render() {
		return (
			<div className="Step">
				Etap {this.state.step}
			</div>
		)
	}
}