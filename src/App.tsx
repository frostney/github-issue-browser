import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { BaseStyles } from "@primer/components";
import { ApolloProvider } from "@apollo/client";

import client from "./client";
import { Browser, Intro, Issue } from "./pages";

const App = () => (
  <ApolloProvider client={client}>
    <BaseStyles>
      <Router>
        <Switch>
          <Route exact path="/">
            <Intro />
          </Route>
          <Route exact path="/:owner/:name">
            <Browser />
          </Route>
          <Route path="/:owner/:name/:id">
            <Issue />
          </Route>
        </Switch>
      </Router>
    </BaseStyles>
  </ApolloProvider>
);

export default App;
