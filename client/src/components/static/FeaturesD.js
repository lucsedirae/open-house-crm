//* Dependencies and hooks
import React, { Fragment } from "react";

//* Material UI components, hooks, and icons
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";

//* Exported component
const FeaturesD = () => {
  //* Returns JSX to DOM
  return (
    <Card style={{ background: "#dbdbdb", padding: "1rem", height:"100%" }}>
      <CardHeader title="Inventory Management" />
      <CardMedia
        image="/img/inventory.svg"
        component="img"
        style={{
          padding: "1rem",
          borderRadius: "1rem",
        }}
      />

      <Typography variant="body1">
        Never lose another lockbox! OHCRM's built-in sales tool inventory
        tracker lets you manage your tools so you maximize your investments.
      </Typography>
    </Card>
  );
};

export default FeaturesD;
