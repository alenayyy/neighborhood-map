import React, {Component} from 'react';
import { Col } from 'reactstrap';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

import _ from 'lodash';

class MapNavigation extends Component {

  handleClick = (e) => {
    this.props.fetchInfo(e.target.text);
  };

  handleSubmit = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.props.search(document.getElementById("destination").value);
    }
  }

  render() {

    let destinations = _.sortBy(this.props.destinations, ['title']);
    let destinationTitles = [];
    destinations.forEach( destination => {
      destinationTitles.push(
        <NavItem key={destination.name}>
          <NavLink onClick={this.handleClick}>{destination.title}</NavLink>
        </NavItem>)
      });

      return (
        <Col tag="nav" md={2} className="order-md-1 pt-2 bg-light sidebar ">
          {/* <div className="sidebar-sticky"> */}
          <Form className="pt-2">
            <FormGroup>
              {/* <Label for="destination">Destination</Label> */}
              <Input type="search" name="destination" id="destination" placeholder="Destination"
                onKeyPress={this.handleSubmit}/>
            </FormGroup>
          </Form>
          <Nav className="flex-column">
            {destinationTitles}
          </Nav>
          {/* </div> */}
        </Col>
      );
    }
  }

  export default MapNavigation;
