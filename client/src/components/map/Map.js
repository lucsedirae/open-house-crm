import Geocode from "react-geocode";
import { useState } from "react";
import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
require("dotenv").config();

//* Exported component
const Map = ({ contact }) => {
  const [location, setLocation] = useState({});


  const { streetNumber, street, city, state } = contact;

  const address = `${streetNumber} ${street}, ${city}, ${state}`;

  Geocode.setApiKey(process.env.REACT_APP_GEO_API_KEY);
  Geocode.fromAddress(address).then((res) => {
    const { lat, lng } = res.results[0].geometry.location;
    setLocation({ lat, lng });
  });

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
