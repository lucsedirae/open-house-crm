//* Dependencies
import React, { Fragment, useContext, useEffect } from "react";
import "../../App.css";

//* Material-UI components, hooks, and icons
import Typography from "@material-ui/core/Typography";
import { DataGrid } from "@material-ui/data-grid";
//* Custom components
import TransactionGrid from "./TransactionGrid";
import Spinner from "../layout/Spinner";

//* State context
import TransactionContext from "../../context/transaction/transactionContext";

//* Exported component
const Transactions = () => {
  const transactionContext = useContext(TransactionContext);

  const {
    transactions,
    filtered,
    getTransactions,
    loading,
  } = transactionContext;

  //* Gets transactions from MongoDB
  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 90,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.getValue("firstName") || ""} ${
          params.getValue("lastName") || ""
        }`,
    },
  ];

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];

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
        <div>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            checkboxSelection
          />
        </div>
      ) : (
        <Spinner />
      )}
      {transactions !== null && !loading ? (
        <Fragment>
          {transactions.map((transaction) => (
            <TransactionGrid key={transaction._id} transaction={transaction} />
          ))}
        </Fragment>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default Transactions;
