// Modules
import React from "react";

// Style
import { Container } from "../../assets/styles/utilities.styles";
import {
  FooterWrapper,
  FooterCopyrightText,
  NigeriaIcon,
} from "./footer.styles";

// Static Data
const currentYear = new Date().getFullYear();

export const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <FooterCopyrightText>
          {currentYear} Lukman Suleiman is a Senior Product Designer based in
          Nigeria <NigeriaIcon aria-label="Based In Nigeria" />
        </FooterCopyrightText>
      </Container>
    </FooterWrapper>
  );
};
