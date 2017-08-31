import * as React from 'react';
// import './Card.css';

import Dashboard from '../../components/dashboard/dashboard';

interface Props {
}

/**
 * asdf
 * 
 * @class Card
 * @extends {React.Component<Props>}
 */
class Page extends React.Component<Props> {
	state: Props;

	constructor(public props: Props) {
		super(props);

		this.state = {
		};
	}

	render() {
		return (
			<Dashboard>
				<div>
					test
				</div>
			</Dashboard>
		);
	}
}

export default Page;