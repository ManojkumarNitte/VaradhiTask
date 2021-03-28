import React, { FC } from 'react';
import logo from './logo.svg';
import './App.scss';
import BaseRoute from './baseroute/BaseRoute';
import { createBrowserHistory } from 'history'

import { RouteComponentProps } from 'react-router-dom';
import { Route, Switch, Router, HashRouter } from 'react-router-dom';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
 
export const history = createBrowserHistory();

interface Props {

}
const App:FC<Props> =(props)=> {
  return (
    <Router history={history}>
          <Switch>
            <HashRouter>
              <Route path='/' component={BaseRoute} />
            </HashRouter>
          </Switch>
        </Router>
  );
}

export default App;
