// Modules
import styled from "styled-components";

// Components
import { BsArrowUpRight } from "react-icons/bs";

// Shared
import { COLORS } from "../../../../assets/styles";

export const ContactItemWrapper = styled.li`
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

export const ContactItemIcon = styled.span`
  font-size: 2.2rem;
  line-height: 34px;
  color: rgba(0, 0, 0, 0.8);
  margin-right: 2.4rem;
  width: 30px;
`;

export const ContactItemContent = styled.p`
  line-height: 34px;
  color: rgba(38, 18, 10, 0.8);

  a {
    text-decoration: underline;
  }
`;

export const ContactItemLinkIcon = styled(BsArrowUpRight)`
  color: ${COLORS["text-color"]};
  margin-left: 1.7rem;
  font-size: 1.5rem;
  ${({ hasLink }) => !hasLink && "display: none"}
`;
