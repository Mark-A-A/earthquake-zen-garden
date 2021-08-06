import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Home } from "../Pages/Home/Home";
import { Detail } from "../Pages/Detail/Detail";
import { Profile } from "../Pages/Profile/Profile";
import { NavBar } from "./NavBar/NavBar";

export default function Navigation() {
  return (
    <Router>
      <div className="Navigation">
        <NavBar />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/detail">
            <Detail />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
