/** React Imports */
import * as React from 'react';
// import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

/** View Imports */
import App from './views/app/App';

const Routes = () => (
	<Router>
		<div>
			<Route exact path="/" component={ App }/>
			<Route path="/*" component={ App }/>
		</div>
	</Router>
);

export default Routes;