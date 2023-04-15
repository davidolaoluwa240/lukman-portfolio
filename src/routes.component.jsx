// Modules
import React from "react";

// Components
import { Routes as Switch, Route } from "react-router-dom";

// Routes
import { Home } from "./routes";

// Layouts
import { LandingLayout } from "./layouts";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" element={<LandingLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Switch>
  );
};

export default Routes;
