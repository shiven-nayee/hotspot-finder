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
          defaultZoom={10}
          defaultCenter={{
                lat: Number(this.props.data[0].lat),
                lng: Number(this.props.data[0].lng)
              }
            }
        >
          {this.props.data.map((dat, index) => {
            console.log({
              lat: Number(dat.lat),
              lng: Number(dat.lng)
            });
            return (
              <Marker
                key={index}
                position={{
                  lat: Number(dat.lat),
                  lng: Number(dat.lng)
                }}
              />
            );
          })}
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
