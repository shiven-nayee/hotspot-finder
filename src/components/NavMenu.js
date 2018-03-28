import React, { Component, Fragment } from "react";

// Components
import { Nav, NavItem, NavLink } from "reactstrap";

class NavMenu extends Component {
  state = {};
  render() {
    return (
      <nav>
        <Nav>
          <h1>Wifi Finder</h1>
          <NavItem>
            <NavLink href="#">Find by Zip Code</NavLink>
          </NavItem>
        </Nav>
      </nav>
    );
  }
}

export default NavMenu;
