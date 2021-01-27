//* Dependencies
import React, { useEffect, useContext, useState } from "react";

//* Material UI components, hooks, and icons
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

//* State context
import TransactionContext from "../../context/transactions/transactionContext";

//* Defines styles to be served via makeStyles MUI hook
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

//* Exported component
const TransactionForm = ({ handleClose }) => {
  //* Initializes styling classes
  const classes = useStyles();

  //* Initializes context state
  const transactionContext = useContext(TransactionContext);
  const {
    addTransaction,
    updateTransaction,
    clearCurrentTrx,
    current,
  } = transactionContext;

  useEffect(() => {
    if (current !== null) {
      setTransaction(current);
    } else {
      setTransaction({
        trxName: "",
        cost: null,
        revenue: null,
        dateOpened: Date.now,
        dateClosed: null,
        expectedCloseDate: Date.now,
        type: "",
      });
    }
  }, [transactionContext, current]);

  const [transaction, setTransaction] = useState({
    trxName: "",
    cost: null,
    revenue: null,
    dateOpened: Date.now,
    dateClosed: null,
    expectedCloseDate: Date.now,
    type: "",
  });

  const {
    trxName,
    cost,
    revenue,
    dateOpened,
    dateClosed,
    expectedCloseDate,
    type,
  } = transaction;

  const onChange = (e) => {
    setTransaction({ ...transaction, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (current === null) {
      addTransaction(transaction);
    } else {
      updateTransaction(transaction);
    }

    setTransaction({
      trxName: "",
      cost: null,
      revenue: null,
      dateOpened: Date.now,
      dateClosed: null,
      expectedCloseDate: Date.now,
      type: "",
    });
  };
  const clearAll = () => {
    clearCurrentTrx();
  };

  //* Returns JSX to DOM
  return (
    <form className={classes.root} autoComplete="off" onSubmit={onSubmit}>
      <Typography variant="h5" style={{ textAlign: "center" }}>
        {current ? "Edit Transaction" : "Add Transaction"}
      </Typography>

      <Box style={{ textAlign: "center" }}></Box>
      <Button
        variant="outlined"
        type="submit"
        color="primary"
        fullWidth={true}
        style={{ marginTop: "1rem", marginBottom: "1rem" }}
        onClick={handleClose}
      >
        Submit
      </Button>
      {current && (
        <Button
          variant="outlined"
          fullWidth={true}
          type="submit"
          color="secondary"
          style={{ marginBottom: "1rem" }}
          onClick={clearAll}
        >
          Clear
        </Button>
      )}
    </form>
  );
};
export default TransactionForm;
