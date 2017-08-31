/** React Imports */
import * as React from 'react';
// import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/** View Imports */
import App from './views/app/App';
import Error404 from './views/error/404/Error404';

const Routes = () => (
	<Router>
		<Switch>
			<Route exact path="/" component={ App }/>
			<Route component={ Error404 }/>
		</Switch>
	</Router>
);

export default Routes;