// Modules
import React from "react";

// Style
import { ReadingItemWrapper } from "./reading-item.styles";

export const ReadingItem = ({ content, link }) => {
  return (
    <ReadingItemWrapper>
      <a href={link} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    </ReadingItemWrapper>
  );
};
