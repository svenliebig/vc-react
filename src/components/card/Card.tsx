import * as React from 'react';
import './Card.css';

/** Layout Components */
import { CardText, CardHeader, CardTitle } from 'reactstrap';

interface CardState {

}

class Card extends React.Component {
	state: CardState;

	constructor() {
		super();

		this.state = {
		};
	}

	render() {
		return (
			<div className="card text-white bg-primary mb-3">
				<CardHeader>header</CardHeader>
				<div className="card-body">
					<CardTitle>title</CardTitle>
					<CardText>text</CardText>
				</div>
			</div>
		);
	}
}

export default Card;