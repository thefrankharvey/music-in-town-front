import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'
import Signup from './Signup'

ReactDOM.render(<BrowserRouter><Signup/></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
