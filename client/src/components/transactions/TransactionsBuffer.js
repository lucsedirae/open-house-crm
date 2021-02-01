//* Dependencies
import React, { Fragment, useContext, useEffect } from "react";
import "../../App.css";

//* Material-UI components, hooks, and icons
import Typography from "@material-ui/core/Typography";

//* Custom components
import TransactionItem from "./TransactionItem";
import Spinner from "../layout/Spinner";

//* State context
import TransactionsContext from "../../context/transactions/transactionContext";

//* Exported component
const Transactions = () => {
  const transactionContext = useContext(TransactionsContext);

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
        <Fragment>

          


          {transactions.map((transaction) => (
            <Fragment>
              <Typography>{transaction.trxName}</Typography>
              <TransactionItem
                key={transaction._id}
                transaction={transaction}
              />
            </Fragment>
          ))}



        </Fragment>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default Transactions;

{
  /* <Fragment>
{transactions !== null && !loading ? (
  <Fragment>
    {filtered !== null
      ? filtered.map((transaction) => (
          <TransactionItem key={transaction._id} transaction={transaction} />
        ))
      : transactions.map((transaction) => (
          <TransactionItem key={transaction._id} transaction={transaction} />
        ))}
  </Fragment>
) : (
  <Spinner />
)}
</Fragment> */
}
