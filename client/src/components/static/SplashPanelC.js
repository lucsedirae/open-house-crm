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
              Open House is open source software. See what the future holds for
              OHCRM and learn how you can contribute.
            </Typography>
            <img src="/img/develop.svg" style={{ width: "15rem" }} />
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
              Development
            </Typography>
            <Grid container spacing={3}></Grid>

            <Button
              href="https://github.com/lucsedirae/open-house-crm"
              variant="contained"
              startIcon={<GitHubIcon />}
              style={{
                backgroundColor: "#008B8B",
                color: "white",
                marginTop: "10px",
                fontSize: "18px",
                fontFamily: "Big Shoulders Display",
                fontWeight: "600",
                width: "50%",
                display: "block",
                margin: "10px auto",
              }}
            >
              Visit us on GitHub
            </Button>

            <Typography
              variant="h5"
              align="center"
              style={{ marginTop: "1rem" }}
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

            <Typography
              variant="h5"
              align="center"
              style={{ marginTop: "1rem" }}
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
                  Convert application to a package and distribute through NPM to allow developers access to design custom platforms based on OHCRM
                </ListItem>
                <ListItem>
                  Add offline access by converting to a progressive web app and caching locally
                </ListItem>
                <ListItem>
                  Expand transaction module to include more accounting functions
                </ListItem>
              </List>
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SplashPanelC;
