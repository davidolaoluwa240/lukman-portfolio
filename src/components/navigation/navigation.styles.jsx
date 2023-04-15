// Modules
import styled from "styled-components";

// Utilities
import { Container } from "../../assets/styles/utilities.styles";

// Variables
import { COLORS } from "../../assets/styles/variables.styles";

// Components
import { NavLink } from "react-router-dom";

export const NavigationContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6.8rem 0;
`;

export const NavigationList = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  list-style: none;
`;

export const NavigationItem = styled.li`
  &:not(:last-child) {
    margin-right: 4rem;
  }
`;

export const NavigationLink = styled(NavLink)`
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 24px;
  color: rgba(38, 18, 10, 0.7);
  transition: color 0.3s linear;

  &:hover,
  &.active {
    color: ${COLORS["primary-color"]};
  }
`;
