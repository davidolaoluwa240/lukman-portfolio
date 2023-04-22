// Modules
import React from "react";

// Style
import {
  Container,
  HorizontalLine,
  SecondaryHeadingAlt,
} from "../../assets/styles";
import {
  SecondaryHeroDescription,
  SecondaryHeroWrapper,
} from "./secondary-hero.styles";

export const SecondaryHero = ({ title, description }) => {
  return (
    <SecondaryHeroWrapper>
      <Container>
        <SecondaryHeadingAlt mb="sm">{title}</SecondaryHeadingAlt>
        {!!description && (
          <SecondaryHeroDescription>{description}</SecondaryHeroDescription>
        )}
        <HorizontalLine />
      </Container>
    </SecondaryHeroWrapper>
  );
};
