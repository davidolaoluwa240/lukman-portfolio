// Modules
import React from "react";

// Components
import { ProjectPreviewItem } from "../../../";

export const ProjectPreviews = ({ items }) => {
  // Project Items
  const renderedProjectItems = items.map(
    ({ id, companyName, jobContext, jobContextDescription, Image }) => (
      <ProjectPreviewItem
        key={id}
        companyName={companyName}
        jobContext={jobContext}
        jobContextDescription={jobContextDescription}
        Image={Image}
      />
    )
  );

  return <div className="project-previews">{renderedProjectItems}</div>;
};
