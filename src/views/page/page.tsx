import * as React from 'react';
// import './Card.css';

import Checkbox from '../../components/checkbox/checkbox';
import Dashboard from '../../components/dashboard/dashboard';

interface Props {
}

interface State {
	checkboxValue1: boolean;
	checkboxValue2: boolean;
	checkboxValue3: boolean;
}

/**
 * asdf
 * 
 * @class Card
 * @extends {React.Component<Props>}
 */
class Page extends React.Component<Props> {
	state: State;

	constructor(public props: Props) {
		super(props);

		this.state = {
			checkboxValue1: false,
			checkboxValue2: false,
			checkboxValue3: false
		};
	}

	render() {
		return (
			<Dashboard>
				<div>
					<Checkbox label="label 1" binding={ (val) => this.setState(() => ({ checkboxValue1: val })) } />
					<Checkbox label="1" shape="circle" />
					<Checkbox label="Dies ist ein Label" initialValue />
				</div>
				<div>
					Label 1: { this.state.checkboxValue1 ? 'true' : 'false' } <br />
					Label 2: { this.state.checkboxValue2 ? 'true' : 'false' } <br />
					Label 3: { this.state.checkboxValue3 ? 'true' : 'false' }
				</div>
			</Dashboard>
		);
	}
}

export default Page;