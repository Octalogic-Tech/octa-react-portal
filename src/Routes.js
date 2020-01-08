import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PortfolioContainer from "./containers/PortfolioContainer";
import Landing from "./pages/Landing";
import NotFound from "./pages/NotFound";
import ServerError from "./pages/ServerError";
import Loading from "./pages/Loading";

const Routes = ({ analytics, toggleTheme, currentTheme }) => (
  <Router>
    <Switch>
      <Route path="/portfolio/:key">
        <PortfolioContainer
          analytics={analytics}
          toggleTheme={toggleTheme}
          currentTheme={currentTheme}
        />
      </Route>
      <Route exact analytics={analytics} path="/" component={Landing} />
      <Route exact path="/testPage" component={Loading} />
      <Route exact path="/server_error" component={ServerError} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default Routes;
