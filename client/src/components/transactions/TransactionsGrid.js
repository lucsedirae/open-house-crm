//* Dependencies
import React, { Fragment, useState } from "react";

//* Material-UI components, hooks, and icons
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { DataGrid } from "@material-ui/data-grid";

//* Custom components
import Spinner from "../layout/Spinner";
import TransactionItem from "../transactions/TransactionItem";

//* Defines columns for transaction grid
const columns = [
  { field: 'trxName', headerName: 'Transaction Name', width: 200 },
  { field: 'revenue', headerName: 'Revenue', flex: 0.2 },
  { field: 'cost', headerName: 'Cost', flex: 0.2 },
  { field: 'profit', headerName: 'Profit', flex: 0.2 },
  { field: 'type', headerName: 'Type', flex: 0.2 },
];

//* Exported component
const TransactionsGrid = ({
  transactions,
  deleteTransaction,
  currentTransaction,
  setCurrentTrx
}) => {
  const [selectedTrxId, setSelectedTrxId] = useState(null);

  const findCurrentTrx = (id) => {
    transactions.map((transaction) => {
      if (transaction._id == id) {
        setCurrentTrx(transaction);
      }
    });
  };

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
          deleteTransaction={deleteTransaction}
        />
      ) : (
        <Typography
          align="center"
          variant="h5"
          style={{
            fontFamily: "Big Shoulders Display",
            fontSize: "18px",
            fontWeight: "600",
            marginBottom: "1rem"
          }}
        >
          Please select a transaction
        </Typography>
      )}

      {transactions !== null ? (
        <Box style={{ height: 475, width: '75%', margin: '0 auto' }}>
          <DataGrid
            rows={transactions.map((transaction) => ({
              id: transaction._id,
              trxName: transaction.trxName,
              revenue: `$${transaction.revenue}`,
              cost: `$${transaction.cost}`,
              profit: `$${transaction.revenue - transaction.cost}`,
              type: transaction.type
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

export default TransactionsGrid;
