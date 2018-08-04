import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps'

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
        onClick={() => props.showInfo(destination)}
      >
        { (props.isOpen && props.currentDestination.title === destination.title ) &&
          <InfoWindow onCloseClick={props.toggleInfo}>
            <div>
              {props.currentDestination.description}
            </div>
          </InfoWindow>}
      </Marker>


    ))}
  </GoogleMap>
))

export default MapComponent;
