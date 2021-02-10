//* Dependencies
import React from "react";

//* Material UI components, hooks, and icons
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Typography from "@material-ui/core/Typography";
import BlurOnIcon from "@material-ui/icons/BlurOn";

import LocationOnIcon from "@material-ui/icons/LocationOn";
import background from "../../img/Subtle-Prism2.svg";
import FeaturesA from "./FeaturesA";
import FeaturesB from "./FeaturesB";
import FeaturesC from "./FeaturesC";
import FeaturesD from "./FeaturesD";
import FeaturesE from "./FeaturesE";
import FeaturesF from "./FeaturesF";

//* Exported component
const SplashPanelB = () => {
  //* Returns JSX to DOM
  return (
    <Container disableGutters>
      <Typography
        align="center"
        variant="h4"
        style={{
          color: "#008B8B",
          color: "white",
          fontFamily: "Big Shoulders Display",
          fontWeight: "800",
          paddingTop: "2rem",
          marginBottom: "1rem"
        }}
      >
        What is{" "}
        <span
          style={{
            fontSize: "43px",
            fontWeight: "900",
            textShadow:
              "-0.5px 0 #eebc0a, 0 1px #eebc0a, 1px 0 black, 0 -0.5px black"
          }}
        >
          open
          <LocationOnIcon fontSize="small" />
          house
        </span>{" "}
        ?
      </Typography>
      <Grid container spacing={0}>
        <Grid item lg={2}>
          <img src="/img/home-mobile.svg" style={{ width: "15rem" }} />
        </Grid>
        <Grid item lg={10}>
          <Typography
            align="center"
            variant="body1"
            style={{
              color: "white",
              fontFamily: "Big Shoulders Display",
              fontWeight: "800",
              fontSize: "17px",
              marginTop: "3rem"
            }}
          >
            Open House is a tool for real estate professionals to help manage
            their customers, transactions, sales tools and track key business
            indicators.
          </Typography>
        </Grid>
      </Grid>

      <Typography
        align="center"
        variant="h4"
        style={{
          color: "#008B8B",
          color: "white",
          fontFamily: "Big Shoulders Display",
          fontWeight: "800",
          paddingTop: "2rem",
          marginBottom: "1rem"
        }}
      >
        What can{" "}
        <span
          style={{
            fontSize: "43px",
            fontWeight: "900",
            textShadow:
              "-0.5px 0 #eebc0a, 0 1px #eebc0a, 1px 0 black, 0 -0.5px black"
          }}
        >
          open
          <LocationOnIcon fontSize="small" />
          house
        </span>{" "}
        do for{" "}
        <span style={{ fontStyle: "italic", textDecoration: "underline" }}>
          you
        </span>{" "}
        ?
      </Typography>
      <Grid container spacing={3}>
        <Grid item sm={6} md={4} lg={2} style={{ paddingBottom: "4rem" }}>
          <FeaturesA />
        </Grid>

        <Grid item sm={6} md={4} lg={2} style={{ paddingBottom: "4rem" }}>
          <FeaturesB />
        </Grid>

        <Grid item sm={6} md={4} lg={2} style={{ paddingBottom: "4rem" }}>
          <FeaturesC />
        </Grid>

        <Grid item sm={6} md={4} lg={2} style={{ paddingBottom: "4rem" }}>
          <FeaturesD />
        </Grid>

        <Grid item sm={6} md={4} lg={2} style={{ paddingBottom: "4rem" }}>
          <FeaturesE />
        </Grid>

        <Grid item sm={6} md={4} lg={2} style={{ paddingBottom: "4rem" }}>
          <FeaturesF />
        </Grid>
      </Grid>
    </Container>
  );
};

export default SplashPanelB;
