//* Dependencies
import React from "react";
import styles from "./static.module.css";

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
  //? JD-2/28/21 Can the classnames be merged into the static.module.css to keep it modular and cleaner?
  //* Returns JSX to DOM
  return (
    <Container>
      <Grid container spacing={3} alignItems="center" justify="center">
        <Grid item sm={12} md={7} style={{ textAlign: "center" }}>
          <Paper className={styles.panel}>
            <Typography
              align="center"
              variant="h1"
              className={("main-logo", styles.title)}
            >
              open
              <LocationOnIcon fontSize="large" />
              house
            </Typography>
            <Typography
              align="center"
              variant="body1"
              className={styles.subtitle}
            >
              An open source CRM designed for real estate professionals
            </Typography>

            <Button
              href="/login"
              variant="contained"
              className={styles.loginButton}
            >
              Login
            </Button>
            <Button
              href="/register"
              variant="contained"
              className={styles.registerButton}
            >
              Register
            </Button>

            <Button href="#features" className={styles.learnButton}>
              Want to learn more? <KeyboardArrowDownIcon />
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SplashPanelA;
