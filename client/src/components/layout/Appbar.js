//* Dependencies
import React from "react";

//* Material UI components, hooks, and icons
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import HouseIcon from "@material-ui/icons/House";

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
        <Button color="inherit" href="/">
          Home
        </Button>
        <Button color="inherit" href="/about">
          About
        </Button>
        <Button color="inherit" href="/develop">
          Develop
        </Button>
        <Button color="inherit" href="/login">
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
