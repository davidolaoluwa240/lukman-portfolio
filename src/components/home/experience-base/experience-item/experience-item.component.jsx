// Modules
import React from "react";

// Style
import {
  ExperienceItemContent,
  ExperienceItemWrapper,
} from "./experience-item.styles";

export const ExperienceItem = ({
  jobRole,
  companyName,
  companyWebsite,
  companyExitDate,
}) => {
  return (
    <ExperienceItemWrapper>
      <ExperienceItemContent position="left">{jobRole}</ExperienceItemContent>

      <ExperienceItemContent position="right">
        <a href={companyWebsite} target="_blank" rel="noopener noreferrer">
          {companyName}
        </a>
        {companyExitDate && <small>(Left {companyExitDate})</small>}
      </ExperienceItemContent>
    </ExperienceItemWrapper>
  );
};
