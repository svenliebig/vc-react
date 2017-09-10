/** Import React */
import * as React from 'react';

/** Stylesheet Imports */
import './checkbox.css';

interface Props {
	children?: React.ReactNode;
	initialValue?: boolean;
	shape?: 'circle' | 'rect';
	onclick?: (value: boolean) => void;
	label?: string;
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
				<div className="checkbox-label" onClick={ this.onClick }>
					{ this.props.label }
				</div>
				<div className={ this.getCheckboxClassName() } onClick={ this.onClick }>
					<span className={ this.getCheckClassName() } />
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
		let className = 'checkbox';
		className += (this.state.selected ? ' selected' : '');
		className += (this.state.shape ? ` ${this.state.shape}` : '');
		return className;
	}

	/**
	 * Returns the classname of the check icon in the checkbox.
	 * 
	 * @private
	 * @returns {(string | undefined)} 
	 * @memberof Checkbox
	 */
	private getCheckClassName(): string | undefined {
		let className = 'fa fa-check animated';
		className += (this.state.selected ? ' zoomIn' : '');
		return className;
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