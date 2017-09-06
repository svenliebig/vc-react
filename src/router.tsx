/** React Imports */
import * as React from 'react';
// import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

/** View Imports */
import App from './views/app/App';
import Page from './views/page/page';
import Error404 from './views/error/404/Error404';

// Should i create a class for this?
interface RouteInterface {
	path: string;
	component: React.ComponentClass;
	key: string;
}

// Add routes here
const routesArray: Array<RouteInterface> = [
	{ path: '/', 		component: App, 	key: '1' },
	{ path: '/page', 	component: Page, 	key: '2' }
];

/**
 * Iterate through the routesArray and generate a Route Element for
 * each entry of {@link RouteInterface}.
 */
const routesElements = routesArray.map((route: RouteInterface) =>
	<Route exact key={ route.key } path={ route.path } component={ route.component } /> 
);

/**
 * Generates routes, last route is a 404 notfound.
 */
const Routes = () => (
	<BrowserRouter>
		<Switch>
			{ routesElements }
			<Route component={ Error404 }/>
		</Switch>
	</BrowserRouter>
);

export default Routes;