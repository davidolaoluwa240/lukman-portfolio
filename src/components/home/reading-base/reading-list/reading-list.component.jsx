// Modules
import React from "react";

// Components
import { ReadingItem } from "../../../";

// Style
import { ReadingListWrapper } from "./reading-list.styles";

export const ReadingList = ({ items }) => {
  // Reading Items
  const renderedReadingItems = items.map(({ id, content, link }) => (
    <ReadingItem key={id} content={content} link={link} />
  ));

  return <ReadingListWrapper>{renderedReadingItems}</ReadingListWrapper>;
};
