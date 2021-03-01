//* Dependencies and hooks
import React, { Fragment } from "react";
import styles from "./static.module.css";

//* Material UI components, hooks, and icons
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";

//* Exported component
const FeaturesB = () => {
  //* Returns JSX to DOM
  return (
    <Card className={styles.card}>
      <CardHeader
        title={
          <Typography className={styles.header}>
            Transaction Management
          </Typography>
        }
      />
      <CardMedia
        image="/img/transactions.svg"
        component="img"
        className={styles.cardMedia}
      />

      <Typography variant="body1">
        Manage active, pending, and closed transactions.
      </Typography>
    </Card>
  );
};

export default FeaturesB;
