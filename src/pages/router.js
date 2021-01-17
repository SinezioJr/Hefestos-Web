import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import login from "./login";
import courses from "./Courses";
import jobs from "./jobs";

export default function RouterView() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={jobs} />
        <Route path="/jobs" component={jobs} />
        <Route path="/courses" component={courses} />
      </Switch>
    </BrowserRouter>
  );
}
