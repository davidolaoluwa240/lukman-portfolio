// Modules
import React from "react";

// Component
import { ContactList } from "../../";

// Data
import { CONTACT_ITEMS } from "../../../data";

// Style
import { Container } from "../../../assets/styles";
import { ContactBaseWrapper, ContactBaseHeading } from "./contact-base.styles";

export const ContactBase = () => {
  return (
    <ContactBaseWrapper>
      <Container>
        <ContactBaseHeading>
          Feel free to drop me a line below 👇🏾
        </ContactBaseHeading>

        <ContactList items={CONTACT_ITEMS} />
      </Container>
    </ContactBaseWrapper>
  );
};
