//* Dependencies
import React, { useEffect, useContext } from "react";

//* Material-UI components, hooks, and icons
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

//* Custom components
import NavPanel from "../layout/NavPanel";

//* State context
import AuthContext from "../../context/auth/authContext";

//* Defines styles to be served via makeStyles MUI hook
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    marginBottom: "1rem",
  },
  header: {
    textAlign: "center",
    marginTop: "1rem",
    marginBottom: "1rem",
  },
}));

//* Exported component
const Inventory = () => {
  //* Initializes styling classes
  const classes = useStyles();

  //* Initializes state
  const authContext = useContext(AuthContext);

  //* Authenticates user token
  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  //* Returns JSX to DOM
  return (
    <Container>
    <Typography variant="h4" className={classes.header}>
      Inventory
    </Typography>
    <Grid container spacing={3}>
      <Grid item xs={12} sm={12} md={6}>
        <NavPanel />
        {/* Transaction form goes here - see ContactForm.js for reference */}
      </Grid>

      <Grid item xs={12} sm={12} md={6}>
        {/* Transaction list goes here - see ContactItem.js for reference */}
      </Grid>
    </Grid>
  </Container>
  );
};

export default Inventory;
