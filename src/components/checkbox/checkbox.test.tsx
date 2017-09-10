/** Import React */
import * as ReactDOM from 'react-dom';
import * as React from 'react';

/** Import Test Enviroment */
import { mount } from 'enzyme';
import 'jest-enzyme';

/** Import Tested Component */
import Checkbox from './checkbox';

const classUnderTest = Checkbox;

describe('checkbox component', () => {

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Checkbox />, div);
});

describe('render', () => {

	it('should render with props', () => {
		// preparation
		const html = mount(<Checkbox />);

		// testing
		expect(html.find('.checkbox').exists()).toBe(true);
	});

	it('should render with initial properties', () => {
		// preparation
		const comp = new classUnderTest({ });
		
		// testing
		expect(comp.state.selected).toBe(false);
		expect(comp.state.shape).toBe('rect');
	});

	it('should render with property selected true', () => {
		// preparation
		const comp = new classUnderTest({ initialValue: true });
		
		// testing
		expect(comp.state.selected).toBe(true);
	});

	it('should have selected property true after onclick', () => {
		// preparation
		const html = mount(<Checkbox />);
		html.find('.checkbox').simulate('click');

		// testing
		expect(html.find('.checkbox')).toHaveClassName('selected');
	});

	it('should have selected property false after two clicks', () => {
		// preparation
		const html = mount(<Checkbox />);
		html.find('.checkbox').simulate('click');
		html.find('.checkbox').simulate('click');

		// testing
		expect(html.find('.checkbox').hasClass('selected')).toBe(false);
	});

	it('should call the given onclick method after click', () => {
		// preparation
		let result = false;
		const testMethod = ((value: boolean) => {
			result = value;
		});
		const html = mount(<Checkbox binding={ testMethod } />);
		html.find('.checkbox').simulate('click');

		// testing
		expect(result).toBe(true);
	});
});

});