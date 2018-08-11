import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';

const Header = ({ toggleHeaderNav, navbarCollapsed }) => {
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">Santa Barbara's Attactions Map</NavbarBrand>
          <NavbarToggler onClick={toggleHeaderNav} />
          <Collapse isOpen={navbarCollapsed} navbar>
            <Nav className="ml-auto">
              <NavItem>
                <NavbarBrand href="https://github.com/alenayyy/neighborhood-map">GitHub</NavbarBrand>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
};

export default Header;
