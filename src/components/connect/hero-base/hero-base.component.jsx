// Modules
import React from "react";

// Assets
import woodApple from "../../../assets/images/wood-apple.webp";

// Components
import { SecondaryHero } from "../..";
import { ConnectHeroBaseWrapper } from "./hero-base.styles";

export const ConnectHeroBase = () => {
  return (
    <ConnectHeroBaseWrapper>
      <SecondaryHero
        title={`Together, let's create a remarkable user experience <img src=${woodApple} alt="small problem at a time"/>`}
        description="I'm always open to connecting with fellow designers, developers, and product professionals - whether it's to discuss an upcoming project or just to say hello. Don't hesitate to reach out, as I'd love to chat with you!"
      />
    </ConnectHeroBaseWrapper>
  );
};
