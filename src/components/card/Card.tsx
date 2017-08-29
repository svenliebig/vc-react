import * as React from 'react';
import './Card.css';

/** Layout Components */
import { CardText, CardHeader, CardTitle } from 'reactstrap';

interface Props {
	/**
	 * Gibt an..
	 * 
	 * @type {string}
	 * @memberof Props
	 */
	header?: string;
	textColor?: string;
	bgColor?: string;
	title?: string;
	text?: string;
}

/**
 * asdf
 * 
 * @class Card
 * @extends {React.Component<Props>}
 */
class Card extends React.Component<Props> {
	state: Props;

	constructor(public props: Props) {
		super(props);

		this.state = {
			header: props.header ? props.header : '',
			textColor: props.textColor ? props.textColor : 'white',
			bgColor: props.bgColor ? props.bgColor : 'dark',
			title: props.title ? props.title : '',
			text: props.text ? props.text : ''
		};
	}

	render() {
		return (
			<div className={ 'card text-' + this.state.textColor + ' bg-' + this.state.bgColor + ' mb-3' }>
				<CardHeader>{ this.state.header }</CardHeader>
				<div className="card-body">
					<CardTitle>{ this.state.title }</CardTitle>
					<CardText>{ this.state.text }</CardText>
				</div>
			</div>
		);
	}
}

export default Card;