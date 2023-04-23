// Modules
import React from "react";

// Components
import { Fragment } from "react";
import { Outlet } from "react-router-dom";

// Style
import { ProjectDetailsLayoutContainer } from "./project-details-layout.styles";

export const ProjectDetailsLayout = () => {
  return (
    <Fragment>
      <ProjectDetailsLayoutContainer>
        <Outlet />
      </ProjectDetailsLayoutContainer>
    </Fragment>
  );
};
