// Modules
import React from "react";

// Components
import { Routes as Switch, Route } from "react-router-dom";

// Routes
import {
  Home,
  Connect,
  Resources,
  FreteriumProjectDetail,
  BongaloProjectDetail,
  AsusuProjectDetail,
} from "./routes";

// Layouts
import { LandingLayout, ProjectDetailsLayout } from "./layouts";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" element={<LandingLayout />}>
        <Route index element={<Home />} />
        <Route path="connect" element={<Connect />} />
        <Route path="resources" element={<Resources />} />
        <Route path="projects" element={<ProjectDetailsLayout />}>
          <Route path="freterium" element={<FreteriumProjectDetail />} />
          <Route path="bongalo" element={<BongaloProjectDetail />} />
          <Route path="asusu" element={<AsusuProjectDetail />} />
        </Route>
      </Route>
    </Switch>
  );
};

export default Routes;
