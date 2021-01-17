//* Dependencies and hooks
import React from "react";

//* Material UI components, hooks, and icons
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import GitHubIcon from "@material-ui/icons/GitHub";

//* Exported component
const AboutPanelB = () => {
    //* Returns JSX to DOM
  return (
    <Paper variant="outlined" style={{ padding: "10px" }}>
      <Typography variant="h4">Developer news</Typography>
      <Typography variant="h5">Current version 0.3.2</Typography>
      <Typography variant="body1">
        The current version is a development build that features a dashboard
        demonstrating the core features of the platform.
      </Typography>

      <List>
        <ListItem>1/17/2021 - User authentication added to demo</ListItem>
        <ListItem>1/5/2021 - Material-UI implementation</ListItem>
        <ListItem>
          12/26/2020 - Node/Mongo back-end and React implementation
        </ListItem>
        <ListItem>12/24/2020 - Converted to React</ListItem>
      </List>
      <Button
        href="https://github.com/lucsedirae/open-house-crm"
        variant="contained"
        color="primary"
        size="large"
        startIcon={<GitHubIcon />}
      >
        GitHub
      </Button>
    </Paper>
  );
};

export default AboutPanelB;
