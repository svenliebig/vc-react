import * as React from 'react';
// import './Card.css';

import Checkbox from '../../components/checkbox/checkbox';
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
					<Checkbox label="label 1" />
					<Checkbox label="1" shape="circle" />
					<Checkbox label="Dies ist ein Label" initialValue />
				</div>
			</Dashboard>
		);
	}
}

export default Page;