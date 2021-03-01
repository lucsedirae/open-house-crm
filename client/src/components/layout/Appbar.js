//* Dependencies
import React, { Fragment, useContext } from "react";
import styles from "./layout.module.css";

//* Material UI components, hooks, and icons
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

//* State context
import AuthContext from "../../context/auth/authContext";
import ContactContext from "../../context/contact/contactContext";

//* Exported component
const Appbar = () => {
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
      <Typography className={styles.welcome}>
        Hello, {user && user.name.split(" ")[0]}!
      </Typography>
      <Button
        color="inherit"
        href="#!"
        className={styles.logoutButton}
        onClick={onLogout}
      >
        Logout
      </Button>
      <ExitToAppIcon />
    </Fragment>
  );

  //* Populates unauthenticated(logged out) user AppBar links
  const guestLinks = (
    <Fragment>
      <div style={{ marginLeft: "auto" }}>
        <Button color="inherit" href="/login" className={styles.button}>
          Login
        </Button>
        <Button color="inherit" href="/register" className={styles.button}>
          Register
        </Button>
      </div>
    </Fragment>
  );

  //* Returns JSX to DOM
  return (
    <AppBar style={{ backgroundColor: "#008B8B" }}>
      <Toolbar>
        <IconButton
          edge="start"
          className={styles.menuButton}
          color="inherit"
          aria-label="menu"
        />
        <Button href="/" className={styles.homeButton}>
          open house
        </Button>
        {isAuthenticated ? authLinks : guestLinks}
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
