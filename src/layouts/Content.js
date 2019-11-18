import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Widgets from "./Widgets";

const Content = () => {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/widgets" component={Widgets} />
    </Switch>
  );
};

export default Content;
