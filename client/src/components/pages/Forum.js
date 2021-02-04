//* Dependencies
import React, { useContext, useEffect, useState } from "react";

//* Material UI components, hooks, and icons
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";

//* Custom components
import NavPanel from "../layout/NavPanel";
import UserForm from "../myAccount/UserForm";
import ForumPosts from "../forum/ForumPosts"

//* Defines styles to be served via makeStyles MUI hook
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    marginBottom: "1rem"
  },
  header: {
    textAlign: "center",
    marginTop: "1rem",
    marginBottom: "1rem"
  }
}));

//* Exported component
const Forum = () => {
  //* Initializes styling classes
  const classes = useStyles();

  //* Returns JSX to DOM
  return (
    <Container>
      <Typography
        variant="h4"
        style={{ marginTop: "7rem" }}
        className={classes.header}
      >
       Agent Forum
      </Typography>

      <Grid container spacing={3} alignItems='center' justify='center'>
        <Grid item xs={12} sm={12} md={8} align="center">
          <NavPanel />
        </Grid>
      </Grid>
      <Paper className={classes.paper}>
        <ForumPosts />
      </Paper>
    </Container>
  );
};

export default Forum;
