import React from "react";
import { Icon } from "@iconify/react";
import locationPersonFilled from "@iconify-icons/carbon/location-person-filled";

const LocationMarker = () => {
  return (
    <div>
      <Icon icon={locationPersonFilled} className="location-icon" />
    </div>
  );
};

export default LocationMarker;
