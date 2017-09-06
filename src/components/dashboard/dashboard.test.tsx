/** Import React */
import * as ReactDOM from 'react-dom';
import * as React from 'react';

/** Import Test Enviroment */
import { shallow } from 'enzyme';
import 'jest-enzyme';

/** Import Tested Component */
import Dashboard from './dashboard';
import { NavLink, MemoryRouter } from 'react-router-dom';

const classUnderTest = Dashboard;

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<MemoryRouter><Dashboard /></MemoryRouter>, div);
});

describe('render', () => {

	it('should have a home link', () => {
		// preparation
		const comp = new classUnderTest({ });
		
		// execution
		const html = shallow(comp.render());
		
		// testing
		expect(html).toContainReact(<NavLink exact className="nav-link" to="/">Home</NavLink>);
	});
});