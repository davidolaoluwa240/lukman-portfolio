// Modules
import styled from "styled-components";

// Styles
import {
  ProjectDetailContent,
  ProjectDetailList,
} from "../../project-details.styles";

export const AsusuListGroup = styled.div`
  display: flex;
  justify-content: space-between;

  ${ProjectDetailList} {
    padding-left: 0;
  }

  ${ProjectDetailContent} {
    line-height: 28px;
    list-style-type: none;
  }
`;
