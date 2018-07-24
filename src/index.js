import React from 'react';
import ReactDom from 'react-dom'; 
import App from './containers/App';
import './index.css';
import './containers/App.css';
import registerServiceWorker from './registerServiceWorker'; 
import 'tachyons'; 


ReactDom.render(<App/>,
	document.getElementById('root'));
registerServiceWorker();