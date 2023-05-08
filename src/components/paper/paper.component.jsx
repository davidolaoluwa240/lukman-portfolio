// Modules
import React from "react";

// Style
import {
  PaperWrapper,
  PaperHeading,
  PaperSubheading,
} from "./paper.styles.jsx";

export const Paper = ({ children, heading, subheading }) => {
  return (
    <PaperWrapper>
      <PaperHeading>{heading}</PaperHeading>
      <PaperSubheading visible={!!subheading}>{subheading}</PaperSubheading>
      {children}
    </PaperWrapper>
  );
};
