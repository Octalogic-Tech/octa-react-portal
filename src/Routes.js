import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import PortfolioContainer from './containers/PortfolioContainer';
import Landing from './pages/Landing';
import NotFound from './pages/NotFound';

const Routes = ({toggleTheme,currentTheme}) => (
  <Router>
    <Switch>
        <Route path="/portfolio/:key">
            <PortfolioContainer toggleTheme = {toggleTheme} currentTheme={currentTheme} />
        </Route>
        <Route exact path="/" component={Landing} />
        <Route component={NotFound} />
    </Switch>
  </Router>
);

export default Routes;
