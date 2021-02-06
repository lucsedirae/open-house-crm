//* Dependencies
import React, { useContext, useEffect } from "react";

//* Material UI components, hooks, and icons
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

//* Custom components
import Contacts from "../contacts/Contacts";
import ContactFilter from "../contacts/ContactFilter";
import FloatingAction from "../layout/FloatingAction";
import ContactFormModal from "../contacts/ContactFormModal";
import ContactForm from "../contacts/ContactForm";
import NavPanel from "../layout/NavPanel";
import NoteCard from "../contacts/NoteCard";

//* State context
import AuthContext from "../../context/auth/authContext";

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
    marginTop: "5rem",
    marginBottom: "1rem",
    fontFamily: "Big Shoulders Display",
    fontWeight: "700"
  }
}));

//* Exported component
export const Dashboard = () => {
  //* Initializes styling classes
  const classes = useStyles();

  //* Initializes state
  const authContext = useContext(AuthContext);

  //* Authenticates user token
  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  //* Returns JSX to DOM
  return (
    <Container>
      <Typography variant="h4" className={classes.header}>
        Contacts
      </Typography>
      <Grid container spacing={3} alignItems="center" justify="center">
        {/* <Grid item xs={12} sm={12} md={6}>
          
          <Paper className={classes.paper}>
            <ContactForm />
          </Paper>
          <Paper className={classes.paper}>
            <NoteCard />
          </Paper>
        </Grid> */}

        <Grid item xs={12} sm={12} md={8} align="center">
          <NavPanel />
          <ContactFilter />
          <Contacts />
        </Grid>
      </Grid>
      <ContactFormModal />
    </Container>
  );
};

export default Dashboard;
