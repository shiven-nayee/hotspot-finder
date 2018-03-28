import React, { Component } from "react";

// Components
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

class Map extends Component {
  render() {
    const MapComponent = withScriptjs(
      withGoogleMap(props => (
        <GoogleMap
          defaultZoom={14}
          defaultCenter={{
            lat: this.props.data[0].location_lat_long.coordinates[1],
            lng: this.props.data[0].location_lat_long.coordinates[0]
          }}
        >
          {this.props.data.map((dat, index) => {
            console.log({
              lat: dat.location_lat_long.coordinates[1],
              lng: dat.location_lat_long.coordinates[0]
            });
            return (
              <Marker
                key={index}
                position={{
                  lat: dat.location_lat_long.coordinates[1],
                  lng: dat.location_lat_long.coordinates[0]
                }}
              />
            );
          })}
          <Marker position={{ lat: 40.728299, lng: -73.856071 }} />
        </GoogleMap>
      ))
    );
    return (
      <div className="map-container">
        <MapComponent
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAFdy_ty-E5BHEx6XZTljwb6RXrSIy_14g"
          loadingElement={<div style={{ height: `400px`, width: `100%` }} />}
          containerElement={<div style={{ height: `400px`, width: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}

export default Map;
