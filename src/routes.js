import React from 'react';
import {Route, Switch,} from 'react-router-dom';

import App from './components/App';
import Croquis from './components/Croquis';

const AppRoutes = () => 

       <Switch>
              <Route exact path="/" component={App}/>
              <Route exact path="/Croquis" component={Croquis}/>
       </Switch>
export default AppRoutes;