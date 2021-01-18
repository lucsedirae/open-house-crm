//* Dependencies
import React, { Fragment, useContext } from "react";

//* Material UI components, hooks, and icons
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import HouseIcon from "@material-ui/icons/House";

//* State context
import AuthContext from "../../context/auth/authContext";
import ContactContext from "../../context/contact/contactContext";

//* Defines styles to be served via makeStyles MUI hook
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    cursor: "default",
  },
  appBar: {
    marginTop: "0",
  },
}));

//* Exported component
const Appbar = () => {
  //* Initializes styling classes
  const classes = useStyles();

  //* Initializes state context
  const authContext = useContext(AuthContext);
  const contactContext = useContext(ContactContext);
  const { isAuthenticated, logout, user } = authContext;
  const { clearContacts } = contactContext;

  //* Handles logout
  const onLogout = () => {
    logout();
    clearContacts();
  };

  //* Populates logged in user AppBar links
  const authLinks = (
    <Fragment>
      <Typography variant="body2" style={{ marginRight: "5px" }}>
        Hello {user && user.name}!
      </Typography>
      <Button color="inherit" href="#!" onClick={onLogout}>
        Logout
      </Button>
      <ExitToAppIcon />
    </Fragment>
  );

  //* Populates unauthenticated(logged out) user AppBar links
  const guestLinks = (
    <Fragment>
      <Button color="inherit" href="/login">
        Login
      </Button>
      <Button color="inherit" href="/register">
        Register
      </Button>
    </Fragment>
  );

  //* Returns JSX to DOM
  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        />
        <HouseIcon fontSize="large" style={{ marginRight: "10px" }} />
        <Typography variant="h5" className={classes.title}>
          Open House CRM
        </Typography>
        {isAuthenticated ? authLinks : guestLinks}
        <Button color="inherit" href="/">
          Home
        </Button>
        <Button color="inherit" href="/about">
          About
        </Button>
        <Button color="inherit" href="/develop">
          Develop
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
