// Modules
import styled from "styled-components";

// Shared
import { Container, HorizontalLine, COLORS } from "../../assets/styles";

export const TertiaryHeroWrapper = styled.div`
  margin-top: 3.2rem;
`;

export const TertiaryHeroContainer = styled(Container)`
  max-width: 100%;
`;

export const TertiaryHeroHorizontalLine = styled(HorizontalLine)`
  width: 635px;
  border-color: ${COLORS["text-color"]};
  margin-bottom: 3.2rem;
`;

export const TertiaryHeroItemWrapper = styled.div`
  display: grid;
  grid-template-columns: 3.2fr 1fr;
  row-gap: 1.6rem;
`;

export const TertiaryHeroItem = styled.div`
  ${({ visible }) => !visible && "display: none"}

  &:nth-child(5) {
    align-self: center;
  }
`;

export const TertiaryHeroItemHeading = styled.h6`
  font-weight: 600;
  font-size: 1.8rem;
  line-height: 24px;
  text-decoration: underline;
  color: ${COLORS["text-color"]};
  margin-bottom: 1.2rem;
`;

export const TertiaryHeroItemContent = styled.p`
  font-size: 1.6rem;
  line-height: 28px;
  color: ${COLORS["text-color"]};

  a {
    text-decoration: underline;
  }
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;

  ${TertiaryHeroItemContent} {
    &:not(:last-child) {
      margin-bottom: 0.3rem;
    }
  }
`;

export const TertiaryHeroSocialLink = styled.a`
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 24px;
  text-decoration: underline;
  color: ${COLORS["text-color-5"]};
`;
