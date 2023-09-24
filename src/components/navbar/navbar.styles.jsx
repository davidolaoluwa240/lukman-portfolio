// Modules
import styled from "styled-components";

// Components
import { NavLink } from "react-router-dom";
import { Container } from "../../assets/styles/common.styles";

export const NavbarWrapper = styled.nav`
  padding: 3rem 0;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavbarList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavbarItem = styled.li`
  &:not(:last-child) {
    margin-right: 2.5rem;
  }
`;

export const NavbarLink = styled(NavLink)`
  color: rgba(33, 33, 33, 0.5);
  font-feature-settings: "clig" off, "liga" off;
  font-size: 1.125rem;
  font-style: normal;
  line-height: 1.5rem;
  letter-spacing: 0.0625rem;
  transition: 0.3s color linear;

  &:hover,
  &.active {
    color: var(--primary-color);
  }
`;