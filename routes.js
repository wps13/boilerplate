import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

// eslint-disable-next-line import/no-cycle

const Routes = () => (
  <HashRouter>
    <Switch>
      <Route
        path="/"
        root
        render={() => <h1 style={{ textAlign: "center" }}>Boilerplate root</h1>}
      />
    </Switch>
  </HashRouter>
);

export default Routes;
