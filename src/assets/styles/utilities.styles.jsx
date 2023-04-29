// Modules
import styled from "styled-components";

// Shared
import { COLORS } from "./variables.styles";

export const Container = styled.div`
  max-width: 960px;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
`;

export const PrimaryHeading = styled.h1`
  font-family: "Vollkorn", serif;
  font-style: normal;
  font-weight: 600;
  font-size: 4.8rem;
  line-height: 67px;
  letter-spacing: -0.02em;
  color: ${COLORS["text-color"]};
`;

export const PrimaryHeadingBold = styled(PrimaryHeading)`
  font-weight: 700;
  line-height: 58.13px;
  color: ${COLORS["primary-color"]};
`;

export const SecondaryHeading = styled.h2`
  font-family: "Vollkorn", serif;
  font-weight: 600;
  font-size: 4rem;
  line-height: 56px;
  letter-spacing: -0.02em;
  text-transform: capitalize;
  color: ${COLORS["text-color"]};
  ${({ mb }) => {
    switch (mb) {
      case "sm":
        return "margin-bottom: 2.4rem";
      case "md":
        return "margin-bottom: 5.9rem";
      default:
        return "margin-bottom: 1.6rem";
    }
  }}
`;

export const SecondaryHeadingAlt = styled(SecondaryHeading)`
  text-transform: none;
  font-size: 4.2rem;
  line-height: 58px;
  letter-spacing: -2px;
`;

export const SecondaryHeadingV2 = styled(SecondaryHeading)`
  text-transform: none;
  color: rgba(38, 18, 10, 0.8);
  font-weight: 700;
  max-width: 735px;
`;

export const HorizontalLine = styled.hr`
  border-color: ${COLORS["horizontal-color"]};
`;
