// Modules
import React from "react";

// Style
import { ResourcesDirectoryItemWrapper } from "./resources-directory-item.styles";

export const ResourcesDirectoryItem = ({ content, link }) => {
  return (
    <ResourcesDirectoryItemWrapper>
      <a href={link} target="_blank" rel="noreferrer noopener">
        {content}
      </a>
    </ResourcesDirectoryItemWrapper>
  );
};
