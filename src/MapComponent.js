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
        animation={(props.currentDestination.title === destination.title) && 2}
        onClick={() => {

        }}
      >
        { (props.currentDestination.title === destination.title ) &&
          <InfoWindow onCloseClick={props.onToggleOpen}>
            <div>
              {props.currentDestination.description}
            </div>
          </InfoWindow>}
      </Marker>


    ))}
  {/* {props.isMarkerShown && <Marker position={{ lat: 45.918, lng: 24.861 }} />} */}
  </GoogleMap>
))

export default MapComponent;
