/** Import React */
import * as ReactDOM from 'react-dom';
import * as React from 'react';

/** Import Test Enviroment */
import { shallow } from 'enzyme';
import 'jest-enzyme';

import { MemoryRouter } from 'react-router-dom';

/** Import Tested Component */
import App from './App';

const classUnderTest = App;

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<MemoryRouter><App /></MemoryRouter>, div);
});

describe('render', () => {

	it('should render with props', () => {
		// preparation
		const comp = new classUnderTest();
		
		// execution
		const html = shallow(comp.render());
		
		// testing
		expect(html).toContainReact(<img src="logo.svg" className="App-logo" alt="logo" />);
	});
});