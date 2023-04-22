// Modules
import React from "react";

// Components
import { Fragment } from "react";
import {
  HeroBase,
  ProjectPreviewBase,
  CareerHighlightBase,
  ExperienceBase,
  ReadingBase,
} from "../../components";

export const Home = () => {
  return (
    <Fragment>
      <HeroBase />
      <ProjectPreviewBase />
      <CareerHighlightBase />
      <ExperienceBase />
      <ReadingBase />
    </Fragment>
  );
};
