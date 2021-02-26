//* Dependencies
import React from "react";
import background from "../../img/Subtle-Prism2.svg";

//* Material UI components, hooks, and icons
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import LocationOnIcon from "@material-ui/icons/LocationOn";

//* Exported component
const SplashPanelA = () => {
  //* Returns JSX to DOM
  return (
    <Container>
      <Grid container spacing={3} alignItems="center" justify="center">
        <Grid item sm={12} md={7} style={{ textAlign: "center" }}>
          <Paper
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              borderRadius: "1rem",
              padding: "30px",
              marginTop: "17rem",
              border: "1px solid #008B8B",
              background: `url(${background})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <Typography
              align="center"
              variant="h1"
              className="main-logo"
              style={{
                color: "#008B8B",
                fontFamily: "Big Shoulders Display",
                fontWeight: "900",
                textShadow:
                  "-1px 0 #FCE181, 0 2px #FCE181, 2px 0 #FCE181, 0 -1px #FCE181",
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
                fontSize: "17px",
                marginTop: "1rem",
              }}
            >
              An open source CRM designed for real estate professionals
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
                width: "40%",
                display: "block",
                margin: "10px auto",
              }}
            >
              Login
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
                width: "40%",
              }}
            >
              Register
            </Button>

            <Button
              href="#features"
              style={{
                color: "rgb(1, 58, 58)",
                fontSize: "18px",
                border: "2.5px solid #008B8B",
                fontFamily: "Big Shoulders Display",
                fontWeight: "700",
                display: "block",
                margin: "0 auto",
                marginTop: "1rem",
                border: "none",
              }}
            >
              Want to learn more? <KeyboardArrowDownIcon />
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SplashPanelA;
