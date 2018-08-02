import React, {Component} from 'react'
import { Col } from 'reactstrap'
import MapComponent from './MapComponent'


class MapContent extends Component {

  render() {
    return (
      <Col tag="main" className="order-md-2 pt-3" role="main">
        <MapComponent
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDj6Zlb8FrgsuGgoS7yDg6GKSZngWmFMuA&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `920px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          destinations={this.props.destinations}
        />
      </Col>
    );
  }
}

export default MapContent;
