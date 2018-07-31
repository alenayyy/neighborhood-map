import React, {Component} from 'react';
import { Col } from 'reactstrap';
import { Nav, NavItem, NavLink } from 'reactstrap';

class MapNavigation extends Component {
  render() {
    return (
      <Col tag="nav" md={2} className="order-md-1 pt-2 bg-light sidebar ">
        {/* <div className="sidebar-sticky"> */}
          <Nav className="flex-column">
            <NavItem>
              <NavLink href="">Some Link</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Stuff</NavLink>
            </NavItem>
          </Nav>
        {/* </div> */}
      </Col>
    );
  }
}

export default MapNavigation;
