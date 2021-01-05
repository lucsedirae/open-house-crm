//* Dependencies
import React from "react";

//* Material UI components, hooks, and icons
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import HouseIcon from "@material-ui/icons/House";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Appbar = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
        </IconButton>
          <HouseIcon fontSize="large" style={{marginRight: "10px"}}/>
        <Typography variant="h5" className={classes.title}>
          Open House CRM
        </Typography>
        <Button color="inherit" href="/">Home</Button>
        <Button color="inherit" href="/about">About</Button>
        <Button color="inherit" href="/dashboard">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
