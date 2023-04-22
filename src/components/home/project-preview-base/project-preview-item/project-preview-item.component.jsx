// Modules
import React from "react";

// Style
import {
  ProjectLink,
  CompanyName,
  JobContext,
  JobContextDescription,
  ProjectPreviewItemWrapper,
  ProjectImage,
  ProjectImageContainer,
} from "./project-preview-item.styles";

export const ProjectPreviewItem = ({
  companyName,
  jobContext,
  jobContextDescription,
  Image,
}) => {
  return (
    <ProjectPreviewItemWrapper>
      <CompanyName>{companyName}</CompanyName>
      <JobContext>{jobContext}</JobContext>
      <JobContextDescription>{jobContextDescription}</JobContextDescription>
      <ProjectLink to={`/projects/${companyName.toLowerCase()}`}>
        View case study
      </ProjectLink>
      <ProjectImageContainer>
        <ProjectImage as={Image} />
      </ProjectImageContainer>
    </ProjectPreviewItemWrapper>
  );
};
