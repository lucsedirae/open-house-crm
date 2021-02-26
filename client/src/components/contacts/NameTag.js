import React from "react";

import Chip from "@material-ui/core/Chip";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";

const useStyles = makeStyles({
  title: {
    textAlign: "center",
    fontFamily: "Big Shoulders Display",
    margin: "0 auto",
    fontSize: "17px",
  },
  address: {
    textAlign: "center",
    fontSize: "18px",
    fontFamily: "Big Shoulders Display",
    margin: "0 auto",
  },

  pos: {
    marginBottom: "1rem",
  },
  buttonGroup: {
    justifyContent: "center",
  },
  Box: {
    marginTop: "1rem",
  },
});

const NameTag = ({ contactType, contactName }) => {
  const classes = useStyles();

  //* Checks the contact type and returns the appropriate chip background color
  const typeCheck = (type) => {
    switch (type) {
      case "vendor":
        return "purple";
      case "client":
        return "#008B8B";
      default:
        return "orange";
    }
  };

  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        <Typography variant="h5" className={classes.title}>
          {contactName}{" "}
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Chip
          size="small"
          label={contactType}
          // label={type.charAt(0).toUpperCase() + type.slice(1)}
          style={{
            background: typeCheck(contactType),
            color: "white",
            fontFamily: "Big Shoulders Display",
            fontWeight: "800",
          }}
          icon={<PersonOutlineIcon size="small" style={{ color: "white" }} />}
        />
      </Grid>
    </Grid>
  );
};

export default NameTag;
