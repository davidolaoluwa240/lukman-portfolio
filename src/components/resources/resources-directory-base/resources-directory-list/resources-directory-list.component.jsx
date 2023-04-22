// Modules
import React from "react";

// Components
import { ResourcesDirectoryItem } from "../../../";

// style
import { ResourcesDirectoryListWrapper } from "./resources-directory-list.styles";

export const ResourcesDirectoryList = ({ items }) => {
  // Resources Items
  const renderedResourcesDirectoryItems = items.map(({ id, content, link }) => (
    <ResourcesDirectoryItem key={id} content={content} link={link} />
  ));

  return (
    <ResourcesDirectoryListWrapper>
      {renderedResourcesDirectoryItems}
    </ResourcesDirectoryListWrapper>
  );
};
