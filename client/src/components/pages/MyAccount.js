//* Dependencies
import React, { useContext, useEffect } from "react";

//* Material UI components, hooks, and icons
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
const MyAccount = () => {
  //* Initializes styling classes
  const classes = useStyles();
  
  //* Initializes state
  const authContext = useContext(AuthContext);
  const { isAuthenticated, logout, user } = authContext;

  //* Authenticates user token
  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);
  
  const onSubmit = (e) => {
    e.preventDefault();
  };

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
      <Paper>
        <Typography variant="h5">Account Details</Typography>
        <Typography><strong>Name: </strong>{user && user.name}</Typography>
        <form
          className={classes.root}
          autoComplete="off"
          onSubmit={onSubmit}
        ></form>
      </Paper>
    </Container>
  );
};

export default MyAccount;
