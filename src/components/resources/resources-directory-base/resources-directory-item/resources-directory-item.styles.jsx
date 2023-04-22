// Modules
import styled from "styled-components";

export const ResourcesDirectoryItemWrapper = styled.li`
  line-height: 34px;
  letter-spacing: -0.01em;
  color: rgba(38, 18, 10, 0.8);
  display: flex;
  align-items: center;
  flex-wrap: nowrap;

  &:not(:last-child) {
    margin-bottom: 0.9rem;
  }

  &::before {
    content: "";
    width: 8px;
    height: 8px;
    flex-shrink: 0;
    border-radius: 9999px;
    background-color: currentColor;
  }

  a {
    margin-left: 1rem;
    text-decoration: underline;
  }
`;
