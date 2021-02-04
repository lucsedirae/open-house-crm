//* Dependencies
import React, { Fragment, useContext, useEffect, useState } from 'react';
import '../../App.css';


//* Material-UI components, hooks, and icons
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { DataGrid } from '@material-ui/data-grid';

//* Custom components
import Spinner from "../layout/Spinner";
import TransactionItem from "../transactions/TransactionItem";

//* State context
import TransactionsContext from '../../context/transactions/transactionContext';

const columns = [
	{ field: "trxName", headerName: "Transaction Name", width: 260 },
	{ field: "revenue", headerName: "Revenue", width: 130 },
	{ field: "cost", headerName: "Cost", width: 130 },
	{ field: "profit", headerName: "Profit", width: 130 },
];

//* Exported component
const TransactionsGrid = () => {
  const transactionContext = useContext(TransactionsContext);
  const [selectedTrx, setSelectedTrx] = useState(null);

	const {
		transactions,
		getTransactions,
		loading,
		setCurrentTrx,
	} = transactionContext;

	//* Gets transactions from MongoDB
	useEffect(() => {
		getTransactions();
		// eslint-disable-next-line
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
      {selectedTrx !== null ? (
        <Fragment>
          <h1>{selectedTrx}</h1>
          <TransactionItem selectedTrx={selectedTrx} />
        </Fragment>
      ) : (
        <h1>Select a transaction</h1>
      )}

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
						density="compact"
						onSelectionChange={(newSelection) => {
							setSelectedTrx(newSelection.rowIds);
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
