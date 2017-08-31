/** React Imports */
import * as React from 'react'; 

/** Bootstrap Imports */
import { Container, Row, Col } from 'reactstrap';
import { Button } from 'reactstrap';
import { Alert, UncontrolledAlert } from 'reactstrap';

/** Component Imports */
import Card from '../../components/card/Card';
import Dashboard from '../../components/dashboard/dashboard';

/** Stylesheet Imports */
import './App.css';

const logo = require('./logo.svg');

interface Appstate {
}

class App extends React.Component {
	state: Appstate;
	constructor() {
		super();
	}

	render() {
		return (
			<Dashboard>
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
							<Card header="test" text="innerText" title="title" />
						</Col>
						<Col>
							<Card header="test" text="innerText" title="title" bgColor="primary" />
						</Col>
						<Col>
							<Card header="test" text="innerText" title="title" />
						</Col>
						<Col>
							<Card header="test" text="innerText" title="title" bgColor="success" />
						</Col>
						<Col>
							<Card header="test" text="innerText" title="title" />
						</Col>
					</Row>
				</Container>
			</Dashboard>
		);
	}
}

export default App;
