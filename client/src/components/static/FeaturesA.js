//* Dependencies and hooks
import React from "react";
import styles from "./static.module.css";

//* Material UI components, hooks, and icons
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";

//* Exported component
const FeaturesA = () => {
  //* Returns JSX to DOM
  return (
    <Card className={styles.card}>
      <CardHeader
        title={<Typography className={styles.header}>Contacts</Typography>}
      />
      <CardMedia
        image="/img/contacts.svg"
        component="img"
        className={styles.cardMedia}
/>
      <Typography variant="body1">
        Keep all of your contacts in one place. OHCRM allows you to update your
        contact list on the fly.
      </Typography>
    </Card>
  );
};

export default FeaturesA;
