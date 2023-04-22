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
  flex-basis: 69%;

  &:link {
    text-decoration: underline;
    flex-basis: 40%;
  }

  small {
    font-size: 1.2rem;
    text-decoration: none;
  }
`;
