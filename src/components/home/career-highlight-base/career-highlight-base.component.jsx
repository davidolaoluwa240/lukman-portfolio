// Modules
import React from "react";

// Components
import { CareerHighlightList } from "../../";

// Data
import { CAREER_HIGHLIGHT_ITEMS } from "../../../data";

// Style
import { Container, SecondaryHeading } from "../../../assets/styles";
import { CareerHighlightBaseWrapper } from "./career-highlight-base.styles";

export const CareerHighlightBase = () => {
  return (
    <CareerHighlightBaseWrapper>
      <Container>
        <SecondaryHeading>Career Highlights</SecondaryHeading>
        <CareerHighlightList items={CAREER_HIGHLIGHT_ITEMS} />
      </Container>
    </CareerHighlightBaseWrapper>
  );
};
