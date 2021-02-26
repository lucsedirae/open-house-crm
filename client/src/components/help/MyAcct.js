//* Dependencies
import React from "react";

//* Material UI components, hooks, and icons
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

//* Exported component
const MyAcct = () => {
    //* Returns JSX to DOM
  return (
    <div id="myacct">
      <IconButton href="#">
        <ExpandLessIcon />
      </IconButton>

      <Card style={{ padding: "1rem" }}>
        <Typography variant="h5" style={{ margin: ".5rem" }}>
          User Settings Panel (My Account)
        </Typography>
        <CardContent>
          <Typography variant="body1">
            The user settings, or "my account", module is currently in
            development. Users will be able to update their personal data as
            well as manage the application's settings from this module.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default MyAcct;
