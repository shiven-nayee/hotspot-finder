import React, { Component, Fragment } from "react";

// Components
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

class NavMenu extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Fragment>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">WiFinder</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Search</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/favorites">Favorites</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Fragment>
    );
  }
}

export default NavMenu;
