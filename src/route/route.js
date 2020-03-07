import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const My = lazy(() => import("../page/My"));
const List = lazy(() => import("../page/List"));
export default props => (
  <Router>
    <Suspense fallback={"loading..."}>
      <Switch>
        <Route exact component={My} path="/" />
        <Route exact component={List} path="/List" />
      </Switch>
    </Suspense>
  </Router>
);
