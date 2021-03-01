//* Dependencies
import React from "react";
import styles from "./contacts.module.css";

//* Material UI components, hooks, and icons
import Chip from "@material-ui/core/Chip";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";

//* Exported component
const NameTag = ({ contactType, contactName }) => {
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

  //* Returns JSX to DOM
  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        <Typography variant="h5" className={styles.name}>
          {contactName}{" "}
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Chip
          size="small"
          label={contactType}
          label={contactType.charAt(0).toUpperCase() + contactType.slice(1)}
          style={{
            background: typeCheck(contactType),
          }}
          className={styles.chip}
          icon={<PersonOutlineIcon size="small" style={{ color: "white" }} />}
        />
      </Grid>
    </Grid>
  );
};

export default NameTag;
