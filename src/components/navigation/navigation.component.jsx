// Modules
import React from "react";

// Components
import { Link } from "react-router-dom";
import { ReactComponent as LukmanLogo } from "../../assets/images/logo.svg";

// Style
import {
  NavigationContainer,
  NavigationList,
  NavigationItem,
  NavigationLink,
} from "./navigation.styles";

export const Navigation = () => {
  return (
    <div className="navigation">
      <NavigationContainer>
        <div className="navigation__brand">
          <Link className="navigation__brand-link" to="/">
            <LukmanLogo
              className="navigation__brand-logo"
              aria-label="Lukman Logo"
            />
          </Link>
        </div>

        <NavigationList>
          <NavigationItem>
            <NavigationLink to="/">Home</NavigationLink>
          </NavigationItem>

          <NavigationItem>
            <NavigationLink to="/resources">Resources</NavigationLink>
          </NavigationItem>

          <NavigationItem>
            <NavigationLink to="/connect">Connect</NavigationLink>
          </NavigationItem>
        </NavigationList>
      </NavigationContainer>
    </div>
  );
};
