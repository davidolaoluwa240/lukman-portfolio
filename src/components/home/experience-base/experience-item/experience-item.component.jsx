// Modules
import React from "react";

// Style
import {
  ExperienceItemContent,
  ExperienceItemWrapper,
} from "./experience-item.styles";

export const ExperienceItem = ({ jobRole, companyName, companyWebsite }) => {
  return (
    <ExperienceItemWrapper>
      <ExperienceItemContent>{jobRole}</ExperienceItemContent>

      <ExperienceItemContent
        as="a"
        href={companyWebsite}
        target="_blank"
        rel="noopener noreferrer"
        dangerouslySetInnerHTML={{ __html: companyName }}
      />
    </ExperienceItemWrapper>
  );
};
