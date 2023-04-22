// Modules
import styled from "styled-components";

export const ExperienceItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 0.6rem;
  }
`;

export const ExperienceItemContent = styled.span`
  line-height: 37px;
  ${({ position }) =>
    position === "right" ? "flex-basis: 40%" : "flex-basis: 60%"};

  a {
    text-decoration: underline;
  }

  small {
    font-size: 1.2rem;
    margin-left: 0.3rem;
  }
`;
