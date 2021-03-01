//* Dependencies and hooks
import React from "react";
import styles from "./static.module.css";

//* Material UI components, hooks, and icons
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

//* Exported component
const FeaturesB = () => {
  //* Returns JSX to DOM
  return (
    <Card className={styles.card}>
      <CardHeader
        title={
          <Typography className={styles.header}>Business Analytics</Typography>
        }
      />
      <CardMedia
        image="/img/charts.svg"
        component="img"
        className={styles.cardMedia}
      />

      <Typography variant="body1">
        Watch your business grow by displaying transaction data in a series of
        dynamic charts.
      </Typography>
    </Card>
  );
};

export default FeaturesB;
