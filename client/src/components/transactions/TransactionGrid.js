//* Dependencies
import React, { useContext, useEffect } from "react";

//* Material-UI comps, hooks, icons
import { DataGrid } from "@material-ui/data-grid";

//* State context
import TransactionContext from "../../context/transactions/transactionContext";

const columns = [
  { field: "trxName", headerName: "Transaction", width: 260 },
  { field: "revenue", headerName: "Revenue", width: 130 },
  { field: "cost", headerName: "Cost", width: 130 },
  { field: "id", headerName: "ID", width: 240 },
];

//* Exported react component
const TransactionGrid = () => {
  const transactionContext = useContext(TransactionContext);

  const {
    current,
    transactions,
    setCurrentTrx,
    clearCurrentTrx,
    getTransactions,
  } = transactionContext;

  //* Gets transactions from MongoDB
  useEffect(() => {
    getTransactions();
    console.table(transactions)
    // eslint-disable-next-line
  }, []);

  const rows = transactions.map((transaction) => ({
    id: transaction._id,
    trxName: transaction.trxName,
    revenue: transaction.revenue,
    cost: transaction.cost
  }));

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
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} />
    </div>
  );
};

export default TransactionGrid;
