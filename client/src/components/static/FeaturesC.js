//* Dependencies and hooks
import React, { Fragment } from "react";

//* Material UI components, hooks, and icons
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";

//* Exported component
const FeaturesB = () => {
  //* Returns JSX to DOM
  return (
    <Card style={{ background: "#dbdbdb", padding: "1rem", height: "100%" }}>
      <CardHeader title="Business Analytics" />
      <CardMedia
        image="/img/charts.svg"
        component="img"
        style={{
          padding: "1rem",
          borderRadius: "1rem",
        }}
      />

      <Typography variant="body1">
        Watch your business grow by displaying transaction data in a series of
        dynamic charts.
      </Typography>
    </Card>
  );
};

export default FeaturesB;
