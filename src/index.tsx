import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Routes from './router';
import registerServiceWorker from './registerServiceWorker';

/** Stylesheet Imports */
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import 'animate.css/animate.min.css';

ReactDOM.render(
	<Routes />,
	document.getElementById('root') as HTMLElement
);
registerServiceWorker();
