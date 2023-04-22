// Modules
import React from "react";

// Style
import { CareerHighlightItemContent } from "./career-highlight-item.styles";

export const CareerHighlightItem = ({ content }) => {
  return (
    <CareerHighlightItemContent dangerouslySetInnerHTML={{ __html: content }} />
  );
};
