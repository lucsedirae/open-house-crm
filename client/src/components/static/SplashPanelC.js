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
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import GitHubIcon from "@material-ui/icons/GitHub";
import Button from "@material-ui/core/Button";

import background from "../../img/Subtle-Prism2.svg";

//* Exported component
const SplashPanelC = () => {
  //* Returns JSX to DOM
  return (
    <Container disableGutters>
      <Paper
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          padding: "30px",
          marginTop: "5rem"
        }}
      >
        <Typography
          align="center"
          variant="h4"
          style={{
            color: "#008B8B",

            fontFamily: "Big Shoulders Display",
            fontWeight: "800",
            paddingTop: "2rem",
            marginBottom: "1rem"
          }}
        >
          Want to contribute?{" "}
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
          is <span style={{ fontStyle: "italic" }}>open source.</span>
        </Typography>
        <img src="/img/develop.svg" style={{ width: "15rem" }} />
        <Grid container spacing={3}>
          <Grid item sm={12} md={5} lg={6} style={{ textAlign: "center" }}>
            <Typography
              variant="h5"
              style={{
                marginTop: "1rem",
                fontFamily: "Big Shoulders Display",
                color: "white"
              }}
            >
              Change Log
            </Typography>
            <Typography>
              <List>
                <ListItem>1/31/2021 - Transactions module is active</ListItem>
                <ListItem>
                  1/17/2021 - User authentication added to demo
                </ListItem>
                <ListItem>1/5/2021 - Material-UI implementation</ListItem>
                <ListItem>
                  12/26/2020 - Node/Mongo back-end and React implementation
                </ListItem>
              </List>
            </Typography>
          </Grid>

          <Grid item sm={12} md={5} lg={6} style={{ textAlign: "center" }}>
            <Typography
              variant="h5"
              align="center"
              style={{
                marginTop: "1rem",
                fontFamily: "Big Shoulders Display",
                color: "white"
              }}
            >
              Future Development
            </Typography>
            <Typography>
              <List>
                <ListItem>
                  Add user roles to dashboard to allow in-app administrative
                  functionality and the ability to support teams
                </ListItem>
                <ListItem>
                  Convert application to a package and distribute through NPM to
                  allow developers access to design custom platforms based on
                  OHCRM
                </ListItem>
                <ListItem>
                  Add offline access by converting to a progressive web app and
                  caching locally
                </ListItem>
                <ListItem>
                  Expand transaction module to include more accounting functions
                </ListItem>
              </List>
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default SplashPanelC;
