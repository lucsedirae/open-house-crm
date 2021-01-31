//* Dependencies
import React from "react";

//* Material UI components, hooks, and icons
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Typography from "@material-ui/core/Typography";
import BlurOnIcon from "@material-ui/icons/BlurOn";

import LocationOnIcon from "@material-ui/icons/LocationOn";
import background from "../../img/Subtle-Prism2.svg";

//* Exported component
const SplashPanelA = () => {
  //* Returns JSX to DOM
  return (
    <Container>
      <Grid container spacing={3} alignItems="center" justify="center">
        <Grid item sm={12} md={7} style={{ textAlign: "center" }}>
          <div
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              borderRadius: "1rem",
              padding: "30px",
              marginTop: "15rem",
              border: "1px solid #008B8B",
              background: `url(${background})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover"
            }}
          >
            <Typography
              align="center"
              variant="h1"
              style={{
                color: "#008B8B",
                fontFamily: "Big Shoulders Display",
                fontWeight: "900",
                textShadow:
                  "-1px 0 #FCE181, 0 2px #FCE181, 2px 0 #FCE181, 0 -1px #FCE181"
              }}
            >
              open
              <LocationOnIcon fontSize="large" />
              house
            </Typography>
            <Typography
              align="center"
              variant="body1"
              style={{
                color: "#008B8B",
                color: "rgb(1, 58, 58)",
                fontFamily: "Big Shoulders Display",
                fontWeight: "800",
                fontSize: "17px"
              }}
            >
              An open source platform for building business dashboards and
              customer relationship management apps
            </Typography>

            <Button
              href="/login"
              variant="contained"
              style={{
                backgroundColor: "#008B8B",
                color: "white",
                marginTop: "10px",
                fontSize: "18px",
                fontFamily: "Big Shoulders Display",
                fontWeight: "600",
                width: "50%",
                display: "block",
                margin: "10px auto"
              }}
            >
              Already a member? Login
            </Button>
            <Button
              href="/register"
              variant="contained"
              style={{
                backgroundColor: "#008B8B",
                color: "white",
                fontSize: "18px",
                fontFamily: "Big Shoulders Display",
                fontWeight: "600",
                width: "50%"
              }}
            >
              Register
            </Button>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SplashPanelA;
