//* Dependencies
import React, { useState, useEffect } from "react";
import Geocode from "react-geocode";
import GoogleMapReact from "google-map-react";
require("dotenv").config();

//* Custom components
import LocationMarker from "./LocationMarker";

//* Exported component
const Map = ({ contact }) => {
  const [location, setLocation] = useState({});

  const { streetNumber, street, city, state } = contact;

  const address = `${streetNumber} ${street}, ${city}, ${state}`;

  useEffect(() => {
    Geocode.setApiKey(process.env.REACT_APP_GEO_API_KEY);
    Geocode.fromAddress(address).then((res) => {
      const { lat, lng } = res.results[0].geometry.location;
      console.log(lat, lng);
      setLocation({ lat, lng });
    });
    //eslint-disable-next-line
  }, []);

  //* Returns JSX to DOM
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_API_KEY }}
        center={{ lat: location.lat, lng: location.lng }}
        defaultZoom={10}
      >
        <LocationMarker lat={location.lat} lng={location.lng} />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
