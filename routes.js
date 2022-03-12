import React from "react";
import { HashRouter, Route, Routes as RRDRoutes } from "react-router-dom";
import Title from "./src/components/title/title";

// eslint-disable-next-line import/no-cycle

const Routes = () => (
  <HashRouter>
    <RRDRoutes>
      <Route path="/" root exact element={<Title title="Hello, World" />} />
    </RRDRoutes>
  </HashRouter>
);

export default Routes;
