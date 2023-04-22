// Modules
import React from "react";

// Components
import { ProjectPreviews } from "../../";

// Data
import { PROJECT_ITEMS } from "../../../data";

// Styles
import { Container, SecondaryHeading } from "../../../assets/styles";
import { ProjectPreviewBaseWrapper } from "./project-preview-base.styles";

export const ProjectPreviewBase = () => {
  return (
    <ProjectPreviewBaseWrapper>
      <Container>
        <SecondaryHeading mb="md">Selected projects</SecondaryHeading>
        <ProjectPreviews items={PROJECT_ITEMS} />
      </Container>
    </ProjectPreviewBaseWrapper>
  );
};
