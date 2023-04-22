// Modules
import React from "react";

// Components
import { ContactItem } from "../../../";

// Style
import { ContactListWrapper } from "./contact-list.styles";

export const ContactList = ({ items }) => {
  // Contact Items
  const renderedContactItems = items.map(
    ({ id, content, ContentIcon, icon }) => (
      <ContactItem
        key={id}
        content={content}
        ContentIcon={ContentIcon}
        icon={icon}
      />
    )
  );

  return <ContactListWrapper>{renderedContactItems}</ContactListWrapper>;
};
