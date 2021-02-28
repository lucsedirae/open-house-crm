//* Dependencies and hooks
import React, { Fragment } from "react";
import styles from "./static.module.css";

//* Material UI components, hooks, and icons
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import background from "../../img/Subtle-Prism2.svg";

//* Exported component
const FeaturesF = () => {
  //* Returns JSX to DOM
  return (
    <Card className={styles.card}>
      <CardHeader
        title={<Typography className={styles.header}>Custom Notes</Typography>}
      />
      <CardMedia
        image="/img/notes.svg"
        component="img"
        className={styles.cardMedia}
      />

      <Typography variant="body1">
        Want to remember your client's birthday or favorite restaurant? Add a
        note to their contact file and add value to your relationship.
      </Typography>
    </Card>
  );
};

export default FeaturesF;
