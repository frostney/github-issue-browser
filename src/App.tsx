import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { BaseStyles } from "@primer/components";

import { Browser, Intro, Issue } from "./pages";

const App = () => {
  return (
    <BaseStyles>
      <Router>
        <Switch>
          <Route exact path="/">
            <Intro />
          </Route>
          <Route path="/:owner/:repo">
            <Browser />
          </Route>
          <Route path="/:owner/:repo/issue/:id">
            <Issue />
          </Route>
        </Switch>
      </Router>
    </BaseStyles>
  );
};

export default App;
