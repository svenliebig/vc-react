import * as React from 'react';
import './App.css';

/** Layout Components */
import { Container, Row, Col } from 'reactstrap';

import { Button } from 'reactstrap';
import { Alert, UncontrolledAlert } from 'reactstrap';

const logo = require('./logo.svg');

class App extends React.Component {
	render() {
		return (
			<div className="App">
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
				</Container>;
			</div>
		);
	}
}

export default App;
