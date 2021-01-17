import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import login from "./login";
import jobs from "./jobs";

export default function RouterView() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={login} />
        <Route path="/jobs" component={jobs} />
      </Switch>
    </BrowserRouter>
  );
}
