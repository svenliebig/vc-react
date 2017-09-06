/** Import React */
import * as React from 'react';

import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';

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

	private searchStringObs: Subject<string>;

	private INPUT_DANGER = 'input-danger';
	private INPUT_PROGESS = 'input-progress';
	
	constructor(public props: Props) {
		super(props);
		
		this.onChange = this.onChange.bind(this);
		this.method   = this.method.bind(this);
		
		this.searchStringObs = new Subject<string>();
		this.searchStringObs.debounceTime(500).subscribe(this.method);

		this.state = {
			inputClass: ''
		};
	}

	method(val: string): void {
		this.setState(() => ({
			inputClass: this.INPUT_DANGER
		}));
	}

	onChange(evt: React.ChangeEvent<HTMLInputElement>): void {
		this.setState(() => ({
			inputClass: this.INPUT_PROGESS
		}));
		this.searchStringObs.next(evt.target.value);
	}

	render() {
		return (
			<div className={ this.props.className }>
				<input 
					onChange={ this.onChange } 
					type="text" 
					className={ 'form-control ' + this.state.inputClass } 
					placeholder={ this.placeholder }
				/>
			</div>
		);
	}
}

export default Search;