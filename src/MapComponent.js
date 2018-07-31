import React, {Component} from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

const MapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 45.943161, lng: 24.96676 }}
  >
  {props.isMarkerShown && <Marker position={{ lat: 45.918, lng: 24.861 }} />}
  </GoogleMap>
))

export default MapComponent;
