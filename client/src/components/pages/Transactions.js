//* Dependencies
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

//* Material UI components, hooks, and icons
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

//* Custom components
import TransactionsGrid from "../transactions/TransactionsGrid";
import FloatingAction from "../layout/FloatingAction";
import TransacationFormModal from "../transactions/TransactionFormModal";
import TransacationForm from "../transactions/TransactionForm";
import NavPanel from "../layout/NavPanel";
import Spinner from "../layout/Spinner";

//* State context
import AuthContext from "../../context/auth/authContext";

//* Defines styles to be served via makeStyles MUI hook
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
    marginTop: "4rem",
    marginBottom: "1rem",
    fontFamily: "Oswald",
    fontWeight: "500",
  },
}));

//* Exported component
const Transactions = () => {
  //* Initializes styling classes
  const classes = useStyles();
  //! State and functions below this line are experimental
  const [transactions, setTransactions] = useState([]);
  const [currentTransaction, setCurrentTrx] = useState(null);
  const [selectedTrxId, setSelectedTrxId] = useState(null);

  //* Retrieves transactions from MongoDB
  const getTransactions = async () => {
    const res = await axios.get("/api/transactions");
    const data = res.data;
    setTransactions(data);
  };
  console.log(transactions);

  useEffect(() => {
    getTransactions();
  }, []);

  //* Compares the selected transaction id to objects in transactions to pull the full object
  //* out that matches the selected id.
  const findCurrentTrx = (id) => {
    transactions.map((transaction) => {
      if (transaction._id == id) {
        setCurrentTrx(transaction);
      }
    });
  };

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
        <Grid item xs={12} sm={12} md={8} align="center">
          <NavPanel />
        </Grid>
      </Grid>
      {transactions !== null ? (
        <TransactionsGrid
          transactions={transactions}
          currentTransaction={currentTransaction}
          selectedTrxId={selectedTrxId}
          setSelectedTrxId={setSelectedTrxId}
          findCurrentTrx={findCurrentTrx}
        />
      ) : (
        <Spinner />
      )}

      <TransacationFormModal />
    </Container>
  );
};

export default Transactions;
