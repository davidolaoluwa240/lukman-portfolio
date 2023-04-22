// Modules
import React from "react";

// Components
import { ResourcesDirectoryList } from "../..";

// Data
import { RESOURCES_ITEMS } from "../../../data";

// Style
import { Container } from "../../../assets/styles";
import { ResourcesDirectoryBaseWrapper } from "./resources-directory-base.styles";

export const ResourcesDirectoryBase = () => {
  return (
    <ResourcesDirectoryBaseWrapper>
      <Container>
        <ResourcesDirectoryList items={RESOURCES_ITEMS} />
      </Container>
    </ResourcesDirectoryBaseWrapper>
  );
};
