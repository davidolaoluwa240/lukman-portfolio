// Modules
import styled from "styled-components";

// Shared
import { COLORS } from "../../../../assets/styles";

export const ReadingItemWrapper = styled.li`
  line-height: 54px;
  color: ${COLORS["text-color"]};
  padding: 0;
  margin: 0;

  &:not(:last-child) {
    margin-bottom: 0.9rem;
  }

  a {
    text-decoration: underline;
  }
`;
