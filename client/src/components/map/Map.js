import { useState } from "react";
import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
import LocationInfoBox from "./LocationInfoBox";

const Map = ({ eventData, center, zoom }) => {
  const [locationInfo, setLocationInfo] = useState(null);
  const markers = eventData.map((ev) => {
    if (ev.categories[0].id === 8) {
      return (
        <LocationMarker
          lat={ev.geometries[0].coordinates[1]}
          lng={ev.geometries[0].coordinates[0]}
          onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}
        />
      );
    }
    return null;
  });
  return (
    <div className="map">
      <GoogleMapReact
        //remember to set a height and width for map div using VW and VH.
        bootstrapURLKeys={{ key: "AIzaSyCcCmZ4SUwUZgEu_yMZ3v7irFvmHzn-ym4" }} // Will set up a .ENV file to secure the api key
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
      {locationInfo && <LocationInfoBox info={locationInfo} />}
    </div>
  );
};

Map.defaultProps = {
  //default lat and lng set to Richmond, Virginia.  Zoom is set on 10 so it will show the city.  Can be adjusted to show other states or the entire USA.
  center: {
    lat: 37.54129,
    lng: -77.434769
  },
  zoom: 6
};

export default Map;
