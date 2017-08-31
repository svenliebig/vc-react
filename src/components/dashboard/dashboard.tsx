import * as React from 'react';
import './dashboard.css';

interface Props {
	children?: React.ReactNode;
}

/**
 * asdf
 * 
 * @class Card
 * @extends {React.Component<Props>}
 */
class Dashboard extends React.Component<Props> {
	state: Props;

	constructor(public props: Props) {
		super(props);

		this.state = {
		};
	}

	render() {
		return (
			<div>
				{ this.props.children }
			</div>
		);
	}
}

export default Dashboard;