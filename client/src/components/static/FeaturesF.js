//* Dependencies and hooks
import React, { Fragment } from "react";

//* Material UI components, hooks, and icons
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";

//* Exported component
const FeaturesF = () => {
  //* Returns JSX to DOM
  return (
    <Card style={{ background: "#dbdbdb", padding: "1rem", height: "100%" }}>
      <CardHeader title="Custom Notes" />
      <CardMedia
        image="/img/notes.svg"
        component="img"
        style={{
          padding: "1rem",
          borderRadius: "1rem",
        }}
      />

      <Typography variant="body1">
        Want to remember your client's birthday or favorite restaurant? Add a
        note to their contact file and add value to your relationship.
      </Typography>
    </Card>
  );
};

export default FeaturesF;
