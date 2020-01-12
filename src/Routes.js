import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import PortfolioContainer from "./containers/PortfolioContainer";
import Landing from "./pages/Landing";
import NotFound from "./pages/NotFound";
import Loading from "./pages/Loading";
import StyleGuide from "./pages/StyleGuide";
// import Brand from "./pages/Brand";

const Routes = ({ analytics, toggleTheme, currentTheme }) => (
  <Router>
    <Switch>
      <Redirect from="/portfolio/:key" to="/:key" />

      <Route exact analytics={analytics} path="/" component={Landing} />
      <Route exact path="/style-guide" component={StyleGuide} />
      <Route exact path="/testPage" component={Loading} />
      <Route path="/:key">
        <PortfolioContainer
          analytics={analytics}
          toggleTheme={toggleTheme}
          currentTheme={currentTheme}
        />
      </Route>
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default Routes;
