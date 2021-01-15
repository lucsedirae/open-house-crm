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
import ContactForm from "../contacts/ContactForm";
import NoteCard from "../contacts/NoteCard";
import ContactFilter from "../contacts/ContactFilter";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    marginBottom: "1rem",
  },
  header: {
    textAlign: "center",
    marginTop: "1rem",
    marginBottom: "1rem",
  },
}));
export const Dashboard = () => {
  const classes = useStyles();

  return (
    <Container>
      <Typography variant="h4" className={classes.header}>
        Contacts
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <ContactFilter />
          <Contacts />
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <ContactForm />
          </Paper>
          <Paper className={classes.paper}>
            <NoteCard />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
