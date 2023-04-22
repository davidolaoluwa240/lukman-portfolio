// Modules
import React from "react";

// Style
import {
  ContactItemContent,
  ContactItemIcon,
  ContactItemLinkIcon,
  ContactItemWrapper,
} from "./contact-item.styles";

export const ContactItem = ({ content, ContentIcon, icon }) => {
  const hasLink = content.includes("href");

  return (
    <ContactItemWrapper>
      <ContactItemIcon>{icon}</ContactItemIcon>
      <ContactItemContent dangerouslySetInnerHTML={{ __html: content }} />
      {ContentIcon && <ContentIcon />}
      <ContactItemLinkIcon hasLink={hasLink} />
    </ContactItemWrapper>
  );
};
