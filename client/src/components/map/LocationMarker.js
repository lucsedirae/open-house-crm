//* Dependencies
import React, { Fragment } from "react";
import { Icon } from "@iconify/react";
import locationPersonFilled from "@iconify-icons/carbon/location-person-filled";

//* Exported component
const LocationMarker = () => {
    //* Returns JSX to DOM
  return (
    <Fragment>
      <Icon icon={locationPersonFilled} className="location-icon" />
    </Fragment>
  );
};

export default LocationMarker;
