//* Dependencies
import React, { Fragment } from "react";

//* Material UI components, hooks, and icons
import MenuItem from "@material-ui/core/MenuItem";
import ListSubheader from "@material-ui/core/ListSubheader";

const StatesUS = () => {
  const statesUS = [
    "AL",
    "AK",
    "AZ",
    "AR",
    "CA",
    "CO",
    "CT",
    "DE",
    "FL",
    "GA",
    "HI",
    "ID",
    "IL",
    "IN",
    "IA",
    "KS",
    "KY",
    "LA",
    "ME",
    "MD",
    "MA",
    "MI",
    "MN",
    "MS",
    "MO",
    "MT",
    "NE",
    "NV",
    "NH",
    "NJ",
    "NM",
    "NY",
    "NC",
    "ND",
    "OH",
    "OK",
    "OR",
    "PA",
    "RI",
    "SC",
    "SD",
    "TN",
    "TX",
    "UT",
    "VT",
    "VA",
    "WA",
    "WV",
    "WI",
    "WY",
  ];

  const territoriesUS = ["AS", "DC", "FM", "GU", "MH", "MP", "PW", "PR", "VI"];

  return (
    <Fragment>
      {/* This map is not functioning properly. The state dropdown doesn't close on select and no selection is shown on select */}
      <ListSubheader>US States </ListSubheader>
      {statesUS.map((state) => (
        <MenuItem value={state}>{state}</MenuItem>
      ))}
      <ListSubheader>US Terrirtories</ListSubheader>
      {territoriesUS.map((terr) => (
        <MenuItem value={terr}>{terr}</MenuItem>
      ))}
    </Fragment>
  );
};

export default StatesUS;
