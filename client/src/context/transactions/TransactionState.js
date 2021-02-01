//* Dependencies
import React, { useReducer } from "react";
import axios from "axios";
import transactionReducer from "./transactionReducer";

//* Action types
import {
  ADD_TRANSACTION,
  CLEAR_TRANSACTIONS,
  CLEAR_CURRENT_TRX,
  CLEAR_TRX_FILTER,
  TRANSACTION_ERROR,
  DELETE_TRANSACTION,
  FILTER_TRANSACTIONS,
  GET_TRANSACTIONS,
  SET_CURRENT_TRX,
  UPDATE_TRANSACTION
} from "../types";

//* State context
import TransactionContext from "./transactionContext";

const TransactionState = (props) => {
  const initialState = {
    transactions: null,
    current: null,
    filtered: null,
    error: null
  };

  const [state, dispatch] = useReducer(transactionReducer, initialState);

  //* Get Transactions
  const getTransactions = async () => {
    try {
      const res = await axios.get("/api/transactions");

      dispatch({ type: GET_TRANSACTIONS, payload: res.data });
    } catch (err) {
      dispatch({ type: TRANSACTION_ERROR, payload: err.response.msg });
    }
  };

  //* Add Transaction
  const addTransaction = async (transaction) => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    try {
      const res = await axios.post("/api/transactions", transaction, config);

      dispatch({ type: ADD_TRANSACTION, payload: res.data });
    } catch (err) {
      dispatch({ type: TRANSACTION_ERROR, payload: err.response.msg });
    }
  };

  //* Delete Transaction
  const deleteTransaction = async (id) => {
    try {
      await axios.delete(`/api/transactions/${id}`);

      dispatch({
        type: DELETE_TRANSACTION,
        payload: id
      });
    } catch (err) {
      dispatch({
        type: TRANSACTION_ERROR,
        payload: err.response.msg
      });
    }
  };

  //* Clear transactions
  const clearTransactions = () => {
    dispatch({ type: CLEAR_TRANSACTIONS });
  };

  //* Set current transaction
  const setCurrentTrx = (transaction) => {
    dispatch({ type: SET_CURRENT_TRX, payload: transaction });
  };

  //* Clear current transaction
  const clearCurrentTrx = () => {
    dispatch({ type: CLEAR_CURRENT_TRX });
  };

  //* Update Transaction
  const updateTransaction = async (transaction) => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    try {
      const res = await axios.put(
        `/api/transactions/${transaction._id}`,
        transaction,
        config
      );

      dispatch({
        type: UPDATE_TRANSACTION,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: TRANSACTION_ERROR,
        payload: err.response.msg
      });
    }
  };

  //* Filter Transactions
  const filterTransactions = (text) => {
    dispatch({ type: FILTER_TRANSACTIONS, payload: text });
  };

  //* Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_TRX_FILTER });
  };

  return (
    <TransactionContext.Provider
      value={{
        transactions: state.transactions,
        current: state.current,
        error: state.error,
        filtered: state.filtered,
        addTransaction,
        clearTransactions,
        clearCurrentTrx,
        clearFilter,
        deleteTransaction,
        filterTransactions,
        getTransactions,
        setCurrentTrx,
        updateTransaction
      }}
    >
      {props.children}
    </TransactionContext.Provider>
  );
};

export default TransactionState;
