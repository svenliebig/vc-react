import * as React from 'react';
import './App.css';

/** Layout Components */
import { Container, Row, Col } from 'reactstrap';

import { Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Collapse } from 'reactstrap';
import { Card, CardText, CardHeader, CardTitle } from 'reactstrap';

import { Button } from 'reactstrap';
import { Alert, UncontrolledAlert } from 'reactstrap';

const logo = require('./logo.svg');

interface Appstate {
	isOpen: boolean;
}

class App extends React.Component {
	state: Appstate;
	constructor() {
		super();

		this.toggleNavbar = this.toggleNavbar.bind(this);
		this.state = {
			isOpen: false
		};
	}

	toggleNavbar() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	render() {
		return (
			<div className="App">
				<Navbar color="dark" className="navbar-dark navbar-expand-sm" toggleable fixed="top">
				<NavbarToggler right onClick={this.toggleNavbar}/>
				<NavbarBrand href="/">reactstrap</NavbarBrand>
				<Collapse isOpen={this.state.isOpen} navbar>
					<Nav className="ml-auto" navbar>
					<NavItem>
						<NavLink href="https://reactstrap.github.io/components/">Components</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
					</NavItem>
					</Nav>
				</Collapse>
				</Navbar>
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h2>Welcome to React</h2>
				</div>
				<p className="App-intro">
					To get started, edit <code>src/App.tsx</code> and save to reload.
				</p>
				<Button color="danger">danger!</Button>
				<Button color="info">info</Button>
				<Button color="success">success</Button>
				<Button color="warning">warning</Button>
				<Alert color="info">
					no strong text <strong>strong text</strong> no strong text again
				</Alert>
				<UncontrolledAlert color="primary">i am dismissable</UncontrolledAlert>
				<Container fluid>
					<Row>
						<Col>
							<UncontrolledAlert color="info">info 1</UncontrolledAlert>
						</Col>
						<Col>
							<UncontrolledAlert color="info">info 2</UncontrolledAlert>
						</Col>
						<Col>
							<UncontrolledAlert color="info">info 3</UncontrolledAlert>
						</Col>
						<Col>
							<UncontrolledAlert color="info">info 4</UncontrolledAlert>
						</Col>
					</Row>
					<Row>
						<Col>
							<Card className="text-white bg-primary mb-3">
								<CardHeader>header</CardHeader>
								<div className="card-body">
									<CardTitle>title</CardTitle>
									<CardText>text</CardText>
								</div>
							</Card>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default App;
