import React, { useContext, useEffect, Fragment } from "react";

import TransactionContext from "../../context/transactions/transactionContext";
import AuthContext from "../../context/auth/authContext";
import Spinner from "../layout/Spinner"
import Typography from "@material-ui/core/Typography"

const TransactionGrid = ({transactions}) => {
  const transactionContext = useContext(TransactionContext);
  const authContext = useContext(AuthContext);


  console.table(transactions)
  if (transactions !== null && transactions.length === 0 && !loading) {
    return (
      <Typography variant="h4" align="center" style={{ marginTop: "3rem" }}>
        transaction List is Empty!
      </Typography>
    );
  }

  // console.log(transactionContext.transactions[0].trxName)
  return (
    <Fragment>
      {transactions !== null && !loading ? (
        <Fragment>
            {transactions.map((transaction) => (<li>{transaction.trxName}</li>))}
        </Fragment>
      ) : (
        <Spinner />
      )}
    </Fragment>
    // <h1>Hello World!</h1>
  );
};

export default TransactionGrid;
