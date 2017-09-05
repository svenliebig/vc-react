/** Import React */
import * as ReactDOM from 'react-dom';
import * as React from 'react';

/** Import Test Enviroment */
import { shallow } from 'enzyme';
import 'jest-enzyme';

/** Import Tested Component */
import Dashboard from './dashboard';
import { BrowserRouter as Router, Link } from 'react-router-dom';  

const classUnderTest = Dashboard;

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Dashboard />, div);
});

describe('render', () => {

	it('should render with props', () => {
		// preparation
		const comp = new classUnderTest({ });
		
		// execution
		const html = shallow(comp.render());
		
		// testing
		expect(html).toContainReact(<Router><Link className="nav-link" to="/">Home</Link></Router>);
	});
});