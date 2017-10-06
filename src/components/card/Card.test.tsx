/** Import React */
import * as ReactDOM from 'react-dom';
import * as React from 'react';

/** Import Test Enviroment */
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import 'jest-enzyme';

/** Import Tested Component */
import { CardHeader, CardText, CardTitle } from 'reactstrap';
import Card from './Card';

const classUnderTest = Card;

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Card />, div);
});

describe('initial attributes', () => {
	it('background color is dark', () => {
		const card = new classUnderTest({});
		expect(card.state.bgColor).toEqual('dark');
	});

	it('text color is white', () => {
		const card = new classUnderTest({});
		expect(card.state.textColor).toEqual('white');
	});

	it('should have empty header', () => {
		const card = new classUnderTest({});
		expect(card.props.header).toEqual(undefined);
	});

	it('should have empty text', () => {
		const card = new classUnderTest({});
		expect(card.props.text).toEqual(undefined);
	});

	it('should have empty title', () => {
		const card = new classUnderTest({});
		expect(card.props.title).toEqual(undefined);
	});
});

describe('set attributes', () => {
	it('should have header text', () => {
		const card = new classUnderTest({ header: 'header-text' });
		expect(card.props.header).toEqual('header-text');
	});

	it('should have title text', () => {
		const card = new classUnderTest({ title: 'title-text' });
		expect(card.props.title).toEqual('title-text');
	});

	it('should have text', () => {
		const card = new classUnderTest({ text: 'text' });
		expect(card.props.text).toEqual('text');
	});

	it('should have background color primary', () => {
		const card = new classUnderTest({ bgColor: 'primary' });
		expect(card.state.bgColor).toEqual('primary');
	});

	it('should have background color black', () => {
		const card = new classUnderTest({ textColor: 'black' });
		expect(card.state.textColor).toEqual('black');
	});
});

describe('render', () => {

	it('should render and show title', () => {
		// preparation
		const comp = new classUnderTest({ header: 'header-text' });

		// execution
		const html = shallow(comp.render());

		// testing
		expect(html.contains(<CardHeader>header-text</CardHeader>)).toEqual(true);
	});

	it('should render and show text', () => {
		// preparation
		const comp = new classUnderTest({ text: 'text' });

		// execution
		const html = shallow(comp.render());

		// testing
		expect(html.contains(<CardText>text</CardText>)).toEqual(true);
	});

	it('should render and show title', () => {
		// preparation
		const comp = new classUnderTest({ title: 'title' });

		// execution
		const html = shallow(comp.render());

		// testing
		expect(html).toContainReact(<CardTitle>title</CardTitle>);
	});
});
