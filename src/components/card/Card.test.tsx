import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Card from './Card';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Card />, div);
});

describe('initial attributes', () => {
	it('background color is dark', () => {
		const card = new Card({});
		expect(card.state.bgColor).toEqual('dark');
	});

	it('text color is white', () => {
		const card = new Card({});
		expect(card.state.textColor).toEqual('white');
	});

	it('should have empty header', () => {
		const card = new Card({});
		expect(card.props.header).toEqual(undefined);
	});

	it('should have empty text', () => {
		const card = new Card({});
		expect(card.props.text).toEqual(undefined);
	});

	it('should have empty title', () => {
		const card = new Card({});
		expect(card.props.title).toEqual(undefined);
	});
});

describe('set attributes', () => {
	it('should have header text', () => {
		const card = new Card({ header: 'header-text' });
		expect(card.props.header).toEqual('header-text');
	});

	it('should have title text', () => {
		const card = new Card({ title: 'title-text' });
		expect(card.props.title).toEqual('title-text');
	});

	it('should have text', () => {
		const card = new Card({ text: 'text' });
		expect(card.props.text).toEqual('text');
	});

	it('should have background color primary', () => {
		const card = new Card({ bgColor: 'primary' });
		expect(card.state.bgColor).toEqual('primary');
	});

	it('should have background color black', () => {
		const card = new Card({ textColor: 'black' });
		expect(card.state.textColor).toEqual('black');
	});
});