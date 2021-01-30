//* Dependencies
import React, { useContext, useEffect } from "react";

//* Material UI components, hooks, and icons
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

//* Custom components
import TransacationsBuffer from "../transactions/TransactionsBuffer";
import TransacationFilter from "../transactions/TransactionFilter";
import FloatingAction from "../layout/FloatingAction";
import TransacationFormModal from "../transactions/TransactionFormModal";
import TransacationForm from "../transactions/TransactionForm";
import NavPanel from "../layout/NavPanel";

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
    marginTop: "1rem",
    marginBottom: "1rem",
    fontFamily: "Oswald",
    fontWeight: "500"
  }
}));

const Transactions = () => {
  //* Initializes styling classes
  const classes = useStyles();

    //* Initializes state
    const authContext = useContext(AuthContext);

      //* Authenticates user token
  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);


    return (
        <Container>
        <Typography variant="h4" className={classes.header}>
          Transacations
        </Typography>
        <Grid container spacing={3} alignItems="center" justify="center">

  
          <Grid item xs={12} sm={12} md={8}>
            <NavPanel />
            <TransacationFilter />
            <TransacationsBuffer />
          </Grid>
        </Grid>
        <TransacationFormModal />
      </Container>
      )
}

export default Transactions
