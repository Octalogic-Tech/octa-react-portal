import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Portfolio from './pages/Portfolio';
import Landing from './pages/Landing';
import NotFound from './pages/NotFound';

const Routes = ({toggleTheme}) => (
  <Router>
    <Switch>
        <Route path="/portfolio/:key">
            <Portfolio toggleTheme = {toggleTheme} />
        </Route>
        <Route exact path="/" component={Landing} />
        <Route component={NotFound} />
    </Switch>
  </Router>
);

export default Routes;
