/** Import React */
import * as ReactDOM from 'react-dom';
import * as React from 'react';

/** Import Test Enviroment */
import { shallow, CommonWrapper, mount, ReactWrapper } from 'enzyme';
import 'jest-enzyme';

/** Import Tested Component */
import Search from './search';

/** Bootstrap Components */
import { Input } from 'reactstrap';

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
		html = shallow(comp.render());

		// testing
		expect(html).toContainReact(<Input placeholder={ comp.placeholder } />);
	});
});