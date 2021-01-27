//* Dependencies
import React, { useContext, useEffect, useState } from "react";

//* Material UI components, hooks, and icons
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";

//* Custom components
import NavPanel from "../layout/NavPanel";
import UserForm from "../myAccount/UserForm";

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
const MyAccount = () => {
  //* Initializes styling classes
  const classes = useStyles();

  //* Initializes context state
  const authContext = useContext(AuthContext);
  const { user } = authContext;

  //* Authenticates user token
  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  //* Returns JSX to DOM
  return (
    <Container>
      <Typography variant="h4" className={classes.header}>
        My Account
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={6}>
          <NavPanel />
        </Grid>
      </Grid>
      <Paper className={classes.paper}>
        <Typography variant="h5">Account Details</Typography>
        <form className={classes.root} autoComplete="off">
          <Typography>
            <strong>Name: </strong>
            {user && user.name}
          </Typography>

          <Typography>
            <strong>Email: </strong>
            {user && user.email}
          </Typography>

          <Typography>
            <strong>Date joined: </strong>
            {user && user.date.slice(0, 10)}
          </Typography>
        </form>
      </Paper>
      <Paper className={classes.paper}>
        <UserForm />
      </Paper>
    </Container>
  );
};

export default MyAccount;
