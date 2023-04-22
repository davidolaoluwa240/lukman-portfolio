// Modules
import React from "react";

// Components
import { ReadingList } from "../../";

// Data
import { READING_ITEMS } from "../../../data";

// Style
import { SecondaryHeading } from "../../../assets/styles";
import {
  ReadingBaseWrapper,
  ReadingBaseContainer,
} from "./reading-base.styles";

export const ReadingBase = () => {
  return (
    <ReadingBaseWrapper>
      <ReadingBaseContainer>
        <SecondaryHeading mb="sm">What i’m reading</SecondaryHeading>
        <ReadingList items={READING_ITEMS} />
      </ReadingBaseContainer>
    </ReadingBaseWrapper>
  );
};
