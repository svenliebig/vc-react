/** Import React */
import * as ReactDOM from 'react-dom';
import * as React from 'react';

/** Import Test Enviroment */
import { shallow } from 'enzyme';
import 'jest-enzyme';

/** Import Tested Component */
import Search from './search';

const classUnderTest = Search;

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Search />, div);
});

describe('render', () => {
	let comp: Search;
	let html;

	beforeAll(() => {
		comp = new classUnderTest({ });
	});

	it('should render an input field with placeholder', () => {
		html = shallow(<Search />);

		// testing
		expect(html.find('input')).toHaveProp('placeholder', comp.placeholder);
	});
	
	it('should render a danger input field with danger class', () => {
		html = shallow(<Search />);
		html.setState({ inputClass: 'input-danger' });

		// testing
		expect(html.find('input')).toHaveClassName('input-danger');
	});
});