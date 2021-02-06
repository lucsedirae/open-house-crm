import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));

const style = {
  margin: 0,
  top: "auto",
  right: 60,
  bottom: 20,
  left: "auto",
  position: "fixed",
  backgroundColor: "#008B8B",
  color: "white",
  border: "3px solid darkslategrey ",
  width: "4rem",
  height: "4rem"
};

export default function FloatingAction({ handleClickOpen }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Tooltip title="Add Contact" placement="left">
        <Fab aria-label="add" style={style} onClick={handleClickOpen}>
          <AddIcon />
        </Fab>
      </Tooltip>
    </div>
  );
}
