//* Dependencies
import React, { useContext, useEffect, useState } from "react";
import "../../App.css";
import axios from "axios";

//* Material UI components, hooks, and icons
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

//* Custom components
import TransactionsGrid from "../transactions/TransactionsGrid";
import TransacationFormModal from "../transactions/TransactionFormModal";
import NavPanel from "../layout/NavPanel";

//* State context
import AuthContext from "../../context/auth/authContext";

//* Exported component
const Transactions = () => {
  //* Initializes state
  const authContext = useContext(AuthContext);
  const [transactions, setTransactions] = useState([]);

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
    const data = res.data;
    getTransactions();
    setCurrentTrx(transaction);
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
      expectedCloseDate: "'",
      note: "",
      user: "'",
    };
    getTransactions();
  };

  const [currentTransaction, setCurrentTrx] = useState(null);

  const clearCurrent = () => {
    setCurrentTrx(null);
  };

  //* Authenticates user token
  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
    getTransactions();
  }, []);

  return (
    <Container>
      <Grid container spacing={3} alignItems="center" justify="center">
        <Grid
          item
          xs={12}
          sm={12}
          md={8}
          style={{ marginTop: "5rem" }}
          align="center"
        >
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

      <TransacationFormModal
        updateTransaction={updateTransaction}
        clearCurrent={clearCurrent}
        addTransaction={addTransaction}
        currentTransaction={currentTransaction}
      />
    </Container>
  );
};

export default Transactions;
