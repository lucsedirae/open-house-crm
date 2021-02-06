//* Dependencies
import React, { Fragment, useContext, useEffect, useState } from "react";
import axios from "axios";

//* Material-UI components, hooks, and icons
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { DataGrid } from "@material-ui/data-grid";

//* Custom components
import Spinner from "../layout/Spinner";
import TransactionItem from "../transactions/TransactionItem";

//* State context
import TransactionsContext from "../../context/transactions/transactionContext";

const columns = [
  { field: "trxName", headerName: "Transaction Name", width: 260 },
  { field: "revenue", headerName: "Revenue", width: 130 },
  { field: "cost", headerName: "Cost", width: 130 },
  { field: "profit", headerName: "Profit", width: 130 },
  { field: "type", headerName: "Type", width: 130 },
];

//* Exported component
const TransactionsGrid = ({
  transactions,
  setTransactions,
  currentTransaction,
  setCurrentTrx,
  selectedTrxId,
  setSelectedTrxId,
  findCurrentTrx
}) => {
  // const [transactions, setTransactions] = useState([]);
  // const [selectedTrxId, setSelectedTrxId] = useState(null);
  // const [currentTransaction, setCurrentTrx] = useState(null);

  // //* Compares the selected transaction id to objects in transactions to pull the full object
  // //* out that matches the selected id.
  // const findCurrentTrx = (id) => {
  //   transactions.map((transaction) => {
  //     if (transaction._id == id) {
  //       setCurrentTrx(transaction);
  //     }
  //   });
  // };

  // //* Retrieves transactions from MongoDB
  // const getTransactions = async () => {
  //   const res = await axios.get("/api/transactions");
  //   const data = res.data;
  //   setTransactions(data);
  // };

  // useEffect(() => {
  //   getTransactions();
  // }, []);
    
    //* Returns JSX to DOM if transactions is empty
    if (transactions !== null && transactions.length === 0) {
      return (
        <Typography variant="h4" align="center" style={{ marginTop: "3rem" }}>
        Transaction List is Empty!
      </Typography>
    );
  }
  
  //* Returns JSX to DOM if transactions is not empty
  return (
    <Fragment>
      {currentTransaction !== null ? (
        <TransactionItem
        selectedTrxId={selectedTrxId}
        transaction={currentTransaction}
        />
        ) : (
          <Typography align="center" variant="h5">
          Please select a transaction
        </Typography>
      )}

      {transactions !== null ? (
        <Box style={{ height: 400, width: "64%", margin: "0 auto" }}>
          <DataGrid
            rows={transactions.map((transaction) => ({
              id: transaction._id,
              trxName: transaction.trxName,
              revenue: `$${transaction.revenue}`,
              cost: `$${transaction.cost}`,
              profit: `$${transaction.revenue - transaction.cost}`,
              type: transaction.type,
            }))}
            columns={columns}
            pageSize={10}
            density="compact"
            onSelectionChange={(newSelection) => {
              findCurrentTrx(newSelection.rowIds);
            }}
            />
        </Box>
      ) : (
        <Spinner />
        )}
    </Fragment>
  );
};

//* Returns JSX to DOM if transactions is not empty
export default TransactionsGrid;
