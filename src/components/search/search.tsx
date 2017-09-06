/** Import React */
import * as React from 'react';

/** Stylesheet Imports */
import './search.css';

/** Bootstrap Components */
import { Input } from 'reactstrap';

interface Props {
	children?: React.ReactNode;
}

interface State {
}

class Search extends React.Component<Props> {
	public state: State;
	public placeholder: string = 'Suche...';

	constructor(public props: Props) {
		super(props);
		this.state = {
		};
	}

	render() {
		return (
			<div>
				<Input placeholder={ this.placeholder } />
			</div>
		);
	}
}

export default Search;