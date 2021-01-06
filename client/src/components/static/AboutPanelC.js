//* Dependencies and hooks
import React, { Fragment } from "react";

//* Material UI components, hooks, and icons
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const AboutPanelC = () => {
  return (
    <Paper variant="outlined" style={{ padding: "10px" }}>
      <Typography variant="h4">Future Development</Typography>
      <Typography variant="body1">
        The following features are planned for future development:
      </Typography>

      <List>
        <ListItem>
          Ship a build to npm as an open source React library package
        </ListItem>
        <ListItem>
          Utilize npm command line to initiate template build as part of final
          library package
        </ListItem>
        <ListItem>
          Expand transaction module to include more accounting functions
        </ListItem>
      </List>
    </Paper>
  );
};

export default AboutPanelC;
