//* Dependencies
import React, { useContext, useRef, useEffect } from "react";
import TransactionContext from "../../context/transactions/transactionContext";

//* Material-UI components, hooks, and icons
import TextField from "@material-ui/core/TextField";
import AccountCircle from "@material-ui/icons/AccountCircle";
import InputAdornment from "@material-ui/core/InputAdornment";

//* Exported component
export const TransactionFilter = () => {
  const transactionContext = useContext(TransactionContext);
  const { filterTransactions, clearFilter, filtered } = transactionContext;

  const text = useRef("");

  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  });

  const onChange = (e) => {
    if (text.current.value !== "") {
      filterTransactions(e.target.value);
    } else {
      clearFilter();
    }
  };

  //* Returns JSX to DOM
  return (
    <form>
      <TextField
        variant="standard"
        fullWidth={true}
        color="primary"
        type="text"
        size="small"
        name="text"
        helperText="Search by name or email"
        inputRef={text}
        onChange={onChange}
        style={{ marginBottom: "2rem", marginTop: "2rem" }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          )
        }}
      />
    </form>
  );
};

export default TransactionFilter;
