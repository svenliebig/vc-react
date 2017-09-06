/** Import React */
import * as React from 'react';

/** Stylesheet Imports */
import './search.css';

/** Bootstrap Components */

interface Props {
	className?: string;
	children?: React.ReactNode;
}

interface State {
	inputClass: string;
}

class Search extends React.Component<Props> {
	public state: State;
	public placeholder = 'Suche...';
	public inputClass = 'input-danger';

	constructor(public props: Props) {
		super(props);
		this.state = {
			inputClass: ''
		};
	}

	render() {
		return (
			<div className={ this.props.className }>
				<input type="text" className={ 'form-control ' + this.state.inputClass } placeholder={ this.placeholder } />
			</div>
		);
	}
}

export default Search;