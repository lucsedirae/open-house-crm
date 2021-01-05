//* Dependencies
import React from "react";

//* Material UI components, hooks, and icons
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

//* Custom components
import Contacts from "../contacts/Contacts";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
export const Dashboard = () => {
  const classes = useStyles();

  return (
    <Container>
      {/* New Appbar for Dashboard? */}
      <Typography variant="h4">Dashboard</Typography>

      <Grid container spacing={3}>
        <Grid item xs={6}>
          {/* <Paper className={classes.paper}> */}
            <Contacts />
          {/* </Paper> */}
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper}>
            {/* Contacts form goes here */}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
