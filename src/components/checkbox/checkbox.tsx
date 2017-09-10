/** Import React */
import * as React from 'react';

/** Stylesheet Imports */
import './checkbox.css';

interface Props {
	children?: React.ReactNode;
	initialValue?: boolean;
	shape?: 'circle' | 'rect';
	onclick?: (value: boolean) => void;
}

interface State {
	selected: boolean;
	shape: 'circle' | 'rect';
}

class Checkbox extends React.Component<Props> {
	public state: State;
	constructor(public props: Props) {
		super(props);

		// Bind Methods
		this.onClick = this.onClick.bind(this);

		const initialValue = (props.initialValue ? props.initialValue : false);
		const shape = (props.shape ? props.shape : 'rect');

		this.state = {
			selected: initialValue,
			shape: shape
		};
	}

	onClick() {
		this.setState(() => ({
			selected: !this.state.selected
		}), this.afterOnClick());
	}

	render() {
		return (
			<div className="checkbox-wrapper">
				<div className={ this.getCheckboxClassName() } onClick={ this.onClick }>
					<span className="" />
				</div>
			</div>
		);
	}

	/**
	 * 
	 * Returns the classname of the Checkbox. Can have the className
	 * 'selected' and always has the className 'checkbox'.
	 * 
	 * @private
	 * @returns {(string | undefined)} 
	 * @memberof Checkbox
	 */
	private getCheckboxClassName(): string | undefined {
		return 'checkbox ' + (this.state.selected ? 'selected' : '');
	}

	/**
	 * Called after Onclick.
	 * 
	 * @private
	 * @returns {((() => void) | undefined)} 
	 * @memberof Checkbox
	 */
	private afterOnClick(): (() => void) | undefined {
		return () => {
			if (this.props.onclick) {
				this.props.onclick(this.state.selected);
			}
		};
	}
}

export default Checkbox;