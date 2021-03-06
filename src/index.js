import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import AppRoutes from './routes'

import './index.css';
// import App from './components/App';


import * as serviceWorker from './serviceWorker';

render(
    <Router>
        <AppRoutes/>
    </Router>
    , document.getElementById('root'));
serviceWorker.unregister();
