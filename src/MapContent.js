import React, {Component} from 'react'
import { Col } from 'reactstrap'
// import MapComponent from './MapComponent'

import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps'

/**
  MapContent is the element containing the Google Map
  It wraps a MapComponent consisting of elements from 'react-google-maps'
*/
class MapContent extends Component {

  render() {
    return (
      <Col tag="main" className="order-md-2 pt-3" role="main">
        <MapComponent
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDj6Zlb8FrgsuGgoS7yDg6GKSZngWmFMuA&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `830px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          {...this.props}
        />
      </Col>
    );
  }
}

/**
  MapComponent uses a library 'react-google-maps', which provides a set of React components wrapping
  the underlying Google Maps JavaScript API.
*/
const MapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={13}
    defaultCenter={{ lat: 34.420832, lng: -119.698206 }}
  >
    {props.destinations.map( destination => (
      <Marker
        position={{ lat: destination.location.lat, lng: destination.location.long }}
        key={destination.title}
        animation={(props.currentDestination && props.currentDestination.title === destination.title) && 2}
        onClick={() => props.showInfo(destination.title)}
      >
        { props.currentDestination && props.currentDestination.title === destination.title &&
          <InfoWindow onCloseClick={props.toggleInfo}>
            <div>
              {props.currentDestination.description}
            </div>
          </InfoWindow>}
      </Marker>
    ))}
  </GoogleMap>
))

export default MapContent;
