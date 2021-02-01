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
      <Grid container spacing={3} alignItems="center" justify="center">
        <Grid item sm={12} md={7} style={{ textAlign: "center" }}>
          <Paper
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              borderRadius: "1rem",
              padding: "30px",
              border: "1px solid #008B8B",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <Typography
              align="center"
              variant="body1"
              style={{
                color: "#008B8B",
                color: "rgb(1, 58, 58)",
                fontFamily: "Big Shoulders Display",
                fontWeight: "800",
                fontSize: "17px",
                marginBottom: "1rem",
              }}
            >
              Open House is a tool for real estate professionals to help manage
              their customers, transactions, sales tools and track key business
              indicators.
            </Typography>
            <img src="/img/for-sale.svg" style={{ width: "15rem" }} />
            <Typography
              align="center"
              variant="h4"
              style={{
                color: "#008B8B",
                color: "rgb(1, 58, 58)",
                fontFamily: "Big Shoulders Display",
                fontWeight: "800",
                marginTop: "1rem",
                marginBottom: "1rem",
              }}
            >
              Features
            </Typography>
            <Grid container spacing={3}>
              <Grid item sm={12} md={6} lg={4}>
                <FeaturesA />
              </Grid>

              <Grid item sm={12} md={6} lg={4}>
                <FeaturesB />
              </Grid>

              <Grid item sm={12} md={6} lg={4}>
                <FeaturesC />
              </Grid>
            </Grid>

            <Grid container spacing={3} style={{ marginTop: "1rem" }}>
              <Grid item sm={12} md={6} lg={4}>
                <FeaturesD />
              </Grid>

              <Grid item sm={12} md={6} lg={4}>
                <FeaturesE />
              </Grid>

              <Grid item sm={12} md={6} lg={4}>
                <FeaturesF />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SplashPanelB;
