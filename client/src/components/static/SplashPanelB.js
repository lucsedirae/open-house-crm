//* Dependencies
import React from "react";

//* Material UI components, hooks, and icons
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import LocationOnIcon from "@material-ui/icons/LocationOn";

//* Custom components
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
          marginBottom: "1rem",
        }}
      >
        What is{" "}
        <span
          style={{
            fontSize: "43px",
            fontWeight: "900",
            textShadow:
              "-0.5px 0 #eebc0a, 0 1px #eebc0a, 1px 0 black, 0 -0.5px black",
          }}
        >
          open
          <LocationOnIcon fontSize="small" />
          house
        </span>{" "}
        ?
      </Typography>
      <Grid container spacing={1}>
        <Grid item lg={2}>
          <img src="/img/home-mobile.svg" style={{ width: "13rem" }} />
        </Grid>
        <Grid item lg={8}>
          <Typography
            align="center"
            variant="body1"
            style={{
              color: "white",
              fontFamily: "Big Shoulders Display",
              fontWeight: "800",
              fontSize: "17px",
              marginTop: "1rem",
              paddingLeft: "2rem",
              padding: "1rem",
            }}
          >
            Open House is a tool for real estate professionals to help manage
            their customers, transactions, sales tools and track key business
            indicators. Designed specifically for use on mobile devices and
            tablets, the application is easy to navigate on devices of all sizes
            including desktops. Information cards, charts, forms, and navigation
            are intuitive, organized and compartmentalized to give you quick
            access to your data while in the field and on the job.
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
          marginBottom: "1rem",
        }}
      >
        What can{" "}
        <span
          style={{
            fontSize: "43px",
            fontWeight: "900",
            textShadow:
              "-0.5px 0 #eebc0a, 0 1px #eebc0a, 1px 0 black, 0 -0.5px black",
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
