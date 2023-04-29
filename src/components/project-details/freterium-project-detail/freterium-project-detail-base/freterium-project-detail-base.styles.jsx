// Modules
import styled from "styled-components";

export const FreteriumProjectDetailBaseWrapper = styled.section`
  margin-top: 9.1rem;
`;

export const FreteriumProjectDetailCardList = styled.div`
  display: flex;
  margin-top: 2.4rem;
`;

export const FreteriumProjectDetailCard = styled.figure`
  text-align: center;

  svg {
    vertical-align: middle;
  }

  &:not(:last-child) {
    margin-right: 4rem;
  }
`;
