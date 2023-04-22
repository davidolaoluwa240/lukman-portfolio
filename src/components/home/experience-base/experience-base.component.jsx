// Modules
import React from "react";

// Components
import { ExperienceList } from "../../";

// Data
import { EXPERIENCE_ITEMS } from "../../../data";

// Style
import { Container, SecondaryHeading } from "../../../assets/styles";
import {
  ExperienceBaseDescription,
  ExperienceBaseWrapper,
} from "./experience-base.styles";

export const ExperienceBase = () => {
  return (
    <ExperienceBaseWrapper>
      <Container>
        <SecondaryHeading>Experience</SecondaryHeading>
        <ExperienceBaseDescription>
          I've worked with companies on projects of all different shapes and
          sizes that have an impact in peoples’ lives with people who are
          innovating.
        </ExperienceBaseDescription>

        <ExperienceList items={EXPERIENCE_ITEMS} />
      </Container>
    </ExperienceBaseWrapper>
  );
};
