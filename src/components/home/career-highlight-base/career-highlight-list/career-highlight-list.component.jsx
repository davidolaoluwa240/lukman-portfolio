// Modules
import React from "react";

// Components
import { CareerHighlightItem } from "../../../";

// Style
import { CareerHighlightListWrapper } from "./career-highlight-list.styles";

export const CareerHighlightList = ({ items }) => {
  // Career Highlight Items
  const renderedCareerHighlightItems = items.map(({ id, content }) => (
    <CareerHighlightItem key={id} content={content} />
  ));

  return (
    <CareerHighlightListWrapper className="career-highlight-list">
      {renderedCareerHighlightItems}
    </CareerHighlightListWrapper>
  );
};
