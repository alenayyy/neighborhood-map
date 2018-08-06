import React, {Component} from 'react'
import { Col } from 'reactstrap'
import { Nav, NavItem, NavLink } from 'reactstrap'

import NavFilter from './NavFilter'
import _ from 'lodash'

/**
  MapNavigation is the left side navigation consisting of a list of points of interests and a search field.
*/
class MapNavigation extends Component {

  handleClick = (e) => {
    e.preventDefault();
    this.props.showInfo(e.target.text);
  };

  handleSubmit = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.props.search(e.target.value);
    }
  }

  render() {

    let destinations = _.sortBy(this.props.destinations, ['title']);
    let destinationTitles = [];
    let navItemStyle = '';
    destinations.forEach( (destination) => {
      if(this.props.currentDestination && destination.title === this.props.currentDestination.title) {
        navItemStyle = 'active';
      }
      else {
        navItemStyle = '';
      }
      destinationTitles.push(
        <NavItem key={destination.name} className={navItemStyle}>
          <NavLink tabIndex={0} className="text-primary"
            id={destination.title}
            onClick={this.handleClick}
            onKeyPress={this.handleClick}>
            {destination.title}
          </NavLink>
        </NavItem>)
      });

      return (
        <Col tag="nav" md={2} className="order-md-1 pt-2 bg-light sidebar">
          <NavFilter handleSubmit={this.handleSubmit} />          
          <Nav className="flex-column">
            {destinationTitles}
          </Nav>
        </Col>
      );
    }
  }

  export default MapNavigation;
