import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Routes from './router';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

/** Inluding Bootstrap css */
// import 'jquery/dist/jquery';
// import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
	<Routes />,
	document.getElementById('root') as HTMLElement
);
registerServiceWorker();
