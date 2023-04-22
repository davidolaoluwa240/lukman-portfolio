// Modules
import React from "react";

// Components
import { SecondaryHero } from "../../";

// Style
import { ResourcesHeroBaseWrapper } from "./hero-base.styles";

export const ResourcesHeroBase = () => {
  return (
    <ResourcesHeroBaseWrapper>
      <SecondaryHero title="Here are some of my favourite product and UX articles and resources <span>♥️</span>" />
    </ResourcesHeroBaseWrapper>
  );
};
