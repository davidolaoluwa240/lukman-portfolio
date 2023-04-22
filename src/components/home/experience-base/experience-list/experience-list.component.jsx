// Modules
import React from "react";

// Components
import { ExperienceItem } from "../../../";

// Style
import { ExperienceListContainer } from "./experience-list.styles";

export const ExperienceList = ({ items }) => {
  // Experience Items
  const renderedExperienceItems = items.map(
    ({ id, jobRole, companyName, companyWebsite }) => (
      <ExperienceItem
        key={id}
        jobRole={jobRole}
        companyName={companyName}
        companyWebsite={companyWebsite}
      />
    )
  );

  return (
    <ExperienceListContainer>{renderedExperienceItems}</ExperienceListContainer>
  );
};
