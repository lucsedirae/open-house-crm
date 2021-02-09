//* Dependencies
import React, { Fragment, useContext, useEffect, useState } from 'react';

//* Material-UI components, hooks, and icons
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { DataGrid } from '@material-ui/data-grid';

//* Custom components
import Spinner from '../layout/Spinner';
import TransactionItem from '../transactions/TransactionItem';

//* Defines columns for transaction grid
const columns = [
  { field: 'trxName', headerName: 'Transaction Name', width: 260 },
  { field: 'revenue', headerName: 'Revenue', width: 130 },
  { field: 'cost', headerName: 'Cost', width: 130 },
  { field: 'profit', headerName: 'Profit', width: 130 },
  { field: 'type', headerName: 'Type', width: 130 },
];

//* Exported component
const TransactionsGrid = ({
  transactions,
  deleteTransaction,
  currentTransaction,
  setCurrentTrx,
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
      <Typography variant='h4' align='center' style={{ marginTop: '3rem' }}>
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
        <Typography align='center' variant='h5'>
          Please select a transaction
        </Typography>
      )}

      {transactions !== null ? (
        <Box style={{ height: 400, width: '64%', margin: '0 auto' }}>
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
            density='compact'
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
