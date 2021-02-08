//! WORKING VERSION IN PROGRESS - NOT THE BACK UP!!!
//* Dependencies
import React, { useEffect, useContext, useState } from "react";
import "../../App.css";
import axios from "axios";

//* Material-UI components, hooks, and icons
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

//* Custom components
import TransactionsGrid from "../transactions/TransactionsGrid";
import TransactionFormModal from "../transactions/TransactionFormModal";
import NavPanel from "../layout/NavPanel";

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

  //* Initializes state
  const authContext = useContext(AuthContext);
  const [transactions, setTransactions] = useState([]);
  const [currentTransaction, setCurrentTrx] = useState(null);

  //* Authenticates user token and retrieves transaction list
  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
    getTransactions();
  }, []);

  //* Funcionized Axios calls to do crud operations on transactions and then prop drill down
  //* Retrieves transactions from MongoDB
  const getTransactions = async () => {
    const res = await axios.get("/api/transactions");
    setTransactions(res.data);
  };

  const addTransaction = async (transaction) => {
    const res = await axios.post("/api/transactions", transaction);
    getTransactions();
  };

  const updateTransaction = async (transaction) => {
    const res = await axios.put(
      `/api/transactions/${transaction._id}`,
      transaction
    );
    getTransactions();
    setCurrentTrx(transaction);
  };

  const clearCurrent = () => {
    setCurrentTrx(null);
  };

  const deleteTransaction = async (transaction) => {
    const res = await axios.delete(`/api/transactions/${transaction._id}`);
    clearCurrent();
    transaction = {
      trxName: "",
      type: "",
      cost: "",
      revenue: "",
      dateOpened: "",
      dateClosed: "",
      expectedCloseDate: "",
      note: "",
    };
    getTransactions();
  };

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
          deleteTransaction={deleteTransaction}
          clearCurrent={clearCurrent}
          currentTransaction={currentTransaction}
          setCurrentTrx={setCurrentTrx}
        />
      ) : (
        <Spinner />
      )}

      <TransactionFormModal
        updateTransaction={updateTransaction}
        clearCurrent={clearCurrent}
        addTransaction={addTransaction}
        currentTransaction={currentTransaction}
        setCurrentTrx={setCurrentTrx}
      />
    </Container>
  );
};

export default Transactions;
