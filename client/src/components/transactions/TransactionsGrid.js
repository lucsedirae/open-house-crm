//* Dependencies
import React, { Fragment, useContext, useEffect } from "react";
import "../../App.css";

//* Material-UI components, hooks, and icons
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { DataGrid } from "@material-ui/data-grid";
import { makeStyles } from "@material-ui/core/styles";

//* Custom components
import Spinner from "../layout/Spinner";

//* State context
import TransactionsContext from "../../context/transactions/transactionContext";

const useStyles = makeStyles(() => ({
  root: {
    textOverflow: "none",
  },
}));

const columns = [
  { field: "trxName", headerName: "Transaction Name", width: 260 },
  { field: "revenue", headerName: "Revenue", width: 130 },
  { field: "cost", headerName: "Cost", width: 130 },
  { field: "profit", headerName: "Profit", width: 130 },
];

//* Exported component
const TransactionsGrid = () => {
  const classes = useStyles();
  const transactionContext = useContext(TransactionsContext);

  const { transactions, getTransactions, loading } = transactionContext;

  //* Gets transactions from MongoDB
  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line
    console.log(transactions);
  }, []);

  //* Returns JSX to DOM if transactions is empty
  if (transactions !== null && transactions.length === 0 && !loading) {
    return (
      <Typography variant="h4" align="center" style={{ marginTop: "3rem" }}>
        Transaction List is Empty!
      </Typography>
    );
  }

  //* Returns JSX to DOM if transactions is not empty
  return (
    <Fragment>
      {transactions !== null && !loading ? (
        <Box style={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={transactions.map((transaction) => ({
              id: transaction._id,
              trxName: transaction.trxName,
              revenue: transaction.revenue,
              cost: transaction.cost,
              profit: transaction.revenue - transaction.cost,
            }))}
            columns={columns}
            pageSize={10}
            className={classes.root}
          />
        </Box>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default TransactionsGrid;
