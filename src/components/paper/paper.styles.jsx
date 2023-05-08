// Modules
import styled from "styled-components";

// Shared
import { COLORS } from "../../assets/styles";

export const PaperGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4rem;

  ${({ mt }) => {
    switch (mt) {
      case "sm":
        return "margin-top: 1.7rem";
      case "md":
        return "margin-top: 2.3rem";
      case "lg":
        return "margin-top: 2.4rem";
    }
  }}
`;

export const PaperWrapper = styled.div`
  border: 1px solid ${COLORS["horizontal-color"]};
  background: ${COLORS["white-color"]};
  padding: 2.4rem 4rem;
  color: rgba(38, 18, 10, 0.7);
`;

export const PaperHeading = styled.h5`
  font-family: "Vollkorn";
  font-weight: 700;
  line-height: 41px;
  font-size: 2.4rem;
`;

export const PaperSubheading = styled.h6``;

export const PaperContent = styled.p`
  font-size: 1.6rem;
  line-height: 27px;
`;
