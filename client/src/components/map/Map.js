import Geocode from "react-geocode";
import { useState } from "react";
import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";

//* Exported component
const Map = ({ contact, center, zoom }) => {
  const [location, setLocation] = useState({});

  const { streetNumber, street, city, state } = contact;

  const address = `${streetNumber} ${street}, ${city}, ${state}`;

  Geocode.setApiKey("AIzaSyDNSb3m2PtzVFM4_HhqYud3otaqxRC8UHQ");
  Geocode.fromAddress(address).then((res) => {
    const { lat, lng } = res.results[0].geometry.location;
    console.log(lat, lng);
    setLocation({ lat, lng });
  });

  //* Returns JSX to DOM
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCcCmZ4SUwUZgEu_yMZ3v7irFvmHzn-ym4" }} // Will set up a .ENV file to secure the api key
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <LocationMarker lat={location.lat} lng={location.lng} />
      </GoogleMapReact>
    </div>
  );
};

Map.defaultProps = {
  //default lat and lng set to Richmond, Virginia.  Zoom is set on 10 so it will show the city.  Can be adjusted to show other states or the entire USA.
  center: {
    lat: 37.54129,
    lng: -77.434769
  },
  zoom: 10
};

export default Map;
